import React, { useEffect, useState, useRef } from 'react';
import { Database, Edit3, Trash2, Search, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import Loding from "../loding.jsx";
import Cookie from "js-cookie";

const AdminDashboard = () => {
  const [ads, setAds] = useState([]);
  const hasFetchedData = useRef(false);
  const [loding, setloding] = useState(false)
  const [check, setCheck] = useState(true)

  useEffect(() => {
    const getUserData = async () => {
      checkUser();                                                  // User check function is admin or not
      if (check) {

        if (hasFetchedData.current) return; // Prevent multiple calls

        hasFetchedData.current = true; // Set the flag
        try {
          const response = await axios.get("/api/dashboard/adminDash") // fetch data form db
          // const result = await response.json();
          setAds(response.data.data);
          setloding(true)
          console.log(response);

        } catch (error) {
          console.log('error', error)
        }
        finally {
          setloding(false)
        }
      }
    }
    getUserData();
  }, [check])

  // Check who id the loger
  const checkUser = async () => {
    const name = await Cookie.get("role")
    console.log(!name === "Admin");

    if (name === "Admin") {
      setCheck(false)
      console.log("check");
    }
    else {
      setCheck(true)
    }
  }

 const handleDelete = (adId) => {
    // Prompt user for confirmation before deletion (optional)
    const confirmation = window.confirm("Are you sure you want to delete this ad?");
    if (confirmation) {
      // Optionally, make an API call to delete the ad from the database
      // Fetch API call example (uncomment to use):
      // fetch(`/api/ads/${adId}`, { method: 'DELETE' })
      axios.get(`/api/dashboard/ads/${adId}`)
        .then((response) => {
          if (response.ok) {
            // Update local state
            setAds(ads.filter(ad => ad.id !== adId));
          } else {
            // Handle error
            console.error("Failed to delete the ad.");
          }
        });

      // For local deletion:
      // setAds(ads.filter(ad => ad.id !== adId));
    }
  };


  return (
    <div className="p-8 bg-gray-900 min-h-screen text-slate-100">
      {loding && <Loding />}
      <div className='mt-15'></div>
      {check ? <div classname>You don't have permission to access the admin dashboard.</div>        // If you not admin to see this Meg
        : <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-red-500" /> Admin Master Control
              </h2>
              <p className="text-slate-400 text-sm">Manage entire database and ad distribution</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
              <input className="bg-gray-800 border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search Ads/Users..." />
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700 bg-gray-800/50 flex items-center gap-2">
              <Database size={18} className="text-blue-400" />
              <span className="font-semibold">Live Database (Ads Table)</span>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900/50 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium">Ad ID</th>
                  <th className="p-4 font-medium">Client</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Budget</th>
                  <th className="p-4 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {ads.map(ad => (
                  <tr key={ad.id} className="hover:bg-gray-700/30 transition-colors">
                    <td className="p-4 font-mono text-blue-400">{ad.id}</td>
                    <td className="p-4 font-medium">{ad.company_name}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-bold ${ad.isactive ? 'bg-emerald-900/50 text-emerald-400' : 'bg-slate-700 text-slate-300'}`}>
                        {ad.isactive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="p-4">{ad.budget}</td>
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button className="p-2 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-colors" title="Edit DB">
                          <Edit3 size={16} />
                        </button>
                        <button className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-colors" title="Delete"  onClick={() => handleDelete(ad.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }</div>
  );
};

export default AdminDashboard;