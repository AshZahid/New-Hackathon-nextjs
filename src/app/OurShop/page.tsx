import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Search } from 'lucide-react';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FiArrowRightCircle } from "react-icons/fi";
import { LiaStarSolid } from "react-icons/lia";

export default function OurShop() {
    return(
        <div className="w-full h-auto">
  
          {/* hero sec of shop page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Our Shop</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/OurShop" className="text-yellow-600">Shop</Link>
            </div>
            </div>
           
        </div>

    

        <div className="flex items-center ml-32 space-x-2 w-6/12 mt-20">
            <div className=" flex w-80 h-10">
            
            {/* sort by */}
            
            <label htmlFor="sort">Sort By:</label>
            <div className="flex text-gray-600 pl-3 border border-gray-300">
            <input type="text" placeholder="Newest"/>
            <FaAngleDown className="mt-3 mr-2" />
            </div>
        </div>

      <div className="flex w-80 h-10">
       
             {/* sort by */}
       
            <label htmlFor="sort">Show:</label>
            <div className="flex text-gray-600 pl-3 border border-gray-300">
            <input type="text" placeholder="Default"/>
            <FaAngleDown className="mt-3 mr-2" />
            </div>
        </div>
        
     </div>

         <div className="flex flex-col lg:flex-row w-full h-auto">
      {/* left card div */}
      
      <div className="w-3/6 h-aut gap-y-4 ml-32 mt-5">
     
    {/* first row */}
    <div className="flex flex-col lg:flex-row gap-5 mt-2">
        <Image src={"/images/Fresh Lime.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop2.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop3.png"} alt="lime" width={200} height={200}/>
    </div>
    
    {/* second row */}
    <div className="flex flex-col lg:flex-row gap-5 mt-2">
        <Image src={"/images/shop4.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop5.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop6.png"} alt="lime" width={200} height={200}/>
    </div>
    
    {/* third row */}
    <div className="flex flex-col lg:flex-row gap-5 mt-2">
        <Image src={"/images/shop7.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop8.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop9.png"} alt="lime" width={200} height={200}/>
    </div>

    {/* forth row */}
    <div className="flex flex-col lg:flex-row gap-5 mt-2">
        <Image src={"/images/shop4.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop5.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop6.png"} alt="lime" width={200} height={200}/>
    </div>

    {/* fifth row */}
    <div className="flex flex-col lg:flex-row gap-5 mt-2">
        <Image src={"/images/shop7.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop8.png"} alt="lime" width={200} height={200}/>
        <Image src={"/images/shop9.png"} alt="lime" width={200} height={200}/>
    </div>


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

  
      {/* right content div */}
      <div className="mt-1 w-72">
        
        <div className="flex mt-10">
                 
                 <input className="text-gray-500 pl-3 bg-pink-100" type="text" placeholder="Search Product" />
                 <div>
                 <Search className="mr-1 pr-2 bg-yellow-600 text-white" />
               </div>
            </div> 
            
            <div>
                <h1 className="text-3xl font-bold pt-5">Category</h1>
                <div className="flex gap-3 mt-2">
                    <MdCheckBoxOutlineBlank className="mt-1"/>
                    <p>Sandwiches</p>
                </div>

                <div className="flex gap-3 mt-2">
                    <MdCheckBoxOutlineBlank className="mt-1"/>
                    <p>Burder</p>
                </div>

                <div className="flex gap-3 mt-2">
                    <MdCheckBoxOutlineBlank className="mt-1"/>
                    <p>Chicken Chup</p>
                </div>

                <div className="flex gap-3 mt-2">
                    <MdCheckBoxOutlineBlank className="mt-1"/>
                    <p>Drinks</p>
                </div>

                <div className="flex gap-3 mt-2">
                    <MdCheckBoxOutlineBlank className="mt-1"/>
                    <p>pizza</p>
                </div>

                <div className="flex gap-3 mt-2">
                    <MdCheckBoxOutlineBlank className="mt-1"/>
                    <p>Thai</p>
                </div>

                <div className="flex gap-3 mt-2">
                    <MdCheckBoxOutlineBlank className="mt-1"/>
                    <p>non Veg</p>
                </div>

                <div className="flex gap-3 mt-2">
                    <MdCheckBoxOutlineBlank className="mt-1"/>
                    <p>Uncategorize</p>
                </div>
            </div>
            

             {/* right bgimage div */}
             <div className="mt-5">
                <div className="w-full h-72 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/shoprightimg.jpeg")`}}>
                <h2 className="text-xl text-white pl-3 pt-5">Perfect Taste</h2>
                <h1 className="text-2xl text-white pl-3 pt-4">Classic Restaurant</h1>
                  <p className="text-xl text-yellow-600 pl-3 pt-5">45.00$</p>
                
                <div className="flex gap-3 mt-24 ml-3 text-white">
                <p>Shop Now</p>
                <FiArrowRightCircle className="mt-1"/>
                </div>
                </div>
             </div>

             {/* filter */}
                   <div className="mt-3">
                       <h2 className="text-2xl font-bold">Filter By Price</h2>
                       <div className="w-64 h-1 mt-4 bg-yellow-600"></div>
                       <div className="mt-4 text-gray-500 gap-24 flex">
                        <p>From $0 to $8000</p>
                        <p>Filter</p>
                       </div>
                   </div>

                   {/* product */}
                  
                  <div className="mt-5">
                    <h1 className="text-2xl font-bold">Latest Products</h1>
                  </div>

                  <div className="flex gap-4 mt-3 text-xl">
                    <div>
                        <Image src={"/images/shoprightimg2.jpeg"} alt="prod" width={50} height={20} />
                    </div>
                    <div>
                        <h6>Pizza</h6>
                        <div className="flex gap-2 mt-1 mb-1">
                        <p><LiaStarSolid className="text-yellow-600"/> </p>
                        <p><LiaStarSolid  className="text-yellow-600"/> </p>
                        <p><LiaStarSolid   className="text-gray-400"/> </p>
                        <p><LiaStarSolid className="text-gray-400" /> </p>
                        <p><LiaStarSolid className="text-gray-400" /> </p>
                        </div>
                        <p>$35.00</p>
                    </div>
                 </div>

                 <div className="flex gap-4 mt-3 text-xl">
                    <div>
                        <Image src={"/images/shoprightimg2.jpeg"} alt="prod" width={50} height={20} />
                    </div>
                    <div>
                        <h6>Cupcake</h6>
                        <div className="flex gap-2 mt-1 mb-1">
                        <p><LiaStarSolid className="text-yellow-600"/> </p>
                        <p><LiaStarSolid  className="text-yellow-600"/> </p>
                        <p><LiaStarSolid   className="text-gray-400"/> </p>
                        <p><LiaStarSolid className="text-gray-400" /> </p>
                        <p><LiaStarSolid className="text-gray-400" /> </p>
                        </div>
                        <p>$35.00</p>
                    </div>
                 </div>

                 <div className="flex gap-4 mt-3 text-xl">
                    <div>
                        <Image src={"/images/shoprightimg2.jpeg"} alt="prod" width={50} height={20} />
                    </div>
                    <div>
                        <h6>Cookies</h6>
                        <div className="flex gap-2 mt-1 mb-1">
                        <p><LiaStarSolid className="text-yellow-600"/> </p>
                        <p><LiaStarSolid  className="text-yellow-600"/> </p>
                        <p><LiaStarSolid   className="text-gray-400"/> </p>
                        <p><LiaStarSolid className="text-gray-400" /> </p>
                        <p><LiaStarSolid className="text-gray-400" /> </p>
                        </div>
                        <p>$35.00</p>
                    </div>
                 </div>

                 <div className="flex gap-4 mt-3 text-xl">
                    <div>
                        <Image src={"/images/shoprightimg2.jpeg"} alt="prod" width={50} height={20} />
                    </div>
                    <div>
                        <h6>Burger</h6>
                        <div className="flex gap-2 mt-1 mb-1">
                        <p><LiaStarSolid className="text-yellow-600"/> </p>
                        <p><LiaStarSolid  className="text-yellow-600"/> </p>
                        <p><LiaStarSolid   className="text-gray-400"/> </p>
                        <p><LiaStarSolid className="text-gray-400" /> </p>
                        <p><LiaStarSolid className="text-gray-400" /> </p>
                        </div>
                        <p>$35.00</p>
                    </div>
                 </div>
        
        <div className="mt-3">
            <h1 className="text-2xl font-bold">Product Tags</h1>
            <div className="flex gap-3 underline text-gray-400">
                <h2 className="hover:text-yellow-600">Services</h2>
                <h2 className="hover:text-yellow-600">Our Menu</h2>
                <h2 className="hover:text-yellow-600">Pizza</h2>
            </div>

            <div className="flex gap-3 underline text-gray-400 hover:text-yellow-600">
                <h2 className="hover:text-yellow-600">Cupcake</h2>
                <h2 className="hover:text-yellow-600">Burger</h2>
                <h2 className="hover:text-yellow-600">Cookies</h2>
            </div>

            <div className="flex gap-3 underline text-gray-400 hover:text-yellow-600">
                <h2 className="hover:text-yellow-600">Our Shop</h2>
                <h2 className="hover:text-yellow-600">Tandiro Chicken</h2>
                </div>
        </div>
         </div>
      
      
     </div>


  </div>
  );
};