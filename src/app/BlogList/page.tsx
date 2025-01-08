import Image from "next/image";
import Link from "next/link";
import { FaAngleRight} from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { MdPersonAddAlt } from "react-icons/md";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Search } from 'lucide-react';
import { LiaStarSolid } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



export default function BlogList() {
    return(
        <div className="w-full h-auto">
  
          {/* hero sec of shop page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Blog List</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/BlogDetails" className="text-yellow-600">Blog</Link>
            </div>
            </div>
           
        </div>


        {/* second sec parent div of left and right div */}
      <div className="w-full flex flex-col lg:flex-row gap-5 mt-7">
        
        {/* image div left */}
        <div className="w-1/2 h-1/2 mt-12 ml-12">
        <div>
            <Image  src={"/images/choseimg1.png"} alt="food" width={500} height={500} />
            <div className="flex gap-2 mt-2 text-gray-500">
                <IoCalendarNumberOutline className="text-yellow-600 mt-1"/>
                <p>Feb 14, 2022 /</p>
        
                < LuMessagesSquare className="text-yellow-600 mt-1" />
                <p>3 /</p>
        
                < MdPersonAddAlt className="text-yellow-600 mt-1" />
                <p>Admin</p>
            </div>

                 <h1 className="text-xl lg:text-2xl font-bold mt-3">10 Reasons To A Digital Detox Challenge</h1>
                  <p className="w-3/2 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur doloribus ipsam Iste ut ipsum maxime libero perferendis veritatis, voluptatum quos accusantium, similique totam dicta eveniet! Dolorum aspernatur ex asperiores.</p>
        
               <button className=" flex mt-7 rounded bg-white border border-yellow-600 text-yellow-600 hover:text-white hover:bg-yellow-600 px-6 py-4">
                  Read More
                <RiArrowRightUpLine className="mt-1" />
               </button>
              </div>

          {/* secnd left div */}
            <div className="mt-8">
            <Image  src={"/images/bloglist.jpeg"} alt="food" width={500} height={500} />
            <div className="flex gap-2 mt-2 text-gray-500">
                <IoCalendarNumberOutline className="text-yellow-600 mt-1"/>
                <p>Feb 14, 2022 /</p>
                < LuMessagesSquare className="text-yellow-600 mt-1" />
                <p>3 /</p>
                < MdPersonAddAlt className="text-yellow-600 mt-1" />
                <p>Admin</p>
            </div>

            <h1 className="text-xl lg:text-2xl font-bold mt-3">Tradition Soft Pretzels with Sweet Beer Cheese</h1>
            <p className="w-3/2 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur doloribus ipsam Iste ut ipsum maxime libero perferendis veritatis, voluptatum quos accusantium, similique totam dicta eveniet! Dolorum aspernatur ex asperiores.</p>
            
            <button className=" flex mt-7 rounded bg-white border border-yellow-600 text-yellow-600 hover:text-white hover:bg-yellow-600 px-6 py-4">
            Read More
            <RiArrowRightUpLine className="mt-1" />
            </button>
            </div>


               {/* 3rd left div */}
            <div className="mt-8">
            <Image  src={"/images/blogimg1.png"} alt="food" width={500} height={500} />
            <div className="flex gap-2 mt-2 text-gray-500">
                <IoCalendarNumberOutline className="text-yellow-600 mt-1"/>
                <p>Feb 14, 2022 /</p>
                < LuMessagesSquare className="text-yellow-600 mt-1" />
                <p>3 /</p>
                < MdPersonAddAlt className="text-yellow-600 mt-1" />
                <p>Admin</p>
            </div>

            <h1 className="text-xl lg:text-2xl font-bold mt-3">Tradition Soft Pretzels with Sweet Beer Cheese</h1>
            <p className="w-3/2 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur doloribus ipsam Iste ut ipsum maxime libero perferendis veritatis, voluptatum quos accusantium, similique totam dicta eveniet! Dolorum aspernatur ex asperiores.</p>
               <button className=" flex mt-7 rounded bg-white border border-yellow-600 text-yellow-600 hover:text-white hover:bg-yellow-600 px-6 py-4">
                 Read More
                 <RiArrowRightUpLine className="mt-1" />
                 </button>
            </div>

             {/* 4th left div */}
             <div className="mt-8">
            <Image  src={"/images/img3abot.png"} alt="food" width={500} height={500} />
            <div className="flex gap-2 mt-2 text-gray-500">
                <IoCalendarNumberOutline className="text-yellow-600 mt-1"/>
                <p>Feb 14, 2022 /</p>
                < LuMessagesSquare className="text-yellow-600 mt-1" />
                <p>3 /</p>
                < MdPersonAddAlt className="text-yellow-600 mt-1" />
                <p>Admin</p>
            </div>

            <h1 className="text-xl lg:text-2xl font-bold mt-3">Tradition Soft Pretzels with Sweet Beer Cheese</h1>
            <p className="w-3/2 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur doloribus ipsam Iste ut ipsum maxime libero perferendis veritatis, voluptatum quos accusantium, similique totam dicta eveniet! Dolorum aspernatur ex asperiores.</p>
            <Link href="/BlogDetails">
         <button className=" flex mt-7 rounded bg-white border border-yellow-600 text-yellow-600 hover:text-white hover:bg-yellow-600 px-6 py-4">
            Read More
            <RiArrowRightUpLine className="mt-1" />
            </button>
            </Link>
            </div>

            {/* 1 2 3 */}
            <div className="mt-16 mb-6 flex flex-col lg:flex-row gap-5 items-center justify-center">
   <div className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white w-8 h-8 pl-3">
        < FaAngleDoubleLeft className="mt-2 mr-1" />
    </div> 
    <div className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white w-8 h-8 pl-3">
        1
    </div>
    <div className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white w-8 h-8 pl-3">
        2
    </div>
    <div className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white w-8 h-8 pl-3">
        <Link href="/ShopDetails">3</Link>
        
    </div>
    <div className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white w-8 h-8 pl-3">
    < FaAngleDoubleRight className="mt-2 mr-1" />
    </div>
       
  </div>
</div>

        
        <div className="w-96 h-auto mt-12">
        
        <div className="flex  mt-6">
                 
                 <input className="text-gray-500 pl-3 py-2" type="text" placeholder="Search Your Keyword.." />
                 <div>
                 <Search className="mr-1 h-12 w-23 pr-2 bg-yellow-600 text-white" />
               </div>
            </div> 

            {/* 1st card */}
         <div className ="space-y-2 w-60 h-auto justify-center text-center items-center border border-gray-300 mt-4">
             <Image src={"/images/blogmiyok.png"} alt="miyok" width={100} height={100} className="rounded-full ml-16 pt-5" />
               <h2 className="text-2xl font-bold">Prince Miyok</h2>
               <h6 className="text-gray-500">Blogger/Photographer</h6>
               <div className ="flex justify-center text-center items-center">
                         <LiaStarSolid className="text-yellow-600 pt-1" />
                         <LiaStarSolid className="text-yellow-600 pt-1" />
                         <LiaStarSolid className="text-yellow-600 pt-1" />
                         <LiaStarSolid className="text-yellow-600 pt-1" />
                         <LiaStarSolid className="text-yellow-600 pt-1" />
                         <p className="text-gray-500">1 Review</p>
               </div>

               <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ad exercitat</p>
               <div className="flex pb-2 gap-2 pl-16">
                   <FaFacebookF />
                   <FaTwitter />
                   <FaInstagram />
                   <FaYoutube />       
               </div>
         </div>
{/* card 2 */}
         <div className ="space-y-2 w-84 h-auto justify-center items-center border border-gray-300 mt-4">
           <h3 className="text-xl font-bold pl-3">Recent Post</h3>
           <div className="flex ml-3 gap-2 mt-3">
         <Image src={"/images/bloglistbrgr.jpeg"} alt="img" width={80} height={80} />
         <div>
            <p>June 22, 2020</p>
            <p className="pt-2">Lorem isnprim dolor sit cling<br/>elit sed do.</p>
         </div>
           </div>

           <div className="flex ml-3 gap-2 mt-3">
         <Image src={"/images/shop2.png"} alt="img" width={80} height={80} />
         <div>
            <p>June 22, 2020</p>
            <p className="pt-2">Lorem isnprim dolor sit cling<br/>elit sed do.</p>
         </div>
           </div>

           <div className="flex ml-3 gap-2 mt-3">
         <Image src={"/images/choseimg5.png"} alt="img" width={80} height={80} />
         <div>
            <p>June 22, 2020</p>
            <p className="pt-2">Lorem isnprim dolor sit cling<br/>elit sed do.</p>
         </div>
           </div>

           <div className="flex ml-3 gap-2 mt-3">
         <Image src={"/images/menuimg6.png"} alt="img" width={80} height={80} />
         <div>
            <p>June 22, 2020</p>
            <p className="pt-2">Lorem isnprim dolor sit cling<br/>elit sed do.</p>
         </div>
           </div>
   </div>

 {/* card 3 */}
   <div className ="space-y-2 w-84 h-auto justify-center items-center border border-gray-300 mt-4">
       <h1 className="text-xl font-bold pl-3">Filter By Menu</h1>
       <div className="flex gap-2 ml-3 mt-3">
          <Image src={"/images/blogchick.jpeg"} alt="img" width={70} height={60} />
          <p className="font-bold pt-4">Chicken Fry</p>
          <p className="pl-20 pt-4">26</p>
       </div>

       <div className="flex gap-2 ml-3 mt-3">
          <Image src={"/images/menuimg2.png"} alt="img" width={70} height={60} />
          <p className="font-bold pt-4">Burger Food</p>
          <p className="pl-20 pt-4">34</p>
       </div>
    
       <div className="flex gap-2 ml-3 mt-3">
          <Image src={"/images/blogimg1.png"} alt="img" width={70} height={60} />
          <p className="font-bold pt-4">Pizza</p>
          <p className="pl-20 pt-4">42</p>
       </div>
    
       <div className="flex gap-2 ml-3 mt-3">
          <Image src={"/images/shop4.png"} alt="img" width={70} height={60} />
          <p className="font-bold pt-4">Cfresh fruit</p>
          <p className="pl-20 pt-4">35</p>
       </div>
    
       <div className="flex gap-2 ml-3 mt-3">
          <Image src={"/images/img3abot.png"} alt="img" width={70} height={60} />
          <p className="font-bold pt-4">Vegatable</p>
          <p className="pl-20 pt-4">26</p>
       </div>
    
    
    </div>

    {/* card 4 */}
 <div className="mt-4 ml-1">
   <Image src={"/images/Popular Tag.png"} alt="tags" width={300} height={200} />
 </div>

 {/* card 5 */}
 <div className="mt-4 ml-2 border border-gray-300">
   <Image src={"/images/Photo gallery.png"} alt="tags" width={250} height={200} />
 </div>

    {/* card 4 */}
    <div className="mt-4 ml-1">
    <Image src={"/images/Flollow us.png"} alt="tags" width={300} height={200} />
    </div>

   </div>
  </div>

  </div>
  );
};