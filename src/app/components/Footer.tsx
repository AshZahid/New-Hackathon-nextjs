import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillPinterest } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
    return (
    
    <footer className="bg-black text-white py-10">
         
         {/* Support Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-32 pt-10 pb-6">
            <div>
    
            <div className="flex">
          <h3 className="text-yellow-400 text-3xl font-semibold">
            St
          </h3>
          <h3 className="text-3xl font-semibold">ill You need our Support?</h3>
          </div>
          <div>
          <p className="mt-2 text-sm">
            Don&apos;t wait; make a smart & logical quote here. It&apos;s pretty easy.
          </p>
          </div>
          </div>
          


          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-12 py-2 text-gray-200 bg-yellow-600 rounded-l-md focus:outline-none"
            />
            <button className="bg-white text-yellow-600 px-6 py-2 rounded-r-md hover:bg-yellow-500">
              Subscribe Now
            </button>
          </div>
        </div>
  
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 px-4 md:px-20">
          {/* About Us */}
          <div>
          <h4 className="text-2xl font-semibold">About Us</h4>
          <p className="text-white text-sm mt-4 space-y-4">
            Promote clients and leisure travelers has been enjoying discounted
            fares for corporate and affordable hotels.
          </p>

          <div className="flex gap-3 mt-4">
            <div>
               <Image src={"/images/footWatch.png"} alt="watch" width={100} height={100} className="mt-2" />
            </div>
            
          <p className="mt-4">
            <strong>Opening Hours:</strong> <br />
            Mon - Sat: 9:00 - 6:00 <br />
            Sunday: Closed
          </p>
        </div>
      </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-xl font-semibold text-white">Useful Links</h4>
          <ul className="mt-4 text-white text-sm space-y-2">
          <Link href="/AboutUs">
            <li>About</li>
            </Link>
            <Link href="/BlogDetails">
            <li>News</li>
            </Link>
            <li>Partners</li>
            <li>Team</li>
            <Link href="/OurMenu">
            <li>Menu</li>
            </Link>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-xl font-semibold text-white">Help?</h4>
          <ul className="mt-4 text-white text-sm space-y-2">
        <Link href="/FAQ">
          <li>FAQ</li>
          </Link>
            <li>Terms & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h4 className="text-xl font-semibold text-white">Recent Post</h4>
          <ul className="mt-4 text-white text-sm space-y-2">
            <div className="flex gap-2">
                <Image src={"/images/choseimg2.png"} alt="img" width={40} height={40} />
            <li>
                <p className="text-gray-500">20 Feb 2022</p> 
                <p> Keep Your Business</p>
             </li>

            </div>
            <div className="flex gap-2">
            <Image src={"/images/foot2.png"} alt="img" width={40} height={40} />
            <li>
                <p className="text-gray-500">10 Feb 2022 </p>
               <p> Keep Your Business</p>
                </li>
            </div>

            <div className="flex gap-2">
            <Image src={"/images/foot3.png"} alt="img" width={40} height={40} />
            <li>
                <p>30 Dec 2022 </p>
               <p className="text-gray-500"> Keep Your Business</p>
               </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col sm:flex-col lg:flex-row w-full bg-gray-700 justify-around items-center py-5">
      <div className="pl-24  pt-4 text-center text-white text-sm">
        <p>Copyright © 2022 by Ayream. All Rights Reserved.</p>
        </div>
    
           {/* footer icon */}
        <div className="flex gap-2 text-gray-500 mt-5">
                <div className="bg-white p-2"><FaFacebookF /> </div>
               <div className="bg-white p-2"> < FaTwitter /> </div>
                <div className="bg-white p-2">< FaInstagram /></div>
                <div className="bg-white p-2"><FaYoutube className="text-yellow-600" /></div>
                 <div className="bg-white p-2"><AiFillPinterest /></div>
              </div>
         </div>
      <div>
        
   </div>
 </footer>
  );
};  