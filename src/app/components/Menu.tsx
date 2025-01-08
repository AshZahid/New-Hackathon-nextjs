import Image from "next/image";


export default function Menu(){
    return(
        <div className="w-full h-[750px]  text-white bg-black pt-[1000px] lg:pt-32">
           
            {/* heading 1 */}
            <div className="w-full text-center italic text-xl text-yellow-600">
                <h3>Choose and Pick</h3>
            </div>
            {/* heading 2 */}
            <div className="w-full flex text-center pt-3 text-3xl font-bold place-content-center">
                <h1 className="text-yellow-600">Fr</h1>
                <h1>om Our Menu</h1>
            </div>


                {/* list */}
            <div className="w-auto flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around items-center mt-6">
                <ul className="flex justify-around items-center gap-12">
                    <li className="hover:text-yellow-600">Breakfast</li>
                    <li className="hover:text-yellow-600">Lunch</li>
                    <li className="hover:text-yellow-600">Diner</li>
                    <li className="hover:text-yellow-600">Dessert</li>
                    <li className="hover:text-yellow-600">Drink</li>
                    <li className="hover:text-yellow-600">Snack</li>
                    <li className="hover:text-yellow-600">Soups</li>
                </ul>
            </div>

           {/* image left div*/}
          
           <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around mt-5 items-center">
          
           <div className=" h-96 w-full bg-no-repeat bg-cover" 
              style={{ backgroundImage: `url('/images/menuleafimg.png')`}}>
           <div className="w-80 h-80 pt-7 ml-8 place-item-center">
               <Image src={"/images/menuimg1.png"} alt="img" width={450} height={350} />
           </div>
           </div>

          
          
           {/* middle div */}
           <div className="w-80 h-96">
            <div className="flex gap-1">
                <div>
                    <Image src={"/images/menuimg2.png"} alt="img" width={100} height={100} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Lettuce Leaf</h1>
                    <p>Lacus, et ac dapibus velit in consequate</p>
                    <p className="font-bold text-xl text-yellow-600">12.5$</p>
                </div>

            </div>

            <div className="flex gap-1 mt-3">
                <div>
                    <Image src={"/images/choseimg3.png"} alt="img" width={100} height={100} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Fresh Breakfast</h1>
                    <p>Lacus, et ac dapibus velit in consequate</p>
                    <p className="font-bold text-xl text-yellow-600">14.5$</p>
                </div>

            </div>

            <div className="flex gap-1 mt-3">
                <div>
                    <Image src={"/images/menuimg3.png"} alt="img" width={100} height={100} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Fresh Breakfast</h1>
                    <p>Lacus, et ac dapibus velit in consequate</p>
                    <p className="font-bold text-xl text-yellow-600">14.5$</p>
                </div>

            </div>

            <div className="flex gap-1 mt-3">
                <div>
                    <Image src={"/images/menuimg4.png"} alt="img" width={100} height={100} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Fresh Bread</h1>
                    <p>Lacus, et ac dapibus velit in consequate</p>
                    <p className="font-bold text-xl text-yellow-600">12.5$</p>
                </div>

            </div>

      </div>


           {/* right div */}
           <div className="w-80 h-96 pt-3 lg:pt-0">
           <div className="flex gap-1 mt-3">
                <div>
                    <Image src={"/images/menuimg5.png"} alt="img" width={100} height={100} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Glow Cheese</h1>
                    <p>Lacus, et ac dapibus velit in consequate</p>
                    <p className="font-bold text-xl text-yellow-600">12.5$</p>
                </div>

            </div>
           

            <div className="flex gap-1 mt-3">
                <div>
                    <Image src={"/images/menuimg6.png"} alt="img" width={100} height={100} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Italian Pizza</h1>
                    <p>Lacus, et ac dapibus velit in consequate</p>
                    <p className="font-bold text-xl text-yellow-600">14.5$</p>
                </div>

            </div>

            <div className="flex gap-1 mt-3">
                <div>
                    <Image src={"/images/img3abot.png"} alt="img" width={100} height={100} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Slice Beaf</h1>
                    <p>Lacus, et ac dapibus velit in consequate</p>
                    <p className="font-bold text-xl text-yellow-600">12.5$</p>
                </div>

            </div>

            <div className="flex gap-1 mt-3">
                <div>
                    <Image src={"/images/foodimg2.png"} alt="img" width={100} height={100} />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Mushaom Pizza</h1>
                    <p>Lacus, et ac dapibus velit in consequate</p>
                    <p className="font-bold text-xl text-yellow-600">12.5$</p>
                </div>

            </div>
           
           </div>
        </div>
    </div>
    );
};

