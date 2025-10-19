import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Router components
import Peer from "peerjs";
import Home from "./meeting_home";

function join() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [peerId, setPeerId] = useState("");
  const [peer, setPeer] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [currentCall, setCurrentCall] = useState(null);
  const [buttonText, setButtonText] = useState(false);

  useEffect(() => {
    // Create a Peer object
    const newPeer = new Peer();
    setPeer(newPeer);

    // Display the peer ID
    newPeer.on("open", (id) => {
      console.log("My peer ID is: " + id);
      setPeerId(id);
    });

    // Get local media stream
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setLocalStream(stream);
        localVideoRef.current.srcObject = stream;

        // Listen for incoming calls
        newPeer.on("call", (call) => {
          call.answer(stream); // Answer the call with the local stream
          setCurrentCall(call);
          call.on("stream", (remoteStream) => {
            remoteVideoRef.current.srcObject = remoteStream; // Show the remote stream
          });
        });
      })
      .catch((err) => {
        console.error("Failed to get local stream", err);
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
      call.on("stream", (remoteStream) => {
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
      setButtonText(pre => !pre)
    }
  };

  const toggleMic = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled; // Toggle audio track
    }
  };

  const create_new_meet = () => {
    // Create a Peer object
    console.log("click");

    const newPeer = new Peer();
    setPeer(newPeer);

    //     // Display the peer ID
    newPeer.on("open", (id) => {
      console.log("My peer ID is: " + id);
      setPeerId(id);
    });
  };
  return (
    <>
      <div className="flex mt-8 h-7 mx-2.5">
        <input type="text" className=" border-2" />
        <button className="px-2 rounded-tr-xl rounded-br-xl bg-green-500 cursor-pointer" onClick={callPeer}>
          Join
        </button>
      </div>
        <p className="m-2">Your call id:{peerId}</p>
      <div>
        <div className="flex my-4">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            style={{ width: "500px" }}
          ></video>
          <video
            ref={remoteVideoRef}
            autoPlay
            style={{ width: "500px" }}
          ></video>
        </div>
        {/* <input
          type="text"
          // value={peerId}
          onChange={(e) => setPeerId(e.target.value)}
          placeholder="Enter peer ID to call"
          className="ml-3 border-1 p-1 "
        /> */}
        <div className="flex mt-2">
          {/* <button
            onClick={callPeer}
            className="mx-2 bg-green-400 p-2 rounded-2xl"
          >
            Call
          </button> */}
          <button onClick={endCall} className="mx-2 bg-red-600 p-2 rounded-2xl">
           End
          </button>
          <button onClick={toggleVideo}  className="mx-2 bg-amber-600 p-2 rounded-2xl">
           {buttonText?'Video off':'Video on'}
          </button>
          <button onClick={toggleMic} className="mx-2 bg-amber-600 p-2 rounded-2xl">
           {buttonText?'Mic off':'Mic on'}
          </button>
           <button onMouseDown={() => setButtonText('Clicked!')} onMouseUp={() => setButtonText('Buy')}>
      {buttonText}
    </button>
        </div>
      </div>
    </>
  );
}

export default join;
