"use client";

import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
import { Search } from 'lucide-react';
import { BsHandbag} from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Header(){
   const pathname = usePathname()

    return(
    <div className="w-full bg-black text-white h-32">
        <div className="flex justify-center items-center pt-5 font-bold text-2xl">
        
            <h1 className="text-yellow-600">Food</h1>
            <h1 className="">tuck</h1>
            </div>
           
         <div className="flex flex-col lg:flex-row lg:justify-start lg:pl-20 mt-2 lg:items-center lg:gap-11">
           
            <Link className="hover:text-yellow-600" href="/">Home</Link>
            <Link className="hover:text-yellow-600" href="/OurMenu">Menu</Link>
            <Link className="hover:text-yellow-600" href="/BlogList">Blog</Link>
            <Link className="hover:text-yellow-600" href="/Pages">Pages</Link>
            <Link className="hover:text-yellow-600 flex" href="/AboutUs">About 
             < IoIosArrowDown className="text-white mt-2" /> </Link> 
           <Link className="hover:text-yellow-600" href="/OurShop">Shop</Link>
            <Link className="hover:text-yellow-600" href="">Contact</Link>

             <div className="flex border border-yellow-600 rounded-full ml-48">
                 
                 <input className="bg-black text-white pl-3" type="text" placeholder="Search..." />
                 <div>
                 <Search className="mr-1 pr-2" />
               </div>
               </div>

               {/* condional rendering */}
               <Link className="hover:text-yellow-600" href="Signup">
               {pathname !== '/' && (
                      <div className="w-5 h-3">
                        <GoPerson />
                      </div>
                      
               )}
               </Link>
              

            <span>
            <Link className="hover:text-yellow-600" href="/ShoppingCart"> 
            < BsHandbag  />
            </Link> 
            </span> 
  
            </div>
                 
    </div>
    );
};