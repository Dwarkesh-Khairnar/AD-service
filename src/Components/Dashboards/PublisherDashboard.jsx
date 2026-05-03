import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { MousePointer2, Activity, User } from 'lucide-react';

const data = [
  { name: 'Mon', clicks: 40, runs: 24 },
  { name: 'Tue', clicks: 30, runs: 13 },
  { name: 'Wed', clicks: 20, runs: 98 },
  { name: 'Thu', clicks: 27, runs: 39 },
  { name: 'Fri', clicks: 18, runs: 48 },
];

const PublisherDashboard = ({ userName = "Dwarkesh" }) => {
  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
        <div className='mt-15'></div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 flex items-center gap-2">
          <User className="text-blue-600" /> Welcome, {userName}
        </h1>
        <div className="text-sm font-medium text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm border">User Account</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4 text-slate-600">
            <Activity size={20} /> <h3 className="font-bold">Ads Running Status</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRuns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="runs" stroke="#10b981" fillOpacity={1} fill="url(#colorRuns)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4 text-slate-600">
            <MousePointer2 size={20} /> <h3 className="font-bold">Click Analytics</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="clicks" stroke="#3b82f6" strokeWidth={3} dot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherDashboard;