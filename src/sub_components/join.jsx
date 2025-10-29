import React, { useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import Loding from "./loding"; // Loading component

import mic_on from "../assets/mic_on.svg";
import mic_off from "../assets/mic_off.svg";
import video_on from "../assets/video_on.svg";
import video_off from "../assets/video-off.svg";
import call_end from "../assets/call_end.svg";

function Join() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [peerId, setPeerId] = useState("");
  const [peer, setPeer] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [currentCall, setCurrentCall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonText, setButtonText] = useState("Video");
  const [micText, setMicText] = useState("Mic");

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

  const toggleMic = async () => {
    if (localStream) {
      const audioTrack = localStream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled; // Toggle audio track
      setMicText(audioTrack.enabled ? "Mic off" : "Mic on");
    }
  };

  return (
    <div className="h-screen w-screen">
      {loading ? (
        <Loding />
      ) : (
        <div className="flex gap-6" style={{ overflow: 'hidden', height: '100%' }}>
          <div
            className=" grid w-14 gap-10 h-full  bg-gray-300 "
            style={{ bottom: "0px" }}
          >
            <button onClick={toggleVideo} className=" rounded-2xl px-2">
              <img
                className="h-7 ml-2.5"
                src={buttonText === "Video on" ? video_off : video_on}
              />
              <span className="ml-1.5 text-sm">Video</span>
            </button>

            <button onClick={toggleMic} className=" rounded-2xl px-2 ">
              <img
                className="h-7 ml-1.5"
                src={micText === "Mic on" ? mic_off : mic_on}
              />
              <span className="text-sm">Mic</span>
            </button>
            <button onClick={endCall} className=" bg-red-300 p-2 h-15 rounded-2xl ">
              <img src={call_end} className=" ml-2 h-6 " />
            </button>
          </div>

          {/* video section */}
          <div>
          <p className="mt-8">Enter Meeting ID</p>
          <div className="flex h-7 mb-2.5">
            <input
              type="text"
              onChange={(e) => setPeerId(e.target.value)}
              // placeholder="Enter peer ID to call"
              className="border-2 p-2 "
            />
            <button
              className="px-2 bg-green-500 cursor-pointer ml-2"
              onClick={callPeer}
            >
              Join
            </button>
          </div>
          <p className="mr-2">Your call ID: {peerId}</p>
          <div className="grid-cols-3 my-4 gap-10">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              className=" h-[50%] w-[97%] mr-5"
            />
            <video
              ref={remoteVideoRef}
              autoPlay
              style={{ width: "500px" }}
              className="mt-2 md:m-0"
            />
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Join;
