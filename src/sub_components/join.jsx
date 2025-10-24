import React, { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import Loding from "./loding"; // Loading component

import mic_on from "../assets/mic_on.svg";
import mic_off from "../assets/mic_off.svg";
import video_on from "../assets/video_on.svg";
import video_off from "../assets/video-off.svg";

function Join() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [peerId, setPeerId] = useState("");
  const [peer, setPeer] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [currentCall, setCurrentCall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonText, setButtonText] = useState("Video off");
  const [micText, setMicText] = useState("Mic off");

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
      setLoading(false);

      // Create a Peer object
      const newPeer = new Peer();
      setPeer(newPeer);

      newPeer.on("open", (id) => {
        console.log("My peer ID is: " + id);
        setPeerId(id);
      });

      // Get local media stream
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);
        // Check if localVideoRef is ready before setting srcObject
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        newPeer.on("call", (call) => {
          call.answer(stream); // Answer the call with local stream
          setCurrentCall(call);
          call.on("stream", (remoteStream) => {
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream; // Show the remote stream
            }
          });
        });
      } catch (err) {
        console.error("Failed to get local stream", err);
        alert(
          "Could not access the camera/microphone. Please check permissions."
        );
      }
    };

    loadData();
  }, []);

  const callPeer = () => {
    if (peer && localStream) {
      const call = peer.call(peerId, localStream);
      setCurrentCall(call);
      call.on("stream", (remoteStream) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = remoteStream; // Show the remote stream
        }
      });
    }
  };

  const endCall = () => {
    if (currentCall) {
      currentCall.close();
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = null; // Clear the remote video
      }
      setCurrentCall(null);
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      const videoTrack = localStream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled; // Toggle video track
      setButtonText(videoTrack.enabled ? "Video off" : "Video on");
    }
  };

  const toggleMic = () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled; // Toggle audio track
      setMicText(audioTrack.enabled ? "Mic off" : "Mic on");
    }
  };

  return (
    <div className="bg-amber-100 h-screen">
      {loading ? (
        <Loding />
      ) : (
        <div className="grid align-middle justify-center pb-3">
          <p className="mt-8">Enter Meeting ID</p>
          <div className="flex h-7 mb-2.5">
            <input
              type="text"
              onChange={(e) => setPeerId(e.target.value)}
              placeholder="Enter peer ID to call"
              className="border-2"
            />
            <button
              className="px-2 rounded-tr-xl rounded-xl bg-green-500 cursor-pointer ml-2"
              onClick={callPeer}
            >
              Join
            </button>
          </div>
          <p className="mr-2">Your call ID: {peerId}</p>
          <div className="grid-cols-1 my-4 gap-10 md:flex">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              style={{ width: "500px" }}
            />
            <video
              ref={remoteVideoRef}
              autoPlay
              style={{ width: "500px" }}
              className="mt-2 md:m-0"
            />
          </div>
          <div className="flex mt-2 h-10">
            <button
              onClick={endCall}
              className="mx-2 bg-red-600 p-2 rounded-2xl"
            >
              End
            </button>

            <button
              onClick={toggleVideo}
              className="mx-2 rounded-2xl h-6 px-2" 
            >
              <img
                className="h-4" 
                src={buttonText === "Video on" ? video_on : video_off}
              />
              <span className="text-sm">{buttonText}</span> 

            </button>

            <button
              onClick={toggleMic}
              className="mx-2 rounded-2xl h-6 px-2"
            >
              <img
                className="h-4" 
                src={micText === "Mic on" ? mic_on : mic_off}
              />
              <span className="text-sm">{micText}</span> 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Join;
