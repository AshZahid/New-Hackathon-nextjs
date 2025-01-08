import { FaTwitter } from "react-icons/fa";
import Image from "next/image";


export default function Hero (){
    return(
         
        <div className="flex flex-col lg:flex-row gap-28 w-full bg-black text-white pt-20 pl-28">
            <div className="flex w-[500px]">
            {/* vertical lines */}
            <div className="flex">
                <div className="hidden">
            <div className="w-px h-36 bg-white ml-0 mr-8"></div>
            <p className="mt-5">f</p>
             <p className="text-yellow-600 mt-5">
                < FaTwitter />
             </p>
             <p className="mt-5">P</p>
             <div className="w-px h-36 bg-white mr-8"></div>
          </div>
          </div>
            
            <div>
                {/* left text div */}
                <div className="lg:pl-8 lg:pt-12">

                    <div className="text-yellow-600 italic mb-6 text-xl">
                        <h3>Its Quick & Gmusing</h3>
                        </div>

                        <div className=" text-2xl sm:text-3xl lg:text-5xl font-bold flex text-center w-auto lg:text-left">
                        <h1 className="text-yellow-600">Th</h1>
                        <h1>e Art of speed <br/> food Quality</h1>
                    
                    </div>

                    <div className="pt-8 text-sm sm:text-base lg:text-lg">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Itaque eum corrupti, id repellat nulla tempora</p> 
                      </div>

                      <button className ="rounded-full mt-6 bg-yellow-600 text-white hover:bg-white hover:text-yellow-600 px-11 ml-2 py-5">
                        See Menu</button>
                </div>

               </div>
            </div>
            {/* right image div */}

            <div className="flex justify-start lg:justify-center lg:w-[550px]">
                 <Image src={"/images/herosecimg.jpg"} alt="Dish" width={400} height={150}
                 className="w-full max-w-md lg:max-w-lg"
                 />
        </div>
    </div>
    );
};