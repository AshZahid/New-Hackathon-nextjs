import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { CiShare2 } from "react-icons/ci";

export default function Blog() {
    return(
        <div className="w-auto h-2/3 bg-black pt-16">
            <div className="text-yellow-600 font-light text-xl italic text-center">
                <h3>Blog Post</h3>
            </div>

            <div className="flex font-bold text-3xl place-content-center pt-4">
                <h1 className="text-yellow-600">La</h1>
                <h1 className="text-white">test News & Blog</h1>
            </div>
            
            
             {/* images div */}
             
            <div className="flex justify-center items-center w-full flex-col lg:flex-row gap-5 mt-8">
              
              {/* image 1 */}
                <div className="w-72 border border-white">
                    <Image src={"/images/foodimg2.png"} alt="" width={300} height={250} />
                    <p className="text-yellow-600 pt-5">10 February 2022</p>
                    <h2 className="text-xl font-bold text-white pt-2 py-2">Pellentesque Non Efficitur Mi Aliquam Conva Mi Quis</h2>
           
              <div className="flex justify-between text-white">
                <button className=" my-4 pl-4">Learn More</button>
                <div className="flex gap-3 pt-5 pr-2">
                <FiThumbsUp />
                <  LuMessageSquareMore className="text-yellow-600" />
                <CiShare2 />
              </div>
              </div>

                </div>
              
              {/* image 2 */}
               <div className="w-72  border border-white">
               <Image src={"/images/blogimg1.png"} alt="img" className="mb-12" width={300} height={300} />
                    <p className="text-yellow-600 pt-5">10 February 2022</p>
                    <h2 className="text-xl font-bold text-white pt-2">Pellentesque Non Efficitur Mi Aliquam Conva Mi Quis</h2>
            
              <div className="flex justify-between text-white">
            
                <button className=" my-4 pl-4">Learn More</button>
                <div className="flex gap-3 pt-5 pr-2">
                <FiThumbsUp />
                <  LuMessageSquareMore className="text-yellow-600" />
                <CiShare2 />
              </div>
            
              </div>

            </div>

                {/* image 3 */}
                <div className="w-72 border border-white">

                <Image src={"/images/choseimg1.png"} alt="img" width={300} height={250} />
                    <p className="text-yellow-600 pt-5">10 February 2022</p>
                    <h2 className="text-xl font-bold text-white pt-2">Pellentesque Non Efficitur Mi Aliquam Conva Mi Quis</h2>
        
              <div className="flex justify-between text-white">
        
                <button className=" my-4 pl-4">Learn More</button>
                <div className="flex gap-3 pt-5 pr-2">
                <FiThumbsUp />
                <  LuMessageSquareMore className="text-yellow-600" />
                <CiShare2 />
              </div>
              </div>
          </div>
     </div>


  </div>
  );
};

