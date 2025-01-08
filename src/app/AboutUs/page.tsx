import Link from "next/link";
import Image from "next/image";
import { FaUserGraduate } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import  {PiPerson} from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";


export default function AboutUs() {
    return(
        <div className="w-full h-auto">
  
          {/* hero sec of about page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>About Us</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/About" className="text-yellow-600">About Us</Link>
            </div>
            </div>
           
        </div>

        {/* left images div */}
       <div className="flex flex-col lg:flex-row gap-5 w-full">
        <div className="flex gap-2 ml-7 mt-12 h-96">
            <Image src={"/images/choseimg1.png"} alt="img" width={300} height={650} />
        </div>
        <div className="mt-24 space-y-3">
        <Image src={"/images/choseimg2.png"} alt="img" width ={200} height={650} /> 
        <Image src={"/images/Fresh Lime.png"} alt="img" width ={200} height={650} /> 
        
       </div>


{/* right cont div */}
         <div className="mt-32 ml-20 w-96">
         <div className="text-yellow-600 sm:text-lg lg:text-xl italic">
                <h3>About us</h3>
                </div>
                <div className="flex gap-2 pt-5 text-lg lg:text-4xl font-bold pb-5">
                    <h1>Food is an important part of a balanced diet</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum totam nemo harum iste velit magnam quas consequuntur eaque aspernatur, nostrum ipsa ullam minus, molestias temporibus nam aliquid, alias fuga at.</p>
         
         
                    <div className="flex justify-center mt-6 space-x-4">
          <button className="px-9 py-3 text-sm font-medium text-white  rounded bg-yellow-600 hover:bg-white-600">
            Show More
          </button>

          <button className="flex items-center px-6 py-3 text-sm font-medium rounded-full hover:bg-yellow-600">
            <svg
              className="w-8  bg-yellow-600 rounded-full h-8 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video 
          </button>
        </div>

     </div>
         
  </div>
  
            {/* why chose us */}
    <div className="mt-36 w-full text-center place-items-center">
      <div>
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <p className="w-96 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae iste itaque ullam eligendi</p>
     </div>
   
   <div className="w-[1000px] h-72 mt-5 mb-5">
           <Image src={"/images/abotchose.jpeg"} alt="chooseus" width={300} height={200} layout="resposive" className="w-full h-72" />
   </div>

           {/* icons div */}
         <div className="flex flex-col lg:flex-row gap-6 place-items-center">
           <div className="w-56 place-items-center">
           <FaUserGraduate />
           <p className="font-bold pt-3">Best Chef</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae iste itaque</p>
    </div>
      <div className="w-56 place-items-center">
          <GiCoffeeCup />
           <p className="font-bold pt-3">120 Item food</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae iste itaque</p>
      </div>


         <div className="w-56 place-items-center">
            <PiPerson />
             <p className="font-bold pt-3">Clean Enviroment</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae iste itaque</p>
         </div>
     </div>

        {/* team member */}
        <div className="w-full mt-12 mb-60 h-72 bg-yellow-600 text-white place-items-center">
          <div className="inset-0"> </div>
            <div className="pt-20">
                <h2 className="font-bold text-2xl">Team Member</h2>
                <p className="w-96 pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus facere Molestiae perspiciatis vitae</p>
            </div>

            {/* img div */}
         <div className="mt-5 flex flex-col lg:flex-row gap-5">
            <div className="text-gray-500">
            <Image src={"/images/team chef.jpeg"} alt="chef" width={312} height={320} className="w-72 h-72" />
            <p className="font-bold">Mark Henry</p>
            <p>Owner</p>
            </div>
            <div className="text-gray-500">
            <div className="bg-cover bg-no-repeat w-72 h-72" style={{backgroundImage:`url("/images/team chef.jpeg")`}}></div>
            <p className="font-bold">Lucky Helen</p>
            <p>Chef</p>
            </div>
            
            <div className="text-gray-500">
            <Image src={"/images/team chef.jpeg"} alt="chef" width={312} height={320} className="w-72 h-72" />
            <p className="font-bold">Moon henry</p>
            <p>Founder</p>
            </div>

            <div className="text-gray-500">
            <Image src={"/images/team chef.jpeg"} alt="chef" width={312} height={320} className="w-72 h-72" />
            <p className="font-bold">Tom Monrow</p>
            <p>Specialist</p>
            </div>

         </div>
        </div>

        {/* client */}
        
         <div>
         
          <div className="pt-7 ">
                        <h1 className="text-yellow-600 italic text-xl">Testimonials</h1>
                     </div>
         
                     <div className="ml-20 pt-2 text-3xl font-bold">
                         <h1>What our client are saying</h1>
                     </div>
         
                 
              <div className="w-full place-items-center pt-16"> 
                 <div className="inset-0"></div> 
                 <div className="w-1/2 h-88 bg-slate-200 text-black text-center place-items-center pt-32">
                 <div className="">
                 <Image src={"/images/clientimg.png"} alt="img" width={ 50} height={50}  /></div>
            
                <div className="flex gap-2">
                <LiaStarSolid className="text-yellow-600"/>
                <LiaStarSolid className="text-yellow-600"/>
                <LiaStarSolid className="text-yellow-600" />
                <LiaStarSolid className="text-yellow-600"/>
                <LiaStarSolid className="text-yellow-600"/>
                </div>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quaerat reprehenderit 
                     sapiente nam et atque soluta doloremque suscipit sed ratione provident minus magni ipsum cumque, aliquam veritatis, dignissimos laborum eaque!</p>
                      
                      <p className="text-center pt-16 font-bold text-xl">Alamin Hassan</p>
                      <p className="text-center pt-2">Food Specialist</p>
                    
                 </div>
             </div>
     </div>

     {/* our food */}
       <div className="mt-16 w-full h-auto text-center">
            <div className="place-content-center text-center w-full h-9 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("")`}}>
             
               <h1 className="text-3xl font-bold">Our Food Menu</h1>
               <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Consequuntur consectetur repellendus laborum</p>
            </div>
 
            <div className="w-auto flex flex-col sm:flex-col md:flex-col lg:flex-row justify-around items-center mt-20 font-semibold">
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


      <div className="flex flex-col lg:flex-row gap-x-4 gap-y-5 lg:gap-y-0">
            <div className="w-96 ml-20 mt-8">
             <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Alder Grilled Chinook Salmon</h3>
                <p>Toasted french bread topped with</p>
            
            </div>
            <div className="flex gap-x-6 lg:gap-x-96 pb-8 pl-20 text-gray-500">
                560 CAL
                <div className="text-yellow-600 font-bold">32$</div>
            </div>

             
            <div>
            <h3 className="text-xl text-yellow-500 font-bold pt-3 pb-1">Barries and creme tart</h3>
                <p>Gorgonzola. ricotta,mozzarelaa, teleggio</p>
            </div>
            <div className="flex gap-x-6 lg:gap-x-96 pb-8 pl-20 text-gray-500">
                700 CAL
                <div className="text-yellow-600 font-bold">32$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Tormentoso Bush Pizza Pintoage</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
            </div> 
             <div className="flex gap-x-6 lg:gap-x-96 pb-8 pl-20 text-gray-500">
                1000 CAL
                <div className="text-yellow-600 font-bold">43$</div>
            </div>

             <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Spicy Vegan Potato Curry</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8 pl-20">
                1000 CAL
                <div className="text-yellow-600 font-bold">14$</div>
            </div>
            </div>


             {/*sec lidt div  */}
             <div className="w-96 ml-32 mt-8">
             <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Alder Grilled Chinook Salmon</h3>
                <p>Toasted french bread topped with</p>
            
            </div>
            <div className="flex gap-x-6 lg:gap-x-96 pb-8 pl-20 text-gray-500">
                560 CAL
                <div className="text-yellow-600 font-bold">32$</div>
            </div>

             
            <div>
            <h3 className="text-xl text-yellow-500 font-bold pt-3 pb-1">Barries and creme tart</h3>
                <p>Gorgonzola. ricotta,mozzarelaa, teleggio</p>
            </div>
            <div className="flex gap-x-6 lg:gap-x-96 pb-8 pl-20 text-gray-500">
                700 CAL
                <div className="text-yellow-600 font-bold">32$</div>
            </div>

            <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Tormentoso Bush Pizza Pintoage</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
            </div> 
             <div className="flex gap-x-6 lg:gap-x-96 pb-8 pl-20 text-gray-500">
                1000 CAL
                <div className="text-yellow-600 font-bold">43$</div>
            </div>

             <div>
            <h3 className="text-xl font-bold pt-3 pb-1">Spicy Vegan Potato Curry</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
            </div>
            <div className="text-gray-500 flex gap-x-6 lg:gap-x-96 pb-8 pl-20">
                1000 CAL
                <div className="text-yellow-600 font-bold">14$</div>
            </div>
            </div>
            </div>  

            {/* button */}
          <Link href="/OurMenu">
            <button className="px-9 py-3 mt-5 border border-yellow-600 mb-5 text-sm font-medium bg-white  rounded text-yellow-600 hover:bg-white-600">
            View Menu
          </button>
          </Link>    
 
        </div>
     </div>
  </div>
  );
};