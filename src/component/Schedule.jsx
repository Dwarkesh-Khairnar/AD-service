import React, { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';

const Schedule = () => {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const [peerId, setPeerId] = useState('');
    const [peer, setPeer] = useState(null);
    const [localStream, setLocalStream] = useState(null);
    const [currentCall, setCurrentCall] = useState(null);
    
    useEffect(() => {
        // Create a Peer object
        const newPeer = new Peer();
        setPeer(newPeer);
        
        // Display the peer ID
        newPeer.on('open', id => {
            console.log('My peer ID is: ' + id);
            setPeerId(id);
        });
        
        // Get local media stream
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            setLocalStream(stream);
            localVideoRef.current.srcObject = stream;

            // Listen for incoming calls
            newPeer.on('call', call => {
                call.answer(stream); // Answer the call with the local stream
                setCurrentCall(call);
                call.on('stream', remoteStream => {
                    remoteVideoRef.current.srcObject = remoteStream; // Show the remote stream
                });
            });
        })
        .catch(err => {
            console.error('Failed to get local stream', err);
        });
        
            return () => {
                newPeer.destroy(); // Clean up the peer connection on component unmount
            };
        }, []);
        // const strat=()=> {
        //     }
            
            const callPeer = () => {
                if (peer && localStream) {
            const call = peer.call(peerId, localStream); // Call the peer with the local stream
            setCurrentCall(call);
            call.on('stream', remoteStream => {
                remoteVideoRef.current.srcObject = remoteStream; // Show the remote stream
            });
        }
    };

    const endCall = () => {
        if (currentCall) {
            currentCall.close();
            remoteVideoRef.current.srcObject = null; // Clear the remote video
            setCurrentCall(null); // Reset current call
        }
    };

    const toggleVideo = () => {
        if (localStream) {
            const videoTrack = localStream.getVideoTracks()[0];
            videoTrack.enabled = !videoTrack.enabled; // Toggle video track
        }
    };

    const toggleMic = () => {
        if (localStream) {
            const audioTrack = localStream.getAudioTracks()[0];
            audioTrack.enabled = !audioTrack.enabled; // Toggle audio track
        }
    };

    return (
        <div>
            <h1>PeerJS Video Call</h1>
            <button className='mx-4 bg-red-700' >set meeting</button>
            <div className='flex my-4'>
                <video ref={localVideoRef} autoPlay muted style={{ width: '500px' }}></video>
                <video ref={remoteVideoRef} autoPlay style={{ width: '500px' }}></video>
            </div>
            <input
                type="text"
                value={peerId}
                onChange={(e) => setPeerId(e.target.value)}
                placeholder="Enter peer ID to call"
                className='ml-3 forced-colors:red'
            />
            <button onClick={callPeer} className='mx-2 bg-green-400 p-2'>Call</button>
            <button onClick={endCall} className='mx-2 bg-red-600 p-2'>End</button>
            <button onClick={toggleVideo} className='mx-2 bg-amber-600 p-2'>Video</button>
            <button onClick={toggleMic} className='mx-2 bg-amber-600 p-2'>Mic</button>
        </div>
    );
};

export default Schedule;
