import Image from "next/image";


export default function FoodCategary(){
    return(
        <div className="w-full pt-[700px] lg:pt-12 text-white lg:text-center bg-black h-[450px]">
           
            {/* left side */}
            {/* heading 1 */}
            <div className="text-yellow-600 italic text-xl">
                <h2>Food Categary</h2>
                 </div>

                 {/* heading2 */}

                 <div className="flex text-lg sm:text-2xl lg:text-4xl font-bold lg:place-content-center">
                    <h1  className="text-yellow-600">Ch</h1>
                 <h1>oose Food Items</h1>
                 </div>


               {/* right side */}
                 {/* images */}
                 <div className="flex lg:justify-center lg:items-center mt-20 gap-y-4 lg:gap-y-0 lg:mt-16 sm:flex-col
                  md:flex-col-2 lg:flex-row gap-2 h-auto lg:h-60">
                    
                    <div className="flex w-64 h-auto lg:h-56 mt-3 items-center justify-center">
                    
                        <Image src={"/images/foodimg1.png"} alt="food" width={250} height={100} />
                    </div>

                    <div className="flex  mb-2 mt-3 items-center justify-center w-64 h-auto">
                    <Image src={"/images/foodimg2.png"} alt="food" width={250} height={100} />
                    </div>

                    <div className="flex mb-2 mt-3 items-center justify-center  w-64 h-auto">
                    <Image src={"/images/foodimg3.png"} alt="food" width={250} height={100} />
                    </div>

                    <div className="flex mb-2 mt-3 items-center justify-center w-64 h-auto">
                    <Image src={"/images/foodimg4.png"} alt="food" width={250} height={100} />
                    </div>
                 </div>
        </div>
    );
};