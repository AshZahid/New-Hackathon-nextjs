import Image from "next/image";
import { PiHamburgerLight } from "react-icons/pi";
import { LuCookie } from "react-icons/lu";
import { PiWine } from "react-icons/pi";



export default function Choose() {
    return (
        <div>
        <div className="flex lg:justify-center lg:items-center text-white pt-[1500px] lg:pt-8 gap-7 flex-col sm:flex-col md:flex-col lg:flex-row bg-black h-[950px] w-full">
          
          {/* left images div */}
            <div className="lg:w-[650px] lg:h-[700px]">
                <div className="flex flex-col lg:flex-row gap-4">
                <Image src={"/images/choseimg1.png"} alt="img" width={300} height={350} />
                <Image className="pt-20" src={"/images/foodimg2.png"} alt="img" width={200} height={100} />
                </div>

                <div className="flex flex-col lg:flex-row mt-2 gap-4">
                <Image src={"/images/choseimg2.png"} alt="img" width={250} height={200} />
                <Image className="pb-32" src={"/images/choseimg3.png"} alt="" width={200} height={100} />

                <div className="space-y-3">
                    <Image src={"/images/choseimg4.png"} alt="img" width={200} height={100} />
                    <Image src={"/images/choseimg5.png"} alt="img" width={200} height={100} />
                </div>
                </div>
            </div>

            {/* right text div */}
            <div className="w-[600px] h-[700px]">
                {/* heading 1 */}
                <div className="text-yellow-600 italic pt-4 lg:pl-7 lg:text-xl">
                    <h2>Why Choose us</h2>
                </div>

                 {/* heading 2 */}
                <div className="flex font-bold lg:pl-7 text-xl lg:text-3xl">
                    <h1 className="text-yellow-600">Ex</h1>
                    <h1>tra ordinary taste <br/> And Experienced</h1>
                </div>

                {/* paragraph */}
                   
                  <div className="lg:pl-7 text-sm sm:text-base lg:text-lg pt-7">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolores! Facere, neque veritatis iste voluptatum cupiditate cum 
                        doloribus molestias aspernatur labore expedita modi laudantium accusantium adipisci ipsa? Delectus, doloribus quasi.</p>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-4 gap-y-4 justify-start lg:items-center ml-7 w-96 h-60 lg:h-32">

                            <div  className="mt-3">  
                         <div className="w-20 h-20 bg-yellow-600 place-items-center">
                            <PiHamburgerLight className="h-20" />
                            <p className="">Fast Food</p>
                         </div>
                         </div>

                            <div className="mt-3">
                         <div className="w-20 h-20 bg-yellow-600 place-items-center">
                            < LuCookie  className="h-20" />
                              <p>Lunch</p>
                         </div>
                         </div>
                      
                         <div className="mt-3">
                         <div className="w-20 h-20 bg-yellow-600 place-items-center">
                            < PiWine className="h-20" />
                            <p>Dinner</p>
                         </div>
                         </div>
                        
                  </div>

                 
        <div className=" mt-44 lg:mt-5 ml-7">
            <Image src={"/images/chosebutn.png"} alt="img" width={200} height={100} />
        </div>

       </div>
           
    </div>
             <div className ="flex justify-center items-center pt-[2900px] lg:pt-12 flex-col md:flex-col lg:flex-row gap-6 text-white bg-black">
             <div className="flex flex-col lg:flex-row place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            
             <div className="w-56 h-56 text-center place-items-center">
               <Image src={"/images/Group1.png"} alt="img" width={150} height={200} />
                <p className="pt-2 font-medium">Professional Chefs</p>
                <p className="pt-3 font-bold">420</p>
             </div>

             <div className="w-56 h-56 text-center place-items-center">
                    <Image src={"/images/Group2.png"} alt="img" width={150} height={200} />
             <p className="pt-2 font-medium">Items Of Food</p>
             <p className="pt-3 font-bold">320</p>
             </div>

             <div className="w-56 h-56 text-center place-items-center">
                    <Image src={"/images/Group3.png"} alt="img" width={150} height={200} />
             <p className="pt-2 font-medium">Years Of Experienced</p>
             <p className="pt-3 font-bold">30+</p>
             </div>

             <div className="w-56 h-56 text-center place-items-center">
                     <Image src={"/images/Group4.png"} alt="img" width={150} height={200} />
             <p className="pt-2 font-medium">Happy Customers</p>
             <p className="pt-3 font-bold">220</p>
             </div>
         </div>
     </div>
           
  </div>       
  );
};