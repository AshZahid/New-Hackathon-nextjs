import Image from "next/image";
import Link from "next/link";
import { GiCoffeeCup } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";


export default function OurMenu() {
  return (
    <div className="w-full h-auto">
        <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Our Menu</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/OurMenu" className="text-yellow-600">Menu</Link>
            </div>
            </div>
           
        </div>

   {/* first div */}
   {/* starter menu */}
        <div className="h-[544px] w-full items-center justify-center text-black flex flex-col lg:gap-x-32 lg:flex-row gap-y-5 lg:gap-y-0 mt-10">
            {/*left image div */}
            
            <div className="w-96 h-[530px]">
                <Image src={"/images/startermenu.png"} alt="" width={348} height={526} />                    
            </div>
        

            {/* right content div */}
            
            <div className="mt-4 w-1/2 h-[530px]">
            <GiCoffeeCup className="text-yellow-500" />
            <div className="text-xl lg:text-4xl font-bold">
                <h1>Starter Menu</h1>
                
            </div>
            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Alder Grilled Chinook Salmon</h3>
                <p>Toasted french bread topped with</p>
            
            </div>
            <div className="flex gap-x-6 lg:gap-x-96 pb-8 text-gray-500">
                560 CAL
                <div className="text-yellow-600 font-bold">32$</div>
            </div>

             
            <div>
            <h3 className="text-xl text-yellow-500 font-bold pt-3 pb-1">Barries and creme tart</h3>
                <p>Gorgonzola. ricotta,mozzarelaa, teleggio</p>
            </div>
            <div className="flex gap-x-6 lg:gap-x-96 pb-8 text-gray-500">
                700 CAL
                <div className="text-yellow-600 font-bold">32$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Tormentoso Bush Pizza Pintoage</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
            </div>
            <div className="flex gap-x-6 lg:gap-x-96 pb-8 text-gray-500">
                1000 CAL
                <div className="text-yellow-600 font-bold">43$</div>
            </div>

             <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Spicy Vegan Potato Curry</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                1000 CAL
                <div className="text-yellow-600 font-bold">14$</div>
            </div>
            </div>
        
         </div>

           {/* second div */}     
     <div className="h-[544px] w-full items-center justify-center text-black flex flex-col lg:gap-x-32 lg:flex-row gap-y-5 lg:gap-y-0 mt-24">

           {/* left content div */}
          <div className=" mt-4 w-1/2 h-[530px]">
            <GiCoffeeCup className="text-yellow-500" />
            <div className="text-xl lg:text-4xl font-bold">
                <h1>Main Course</h1>
                
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Optic Breakfast Combo Menu</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Cashew Chicken With Stir-Fry</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Vegetable & Green Salad</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Spicy Vegan Potato Curry</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

        </div>


   {/* right imge div */}

    <div className="w-96 h-[500px] items-center pt-16">
    <Image src={"/images/choseimg3.png"} alt="" width={448} height={526} /> 
    </div>

  </div>
        
          {/* 3rd div */}
    <div className ="flex justify-center h-60 items-center flex-col lg:flex-row gap-6 mt-12 text-white bg-black">

           <div className="flex flex-col lg:flex-row place-content-center text-center w-full h-60 pt-4 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>

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

         {/* 4th div */}
         <div className="h-[544px] w-full items-center justify-center mt-10 text-black flex flex-col lg:gap-x-32 lg:flex-row gap-y-5 lg:gap-y-0">
            
           {/* right image div */}
             <div className="w-96 h-[500px] items-center">
    <Image src={"/images/dessert.png"} alt="" width={348} height={426} /> 
    </div>
           
           
           {/* left content div */}
    <div className="mt-4 w-1/2 h-[530px]">
        <GiCoffeeCup className="text-yellow-500" />
            <div className="text-xl lg:text-4xl font-bold">
                <h1>Dessert</h1>
                
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Fig and lemon cake</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Creamy mascapone cake</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Pastry, blue barries</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Pain au chocolate</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

        </div>
 </div>

      {/* 5th div */}
      <div className="h-[544px] w-full items-center justify-center mt-8 text-black flex flex-col lg:gap-x-32 lg:flex-row gap-y-5 lg:gap-y-0">
       
        {/* right content div */}
        <div className="mt-4 w-1/2 h-[530px]">
        <GiCoffeeCup className="text-yellow-500" />
            <div className="text-xl lg:text-4xl font-bold">
                <h1>Drinks</h1>
                
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Caffe machhiato</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Aperol Spritz Capacianno</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">caffe Latte Campuri</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Torementoso Bush Tea</h3>
                <p>spreadable cream cheese, crumble blue cheese</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8">
                500 CAL
                <div className="text-yellow-600 font-bold">35$</div>
            </div>

        </div>

            {/* left image div */}
            <div className="w-96 h-[500px] items-center">
    <Image src={"/images/juice.png"} alt="" width={348} height={426} /> 
    </div>
        
</div>
       
     {/* 6th div */}
      <div className="w-full h-70 mt-9">
        <div>
     <h3 className="text-gray-500 text-left lg:text-center">Partners & Clients</h3>
         <h1 className="text-xl lg:text-3xl text-left lg:text-center">We work with the best people</h1>
      </div>

      {/* icons */}
         <div className="flex flex-col lg:flex-row justify-center items-center gap-x-4 gap-y-8">
                 <Image src={"/images/menuicon.png"} alt ="img" width={200} height={200} />
                 <Image src={"/images/menuicon2.png"} alt ="img" width={200} height={200} />
                 <Image src={"/images/menuicon3.png"} alt ="img"width={200} height={200} />
                 <Image src={"/images/menuicon4.png"} alt ="img" width={200} height={200} />
         </div>

      </div>
      
    </div>
  );
 };