import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { IoCalendarNumberOutline } from "react-icons/io5"
import { LuMessagesSquare } from "react-icons/lu";
import { MdPersonAddAlt } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuReplyAll } from "react-icons/lu";
import { LiaStarSolid } from "react-icons/lia";
import { Search } from 'lucide-react';


export default function BlogDetails() {
    return(
        <div className="w-full h-auto">
  
          {/* hero sec of blogdetail page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Blog Details</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/Blog" className="text-yellow-600">Blog Details</Link>
            </div>
            </div>
           
        </div>


              {/* parent div */}
         <div className="flex flex-col lg:flex-row gap-5 gap-y-7 lg:gap-y-0 w-full">
        {/* left sec */}
        <div className="w-1/2 h-auto ml-8 mt-24">
        
           <div>
                       <Image className="pl-7" src={"/images/choseimg2.png"} alt="food" width={500} height={300} />
                       <div className="flex gap-2 mt-2 text-gray-500">
                           <IoCalendarNumberOutline className="text-yellow-600 mt-1"/>
                           <p>Feb 14, 2022 /</p>
                           < LuMessagesSquare className="text-yellow-600 mt-1" />
                           <p>3 /</p>
                           < MdPersonAddAlt className="text-yellow-600 mt-1" />
                           <p>Admin</p>
                       </div>
           
                       <h1 className="text-xl lg:text-2xl font-bold mt-3">10 Reasons To A Digital Detox Challenge</h1>
                       <p className="w-3/2 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur doloribus ipsam Iste ut ipsum maxime libero perferendis veritatis, voluptatum quos accusantium, similique totam dicta eveniet Dolorum aspernatur ex asperiores.</p>
                   
                       <p className="pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa a mollitia molestias maiores. Voluptates quam blanditiis voluptate temporibus animi id assumenda hic sed perferendi dolor sit amet consectetur adipisicing elit. </p>
                </div>
            
            <div className="bg-yellow-600 mt-9">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, repellat animi voluptates praesentium illum deleniti, consequatur doloribus dignissimos temporibus numquam eum quisquam, voluptate esse? Aut fugit quisquam porro consectetur delectus!</p>
            </div>
        
        
         {/* 2nd left div */}
            <div className="mt-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cum officiis soluta nihil tempore quos nobis? Numquam molestiae qui, incidunt ad veritatis aut? Aliquam ducimus voluptate non hic recusandae expedita.
             </p>
             <div className="flex flex-col lg:flex-row mt-5 gap-3">
               <p className="w-72">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo autem voluptatem similique, quidem consequuntur, architecto nisi minima non consequatur perspiciatis iure officiis temporibus alias magnam distinctio modi at neque</p>
               <Image src={"/images/bloglist.jpeg"} alt="img" width={350} height={300} />
            
             </div>
             <p className="w-72 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati ipsum sapiente voluptate, earum, fuga libero repellendus, quidem officiis in laboriosam debitis itaque sed. Vero harum ullam quasi neque quaerat.</p>
            </div>
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error porro officiis exercitationem veritatis aliquam? Possimus doloribus dolore suscipit illo nemo, facilis ad alias vitae delectus, mollitia ipsa impedit! Voluptatibus, praesentium?</p>
            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error porro officiis exercitationem veritatis aliquam? Possimus doloribus dolore suscipit illo nemo, facilis ad alias vitae delectus, mollitia ipsa impedit! Voluptatibus, praesentium?</p>

            <div className="flex flex-col lg:flex-row gap-20 w-full mt-6 border border-gray-300">
                 <div className="flex text-gray-400 gap-2 border">
                    <p className="font-bold text-black">Tags:</p>
                    <p>Resturant, Dinner, Pizza, Yummy</p>
                </div>
                <div className="flex gap-3 font-bold">
                   <p>Share:</p>
                   <FaFacebookF className="mt-1"/>
                   <FaTwitter className="mt-1" />
                   <FaInstagram className="mt-1" />
                   <FaYoutube className="mt-1" />
                </div>
                 
            </div>      
        
             {/* comnt section  */}
             <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Comments - 03</h2>

      {/* Comment 1 */}
      <div className="flex space-x-4 mb-8">
        {/* User Image */}
        <img
          src="/images/commentimg1.jpeg"
          alt="MD Sojib Khan"
          className="w-12 h-12 rounded-full object-cover"
        />
        
        {/* Content */}
        <div>
          <div>
          <h3 className="flex gap-2 font-semibold">MD Sojib Khan</h3>
          <LuReplyAll className="mt-1"/>
          <button className="text-sm mt-1">Reply</button> 
          </div>
          <span className="flex gap-2 text-sm text-gray-500">
          <IoCalendarNumberOutline className="text-yellow-600" />
            June 22, 2020</span>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
            tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit
            faucibus sollicitudin.
          </p>
       
        </div>
      </div>

           {/* Comment 2 */}
           <div className="flex space-x-4 mb-8 ml-20">
        {/* User Image */}
        <img
          src="/images/comntimg2.jpeg"
          alt="MD Moon Khan"
          className="w-12 h-12 rounded-full object-cover"
        />
        {/* Content */}
        <div>
          <div className="flex gap-3">
          <h3 className="font-semibold">MD Moon Khan</h3>
          <LuReplyAll className="text-yellow-600 mt-1"/>
          <button className="text-yellow-500 text-sm mt-1">Reply</button>
          
          </div>
          <span className="flex gap-2 text-sm text-gray-500">
            <IoCalendarNumberOutline className="text-yellow-600" />
            June 22, 2020
          </span>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
            tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit
            faucibus sollicitudin.
          </p>
         
        </div>
      </div>

       {/* Comment 3 */}
       <div className="flex space-x-4 mb-8">
        {/* User Image */}
        <img
          src="/images/cmntimg3.jpeg"
          alt="MD Gulli Khan"
          className="w-12 h-12 rounded-full object-cover"
        />
        {/* Content */}
        <div>
          <div className="flex gap-3">
          <h3 className="font-semibold">MD Gulli Khan</h3>
          <LuReplyAll className="mt-1"/>
          <button className="text-sm mt-1">Reply</button>
          </div>
          <span className="flex gap-2 text-sm text-gray-500">
          <IoCalendarNumberOutline className="text-yellow-600" />
            June 22, 2020</span>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
            tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit
            faucibus sollicitudin.
          </p>
       
        </div>
      </div>

 {/* Comment Form */}
 <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Post a comment</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 p-2 rounded focus:outline-yellow-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 p-2 rounded focus:outline-yellow-500"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Write a comment"
            className="w-full border border-gray-300 p-2 rounded focus:outline-yellow-500"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Post a comment
          </button>
     </form>
   </div>

   </div>
  </div>


       {/* content right div */}
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