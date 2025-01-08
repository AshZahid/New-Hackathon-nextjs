import Image from "next/image"
import  { IoIosCheckmark } from "react-icons/io";

export default function About(){
    return(
        <div className="flex flex-col lg:flex-row pt-12 w-full gap-28 bg-black h-[600px]">
            {/* left text div */}
           <div className="lg:w-[500px] ml-2 lg:ml-40 mt-12">
            
            {/* headings */}
            <div className="text-yellow-600 sm:text-lg lg:text-xl italic">
                <h3>About us</h3>
                </div>
                <div className="flex gap-2 pt-5 text-2xl lg:text-4xl font-bold text-white">
                    <h1 className="text-yellow-600">WE</h1>
                    <h1>Create the best <br/>food product</h1>
                </div>
                {/* paragraph */}

                <div className="pt-5 text-sm sm:text-base lg:text-lg text-white">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati autem alias corrupti sequi ipsa vero sapiente
                         ut optio labore deserunt? Dicta natus repellendus placeat inventore eligendi quos, nemo blanditiis ab.</p>
                </div>

                {/* check points */}

                <div className="mt-5 text-white space-y-3">
                <div className="flex gap-2">
                    <span> <IoIosCheckmark className="mt-1" /></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       
             </div>

                <div className="flex gap-2">
                    <span> <IoIosCheckmark className="mt-1" /> </span>
                    Obcaecati autem alias corrupti sequi ipsa vero sapiente
                </div>
                <div className="flex gap-2">
                    <span> <IoIosCheckmark className="mt-1" /></span>
                    repellendus placeat inventore eligendi nemo blanditiis ab.
                </div>

                </div>

                <button className ="rounded-full mt-6 bg-yellow-600 text-white hover:bg-white hover:text-yellow-600 px-11 ml-2 py-5">
                        Read More</button>


           </div>


   {/* right images div */}
           <div className ="lg:w-[550px] mt-12 mr-7">
            <div className="ml-1">
                <Image src={"/images/img1abt.png"} alt="img1" width={500} height={400} className="w-[200] h-[200]" />
            </div>
                <div className="flex flex-col lg:flex-row ml-2 lg:ml-8 gap-2 mt-5 justify-center">
            <div>
                <Image src={"/images/img2abot.png"} alt="img2" width={250} height={250} />
            </div>
            <div>
                <Image src={"/images/img3abot.png"} alt="img3" width={250} height={250} />
            </div>
            </div>
           </div>
        </div>
    );
};