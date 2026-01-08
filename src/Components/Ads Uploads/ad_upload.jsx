import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function ad_upload() {
  const [file, setFile] = useState(null);
  const [orgname, setOrgname] = useState(null);
  const [targeatlink, setTargeatlink] = useState(null);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [uploading, setUploading] = useState(false);

  const addLog = (msg, level = "info") =>
    setLogs((l) => [
      ...l,
      { msg, level, time: new Date().toLocaleTimeString() },
    ]);

  const uploade = async (params) => {
    params.preventDefault();
    console.log(file);
    console.log(orgname);
    if (!file) {
      console.log("Please choose a file.");
      // setStatus("Please choose a file.");
      addLog("Please choose a file.", "error");
      return;
    }

    setProgress(0);
    setUploading(true);
    addLog(`Starting upload: ${file.name}`);

    try {
      // new Promise((resolve, reject) => {
      const formdata = new FormData();
      formdata.append("vedio", file);

      const xhr = new XMLHttpRequest();

      xhr.open("POST", "http://localhost:3000/uvideo/upload-video", true);

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log(resolve(xhr.response));
          addLog(`Upload succeeded: ${xhr.responseText}`, "success");
        } else {
          console.log(reject(new Error("Upload failed: " + xhr.statusText)));
          addLog(`Upload failed: ${xhr.status} ${xhr.statusText}`)
        }
      };
      // console.log(xhr);

      // Progress
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          setProgress(percent);
          addLog(`Upload progress: ${percent}%`);
        }
      };

      xhr.onerror = () => {
        console.log(error);
        setUploading(false);
        addLog("Network error during upload", "error");
      };

      xhr.send(formdata);
      // });
    } catch (error) {
      console.log(error);
      setUploading(false);
      addLog(`Send error: ${error.message}`, "error");
    }
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Live your Ad
        </h2>
        <form className="space-y-4" onSubmit={uploade}>
          {/* File Upload Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Video file <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              accept="video/*"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="upload your video file"
            />
          </div>

          {/* Targeat link Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Targeat Link <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="target_link"
              onChange={(e) => setTargeatlink(e.target.value)}
              accept="video/*"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter targeat link"
            />
          </div>

          {/* Ads type Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Ad type: <span className="text-red-600">*</span>
            </label>
            <select
              name="Adtypes"
              id="adtypes"
              onChange={(e) => setOrgname(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your company name"
              required
            >
              <option value=""></option>
              <option value="Video">Video</option>
              <option value="Image">Image</option>
              <option value="Banner">Banner</option>
            </select>
          </div>

          {/* Key Word field */}
          <label
            htmlFor="Key_words"
            className="block text-sm font-medium text-gray-700 m-0"
          >
            Key words <span className="text-red-600">*</span>
          </label>
          <textarea
            type="textarea"
            name="Key_words"
            id="Key_words"
            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            maxLength="250"
            minLength={"50"}
            placeholder="Describe video useing key words, up to 225 characters"
            required
          ></textarea>

          {/* plan details  */}
          <p className="block text-sm font-medium text-gray-600 ">
            Review plan details:{" "}
            <Link
              to={"invoise"}
              className=" text-blue-500 hover:text-red-600 hover:underline"
            >
              Click
            </Link>
          </p>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-amber-500 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Upload
            </button>
          </div>
        </form>

        {/* Progress bar and logs */}

        {/* Style Needed, convert this on bottum bar*/}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-4 bg-green-500 transition-all"
            ></div>
          </div>
          <div className="mt-2 text-sm text-gray-700">
            {logs.map((l, i) => (
              <div
                key={i}
                style={{
                  color:
                    l.level === "error"
                      ? "red"
                      : l.level === "success"
                      ? "green"
                      : "black",
                }}
              >
                [{l.time}] {l.msg}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-center text-gray-600 mt-1">
          If you need a help:{" "}
          <Link to="/contact" className="text-green-600 hover:underline">
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ad_upload;
