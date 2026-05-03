import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { UploadCloud, Eye, TrendingUp } from 'lucide-react';

const sellerData = [
  { category: 'Video', count: 15 },
  { category: 'Banner', count: 45 },
  { category: 'Popup', count: 22 },
  { category: 'Sidebar', count: 32 },
];

const AdvetiserDashboard = () => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className='mt-15'></div>
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Ad-Seller Console</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Ads Uploaded", val: "114", icon: <UploadCloud />, color: "bg-blue-500" },
          { label: "Total Displays", val: "892.4k", icon: <Eye />, color: "bg-purple-500" },
          { label: "Revenue Share", val: "$1,240", icon: <TrendingUp />, color: "bg-emerald-500" }
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
              <Tooltip cursor={{fill: '#f8fafc'}}/>
              <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdvetiserDashboard;