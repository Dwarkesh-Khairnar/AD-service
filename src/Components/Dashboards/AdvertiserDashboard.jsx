import React, { useEffect, useRef, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { UploadCloud, Eye, TrendingUp, MousePointerClick, HandCoins, Edit3, Trash2, ExternalLinkIcon } from 'lucide-react';
import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";



const AdvetiserDashboard = () => {

  const runTest = useRef(false)
  const [uplodesads, setUplodesads] = useState(0)
  const [displays, setDisplays] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [cost, setCost] = useState(0)
  const [videos, setVideos] = useState(0)
  const [images, setImages] = useState(0)
  const [banners, setBanners] = useState(0)
  const [AdData, setAdData] = useState([])

  let calculatioins = 0
  let clicksCalculatioins = 0
  let costCalculatioins = 0
  let videosCount = 0
  let imagesCount = 0
  let bannersCount = 0


  useEffect(() => {
    if (runTest.current) return;
    runTest.current = true;

    const getAdvertiserData = async () => {
      const id = Cookie.get("id");
      try {
        const result = await axios.get("/api/dashboard/advertiserDash", { params: { id } });
        console.log(result.data.data);

        setUplodesads(result.data.data.length)

        setAdData(result.data.data)
        await result.data.data.map(i => {
          setDisplays(calculatioins += i.apparencies)
          setClicks(clicksCalculatioins += i.clicks)
          setCost(costCalculatioins)

          if (i.ad_type === "Video") {
            setVideos(videosCount += 1)
          } else if (i.ad_type === "image") {
            setImages(imagesCount += 1)
          } else {
            setBanners(bannersCount += 1)
          }
        });

        if (!result.data || result.data.length === 0) setResponseMessage("Server not respond");
      } catch (error) {
        console.error("Error fetching ads datas:", error.response ?? error);
      }
    };

    getAdvertiserData();
  }, []);

  const sellerData = [
    { category: 'Video', count: `${videos}` },
    { category: 'Banner', count: `${banners}` },
    { category: 'images', count: `${images}` },
    //   { category: 'Popup', count: 22 },
    // { category: 'Sidebar', count: 32 },
  ];

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
          { label: "Total Displays", val: `${displays}`, icon: <Eye />, color: "bg-indigo-500" },
          { label: "Total Clciks", val: `${clicks}`, icon: <MousePointerClick />, color: "bg-purple-500" },
          { label: "Total Cost", val: `₹${cost}`, icon: <HandCoins />, color: "bg-emerald-500" }
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
        <h3 className="font-bold mb-6 text-slate-700">Ads Distribution</h3>
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

      <div className="bg-white p-6 rounded-xl mt-10 shadow-sm border">

      <h3 className='font-bold text-slate-700 mb-3'>Ads Overview</h3>
      <div className="overflow-x-auto -mx-6 px-6 ">
        <table className="w-full min-w-[900px] text-left border-collapse bg-white rounded-lg overflow-x-auto shadow-sm">
          <thead>
            <tr className="bg-white border-b">
              <th className="p-4 text-xs text-slate-500 font-semibold uppercase w-16">Ad ID</th>
              <th className="p-4 text-xs text-slate-500 font-semibold uppercase w-24">Type</th>
              <th className="p-4 text-xs text-slate-500 font-semibold uppercase w-28">Client</th>
              <th className="p-4 text-xs text-slate-500 font-semibold uppercase w-40">Destination URL</th>
              <th className="p-4 text-xs text-slate-500 font-semibold uppercase w-24">Status</th>
              <th className="p-4 text-xs text-slate-500 font-semibold uppercase w-24">Apparencies</th>
              <th className="p-4 text-xs text-slate-500 font-semibold uppercase w-20">Clicks</th>
              <th className="p-4 text-xs text-slate-500 font-semibold uppercase text-center w-24">Actions</th>
            </tr>
          </thead>

          <tbody>
            {AdData.map(ad => (
              <tr key={ad.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-mono text-sky-600">{ad.id}</td>
                <td className="p-4 font-medium text-slate-700">{ad.ad_type}</td>
                <td className="p-4 text-slate-600 sm:table-cell">{ad.client || '—'}</td>
                <td className="p-4 text-slate-600">
                  {/* On mobile show only an external/redirect icon; on larger screens show full URL */}
                  <a
                    href={ad.target_link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <span className="hidden sm:inline text-ellipsis overflow-hidden max-w-[220px]">{ad.target_link || '—'}</span>
                    <ExternalLinkIcon className="w-4 h-4 text-slate-500" />
                    <span className="sr-only">Open destination</span>
                  </a>
                </td>

                <td className="p-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold ${ad.isactive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                      }`}
                  >
                    {ad.isactive ? 'Active' : 'Inactive'}
                  </span>
                </td>

                <td className="p-4 text-slate-700">{ad.apparencies ?? '0'}</td>
                <td className="p-4 text-slate-700">{ad.clicks ?? '0'}</td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button
                      className="p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-colors"
                      title="Edit"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      className="p-2 rounded-md text-red-600 hover:bg-red-50 transition-colors"
                      title="Delete"
                      onClick={() => handleDelete(ad.id)}
                    >
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
    </div>
  );
};

export default AdvetiserDashboard;