import Image from "next/image";
import Link from "next/link";

export default function Chef() {
    return(
        <div className="w-full h-2/3 pt-[1500px] lg:pt-7 bg-black text-white">
         <div className="text-yellow-600 pt-4 pl-7 text-xl italic text-center">
                    <h2>Chefs</h2>
                </div>

                  {/* heading 2 */}
                  <div className="flex font-bold pl-7 text-3xl place-content-center">
                    <h1 className="text-yellow-600">Me</h1>
                    <h1>et Our Chef</h1>
                </div>
 
        <div className="flex justify-center gap-3 flex-col md:flex-col lg:flex-row pt-8">

            <div>
                <Image src={"/images/chef1.png"} alt="chef" width={200} height={300}/>
            </div>

            <div>
            <Image src={"/images/chef2.png"} alt="chef" width={200} height={300}/>
            </div>

            <div>
            <Image src={"/images/chef3.png"} alt="chef" width={200} height={300}/>
            </div>

            <div>
            <Image src={"/images/chef4.png"} alt="chef" width={200} height={300}/>
            </div>
        </div>
    
     <Link href="/OurChef">
        <button className ="sm:ml-6 lg:ml-[612px] rounded-full border border-yellow-600 mt-6 bg-black text-white hover:bg-white hover:text-yellow-600 px-7 ml-2 py-4">
        See More</button>
        </Link>

      </div>

    );
};