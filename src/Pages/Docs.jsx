// Updated Docs Component with Next.js & HTML Configuration Sections Added

import React from "react";

function Docs() {
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    alert("Copied!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white p-8 rounded-2xl shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-2">Ad Service Integration Documentation</h1>
        <p className="text-lg opacity-90">Clean & Developer‑Friendly Guide</p>
      </div>

      {/* Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          This guide walks you through integrating your ad service into any Node.js backend, React, Next.js, or plain HTML frontend.
        </p>
      </section>

      {/* Card Wrapper */}
      <section className="space-y-8">

        {/* Prerequisites */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">1. Prerequisites</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Node.js installed</li>
            <li>npm package manager</li>
            <li>Basic understanding of JavaScript, React, Next.js & HTML</li>
          </ul>
        </div>

        {/* User Server Setup */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Setting Up User Server</h2>

          <div className="space-y-6">
            {/* Code Block */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Create Project Directory</h3>
              <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md">
                <pre className="language-js text-sm overflow-auto">mkdir user-server</pre>
                <button onClick={() => copyToClipboard("mkdir user-server")} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
              </div>
            </div>

            <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md">
              <pre className="language-js text-sm overflow-auto">cd user-server</pre>
              <button onClick={() => copyToClipboard("cd user-server")} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
            </div>

            {/* Install Dependencies */}
            <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md">
              <pre className="language-js text-sm overflow-auto">npm install express axios cors</pre>
              <button onClick={() => copyToClipboard("npm install express axios cors")} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
            </div>

            {/* Server File */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">userServer.js</h3>
              <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md">
                <pre className="language-js text-sm overflow-auto">{`import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/request-ad', async (req, res) => {
  try {
    const response = await axios.get('http://your-ad-service-url/api/get-video');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching video link');
  }
});

app.listen(PORT, () => console.log('Running on ' + PORT));`}</pre>
                <button onClick={() => copyToClipboard(`import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/request-ad', async (req, res) => {
  try {
    const response = await axios.get('http://your-ad-service-url/api/get-video');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching video link');
  }
});

app.listen(PORT, () => console.log('Running on ' + PORT));`)} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
              </div>
            </div>
          </div>
        </div>

        {/* React Frontend Setup */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. React Frontend Setup</h2>

          <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md mb-4">
            <pre className="language-js text-sm overflow-auto">npx create-react-app user-frontend</pre>
            <button onClick={() => copyToClipboard("npx create-react-app user-frontend")} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
          </div>

          <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md">
            <pre className="language-js text-sm overflow-auto">{`import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/request-ad')
      .then(res => setVideoLink(res.data.videoLink));
  }, []);

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Ad Display</h1>
      {videoLink ? (
        <video controls className='rounded-lg border shadow-md'>
          <source src={videoLink} type="video/mp4" />
        </video>
      ) : 'Loading...'}
    </div>
  );
}`}</pre>
            <button onClick={() => copyToClipboard(`import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/request-ad')
      .then(res => setVideoLink(res.data.videoLink));
  }, []);

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Ad Display</h1>
      {videoLink ? (
        <video controls className='rounded-lg border shadow-md'>
          <source src={videoLink} type="video/mp4" />
        </video>
      ) : 'Loading...'}
    </div>
  );
}`)} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
          </div>
        </div>

        {/* NEW — Next.js Integration */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Next.js Frontend Setup</h2>

          <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md mb-4">
            <pre className="language-js text-sm overflow-auto">npx create-next-app@latest next-user</pre>
            <button onClick={() => copyToClipboard("npx create-next-app@latest next-user")} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
          </div>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">app/page.jsx</h3>
          <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md">
            <pre className="language-js text-sm overflow-auto">{`"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/request-ad')
      .then(res => setVideoLink(res.data.videoLink));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ad Display - Next.js</h1>
      {videoLink ? (
        <video controls className="rounded-lg border shadow-md">
          <source src={videoLink} type="video/mp4" />
        </video>
      ) : 'Loading...'}
    </div>
  );
}`}</pre>
            <button onClick={() => copyToClipboard(`"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [videoLink, setVideoLink] = useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/api/request-ad')
      .then(res => setVideoLink(res.data.videoLink));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ad Display - Next.js</h1>
      {videoLink ? (
        <video controls className="rounded-lg border shadow-md">
          <source src={videoLink} type="video/mp4" />
        </video>
      ) : 'Loading...'}
    </div>
  );
}`)} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
          </div>
        </div>

        {/* NEW — HTML Integration */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Plain HTML / JavaScript Integration</h2>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">index.html</h3>
          <div className="relative bg-gray-900 text-white p-4 rounded-xl shadow-md">
            <pre className="language-html text-sm overflow-auto">{`<!DOCTYPE html>
<html>
<head>
  <title>Ad Display</title>
</head>
<body>
  <h2>Ad Display - HTML</h2>
  <video id="adVideo" controls></video>

  <script>
    fetch('http://localhost:4000/api/request-ad')
      .then(res => res.json())
      .then(data => {
        document.getElementById('adVideo').src = data.videoLink;
      });
  </script>
</body>
</html>`}</pre>
            <button onClick={() => copyToClipboard(`<!DOCTYPE html>
<html>
<head>
  <title>Ad Display</title>
</head>
<body>
  <h2>Ad Display - HTML</h2>
  <video id="adVideo" controls></video>

  <script>
    fetch('http://localhost:4000/api/request-ad')
      .then(res => res.json())
      .then(data => {
        document.getElementById('adVideo').src = data.videoLink;
      });
  </script>
</body>
</html>`)} className="absolute right-3 top-3 bg-blue-500 px-3 py-1 text-sm rounded">Copy</button>
          </div>
        </div>

        {/* URL Copy */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3">Ad Service URL</h2>
          <div className="relative">
            <input readOnly value="http://your-ad-service-url/api/get-video" className="w-full p-3 rounded-xl border text-gray-700 shadow-sm" />
            <button onClick={() => copyToClipboard("http://your-ad-service-url/api/get-video")} className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1 rounded-lg shadow-md">Copy</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Docs;
