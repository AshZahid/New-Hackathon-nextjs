import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function FAQ() {
    return(
        <div className="w-full h-auto">
  
          {/* hero sec of FAQ page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>FAQ</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/OurMenu" className="text-yellow-600">FAQ Page</Link>
            </div>
            </div>
           
        </div>

        {/* secton */}
       <div className="w-full h-auto text-center place-items-center mt-12 mb-12">
        
          <h1 className="font-bold text-3xl">Questions Looks Here</h1>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis quae facere rerum, quos asperiores aut, ratione sunt</p>
           
           <div className="flex flex-col lg:flex-row gap-5 mt-6 place-items-center">
            {/* left section */}
           
            <div className="w-[600px] text-left pl-5 space-y-4">
                <div className="bg-yellow-100 pl-2">
                <div className="flex gap-8 lg:gap-80">
                <h1 className="font-bold text-xl pt-5">How we serve food?</h1>
                <p className="pt-4">+</p>
                 </div>
                <p className="pt-5 w-[1100px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur <br/>est numquam alias repudiandae quidem. Amet ut.</p>
                </div>

                <div className="bg-yellow-100 pl-2">
                <div className="flex gap-8 lg:gap-72">
                <h1 className="font-bold text-xl pt-5">How is our food quality?</h1>
                <p className="pt-4">+</p>
                 </div>
                <p className="pt-5 w-[1100px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur <br/>est numquam alias repudiandae quidem. Amet ut.</p>
                </div>

                <div className="bg-yellow-100 pl-2">
                <div className="flex gap-8 lg:gap-56">
                <h1 className="font-bold text-xl pt-5">How do we give home delivery?</h1>
                <p className="pt-4">+</p>
                 </div>
                <p className="pt-5 w-[1100px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur <br/>est numquam alias repudiandae quidem. Amet ut.</p>
                </div>

          </div>
         
         
            {/* right section */}
            <div className="w-[600px] text-left space-y-4 pl-2">

            <div className="bg-yellow-100 pl-2">
                <div className="flex gap-8 lg:gap-80">
                <h1 className="font-bold text-xl pt-5">How we serve food?</h1>
                <p className="pt-4">+</p>
                 </div>
                <p className="pt-5 w-[1100px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur <br/>est numquam alias repudiandae quidem. Amet ut.</p>
                </div>

                <div className="bg-yellow-100 pl-2">
                <div className="flex gap-8 lg:gap-72">
                <h1 className="font-bold text-xl pt-5">How is our food quality?</h1>
                <p className="pt-4">+</p>
                 </div>
                <p className="pt-5 w-[1100px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur <br/>est numquam alias repudiandae quidem. Amet ut.</p>
                </div>

                <div className="bg-yellow-100 pl-2">
                <div className="flex gap-8 lg:gap-56">
                <h1 className="font-bold text-xl pt-5">How do we give home delivery?</h1>
                <p className="pt-4">+</p>
                 </div>
                <p className="pt-5 w-[1100px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta pariatur <br/>est numquam alias repudiandae quidem. Amet ut.</p>
                </div>


            </div>
            
           </div>

        </div>    

</div>
 );
};