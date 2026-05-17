import React, { useEffect, useRef, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { UploadCloud, Eye, TrendingUp } from 'lucide-react';
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";



const AdvetiserDashboard = () => {
  
  const sellerData = [
    { category: 'Video', count: 15 },
    { category: 'Banner', count: 45 },
    { category: 'Popup', count: 22 },
    { category: 'Sidebar', count: 32 },
  ];
  
  const runTest = useRef(false)
  const [uplodesads, setUplodesads] = useState(0)

  useEffect(() => {
    if (runTest.current) return;
    runTest.current = true;

    const getAdvertiserData = async () => {
      const id = Cookie.get("id");
      try {
        const result = await axios.get("/api/dashboard/advertiserDash", { params: { id } });
        console.log(result.data.data);

        setUplodesads(result.data.data.length)

        if (!result.data || result.data.length === 0) setResponseMessage("Server not respond");
      } catch (error) {
        console.error("Error fetching ads datas:", error.response ?? error);
      }
    };

    getAdvertiserData();
  }, []);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className='mt-15'></div>
      <div className='flex items-center justify-between'>
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Advertiser Console</h2>
        <span className='flex gap-1.5'>
          <Link to="/adupload"><div className="text-sm font-medium text-white bg-amber-500 px-4 py-2 rounded-full shadow-sm border hover:bg-amber-600" >+ NEW</div></Link>
          <div className="text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm border">Account</div>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Ads Uploaded", val: `${uplodesads}`, icon: <UploadCloud />, color: "bg-blue-500" },
          { label: "Total Displays", val: `0`, icon: <Eye />, color: "bg-purple-500" },
          { label: "Revenue Share", val: "₹0", icon: <TrendingUp />, color: "bg-emerald-500" }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border flex items-center gap-4">
            <div className={`${stat.color} p-3 rounded-lg text-white`}>{stat.icon}</div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-800">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="font-bold mb-6 text-slate-700">Inventory Distribution</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sellerData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip cursor={{ fill: '#f8fafc' }} />
              <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdvetiserDashboard;