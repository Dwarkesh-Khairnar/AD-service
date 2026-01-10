import React, { useEffect, useState } from 'react'

function Footer() {
  const [year, setYear] = useState()
 
useEffect(() => {
setYear(new Date().getFullYear())
}, [])

  return (
  <footer className="bg-[#071025] text-[#e9f6ff] pt-14 pb-8 px-10">
    <div className="md:flex gap-20 max-w-[1100px] m-auto md:flex-row flex-col md:m-0 mt-5">
        <div className="flex-1 min-w-[320px]">
            <h4 className='my-2 text-white font-extrabold'>About [Ad service]</h4>
            <p>ad service: scalable ad tech for publishers & advertisers. © <span>{year}</span> ad service</p>
            <p className="contact">Email: <a className='text-[#7ad1ff]' href="mailto:support@ad service.com">support@ad service.com</a> · <br /> Tel: <a className='text-[#7ad1ff]'
                    href="tel:+1234567890">+1 (234) 567-890</a></p><br />
            <p className="address">J.T.Mahajan Collage Of Engg,Faizpur</p>
        </div>

      <div className="md:flex gap-20 max-w-[1100px] m-auto md:flex-row flex-col md:m-0 mt-5">
        <div className="flex-1 min-w-[220px] products">
            <h4 className='my-2 text-white font-extrabold'>Products & Tools</h4>
            <ul>
                <li className='ml-3 mt-2'><a className='text-[#7ad1ff]' href="/platform">Ad Platform</a></li>
                <li className='ml-3 mt-2'><a className='text-[#7ad1ff]' href="/ssp">SSP</a></li>
                <li className='ml-3 mt-2'><a className='text-[#7ad1ff]' href="/demand">Demand Partners</a></li>
                <li className='ml-3 mt-2'><a className='text-[#7ad1ff]' href="/analytics">Analytics</a></li>
            </ul>
        </div>

        <div className="flex-1 min-w-[220px] support md:m-0 mt-5">
            <h4 className='my-2 text-white font-extrabold'>Legal & Resources</h4>
            <ul className=''>
                <li className='ml-3 mt-2'><a className='text-[#7ad1ff]' href="/privacy">Privacy Policy</a></li>
                <li className='ml-3 mt-2'><a className='text-[#7ad1ff]' href="/gdpr">GDPR & CCPA</a></li>
                <li className='ml-3 mt-2'><a className='text-[#7ad1ff]' href="/terms">Terms of Service</a></li>
                <li className='ml-3 mt-2'><a className='text-[#7ad1ff]' href="/docs">Developer Docs</a></li>
            </ul>
            <div className="ml-3 mt-2">
                <a className='text-[#7ad1ff]' href="https://linkedin.com/company/ad service" aria-label="LinkedIn" target="_blank"
                    rel="noopener">LinkedIn</a> |
                <a className='text-[#7ad1ff]' href="https://twitter.com/ad service" aria-label="Twitter" target="_blank" rel="noopener">Twitter</a>
            </div>
        </div>
      </div>
    </div>
    <div className=" border-t-2 border-[#ffffff0f] mt-12 pt-15">
        <div className="flex gap-10 max-w-[1100px] m-auto justify-between align-middle">
            <div className="font-bold text-[#bfe9ff]">Accepting: Visa, Mastercard, AMEX</div>
            <div className=" flex md:flex-row flex-col gap-1.5"><a href="/publisher-apply" className="bg-amber-500 text-[#012033] md:py-2 md:px-3 px-2 py-1 rounded-xl md:font-bold md:ml-2">Apply as Publisher</a> · <a 
                    href="/advertiser-apply" className="bg-amber-500 text-[#012033] md:py-2 md:px-3 px-2 py-1 rounded-xl md:font-bold md:ml-2 ">Advertiser Signup</a></div>
        </div>
    </div>
</footer>

  )
}

export default Footer