import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { LiaStarSolid } from "react-icons/lia";
import { BsHandbag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci"
import { IoGitCompare } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillPinterest } from "react-icons/ai";



const ShopDetails = () => {
  return (
    <div className="w-full h-auto">
      
       {/* hero sec of shop Details page */}
       <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Shop Details</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                < Link href="/" className="text-white">Home</Link>
                
                <Link href="/ShopDetails" className="text-yellow-600">Shop Details</Link>
            </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="w-full h-auto mt-12 gap-5 flex flex-col lg:flex-row">

        {/* left images div */}
        <div className="flex gap-3 w-1/2 ml-16 h-96">
            {/* group imgs */}
            <div className="space-y-5">
              <Image src={"/images/shopdet1.jpeg"} alt="chicken" width={100} height={100}/>
              <Image src={"/images/shopdet2.jpeg"} alt="chicken" width={100} height={100}/>
              <Image src={"/images/shopdet3.jpeg"} alt="chicken" width={100} height={100}/>
              <Image src={"/images/shopdet4.jpeg"} alt="chicken" width={100} height={100}/>
            </div>
            {/* bigest img */}
            <div className="bg-black">
                <Image src={"/images/shopdet5.jpeg"} alt="img" width={530} height={500} />
            </div>
        </div>



  {/* right content div */}
        <div className="w-1/2 h-2/3 mt-9">
          <div className="flex justify-between">
          <button className="rounded bg-yellow-600 text-white hover:text-yellow-600 hover:bg-white px-5 py-2">In stock</button>
           <div className="flex gap-1 text-gray-500">
           <FaArrowLeft className="mt-1.5" />
            <p>Prev</p>
            <p>Next</p>
            <FaArrowRight className="mt-1.5" />
           </div>
      
        </div>

        <h1 className=" text-xl lg:text-4xl font-bold">Yummy Chicken Chup</h1>
        <p className="pt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo eum <br/>maxime totam unde earum Impedit beatae velit est facilis esse volupta<br/>
        tum libero iure quibusdam non hic laudantium incidunt, reprehenderit eius?</p>

        <div className="border border-gray-300 w-[550px] mt-5"></div>
       <div className="mt-7">

        <p className="font-bold text-2xl">54.00$</p>
        <div className ="flex gap-2 mt-2">
         <LiaStarSolid className="text-yellow-600 pt-1" />
         <LiaStarSolid className="text-yellow-600 pt-1" />
         <LiaStarSolid className="text-yellow-600 pt-1" />
         <LiaStarSolid className="text-yellow-600 pt-1" />
         <LiaStarSolid className="text-yellow-600 pt-1" />

         <div className="border border-gray-300"></div>
         <p className="text-gray-500">5.0 Rating</p>
         <div className="border border-gray-300"></div>
         <p className="text-gray-500">22 Review</p>

         </div>
       </div>
  
  <div className="mt-3 mb-3">
    <h2>Dictum/cursur/Risus</h2>
    <div className="flex gap-4 mt-3">
    <div className="flex">
      <div className="w-8 h-6 border border-gray-500 text-center">-</div>
      <div className="w-8 h-6 border border-gray-500 text-center">1</div>
      <div className="w-8 h-6 border border-gray-500 text-center">+</div> 
    </div>
    <button className="bg-yellow-500 text-white px-4 py-2 flex gap-3 mb-1">
         <BsHandbag />
      Add to cart
    </button>
  </div>
  </div>
   
    <div className="border border-gray-300 w-[550px] mt-5"></div>

    <div className="flex gap-3 mt-3">
    <CiHeart />
    <p>Add to Wishlist</p>
    <IoGitCompare />
    <p>Compare</p>
    </div>
    <p>category: Pizza</p>
    <p>Tag: Our Shop</p>

  <div className="flex gap-2 mt-3">
    <p>Share:</p>
    <div className="flex gap-2 text-white">
                <div className="bg-gray-600 p-2"><FaFacebookF /> </div>
               <div className="bg-gray-600 p-2"> < FaTwitter /> </div>
                <div className="bg-gray-600 p-2">< FaInstagram /></div>
                <div className="bg-gray-600 p-2"><FaYoutube /></div>
                 <div className="bg-gray-600 p-2"><AiFillPinterest /></div>
              </div>

  </div>

      </div>
  </div>
    
{/* section 3 */}
<div className="w-full h-1/2 ml-12 space-y-4 mt-16">
    <div className="flex gap-4">
      <p className="bg-yellow-600 py-2 px-4">Description</p>
      <p className="pt-2">Reviews 24</p>
    </div>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, recusandae laudantium repudiandae debitis amet
       voluptatum odio <br/> dolore non labore similique. Reiciendis sed ullam deserunt, doloremque excepturi minima quia vel laborum.</p>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias officiis placeat ex ut eius? Modi iure nulla<br/> doloremque
     repudiandae dolore voluptatum incidunt enim? Iste voluptatem ea, quidem earum perspiciatis necessitatibus.
  </p>

  <h6 className="text-xl">Key Benifits</h6>
  <ul className="list-disc space-y-3">
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    <li>Consequuntur officia dolorem maxime debitis reiciendis ipsa vitae corrupti</li>
    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    <li>Necessitatibus odio dicta earum natus atque assumenda eos enim.</li>
    <li>Quas eligendi repudiandae illo ad doloremque cupiditate cumque?</li>
  </ul>
  
  </div>    
    
    {/* pic sec */}
    <div className="w-full mt-28 pl-9">
      <h1 className="text-3xl font-bold pb-3">Similar Products</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 gap-y-4 pb-5">
        <Image src={"/images/Fresh Lime.png"} alt="lime" width={300} height={200} />
        <Image src={"/images/shop2.png"} alt="lime" width={300} height={200} />
        <Image src={"/images/shop3.png"} alt="lime" width={300} height={200} />
        <Image src={"/images/Fresh Lime.png"} alt="lime" width={300} height={200} />
      </div>
    </div>
    
  </div>
  );
};

export default ShopDetails
