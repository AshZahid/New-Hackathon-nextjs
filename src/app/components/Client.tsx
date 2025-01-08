import Image from "next/image";


export default function Client(){
    return(
        <div className="w-full h-full bg-black text-white">
            <div className="pt-12 lg:pt-7 ml-2 lg:ml-20">
               <h1 className="text-yellow-600 italic text-xl">Testimonials</h1>
            </div>

            <div className="text-sm sm:text-xl lg:text-3xl lg:ml-20 pt-2 font-bold">
                <h1>What our client are saying</h1>
            </div>

        
       <div className="w-full lg:place-items-center pt-16"> 
        <div className="inset-0"></div> 
        <div className="w-1/2 h-88 bg-white text-black text-center place-items-center pt-32">
        <div className="">
        <Image src={"/images/clientimg.png"} alt="img" width={ 50} height={50}  /></div>
   
       
        <p className="text-sm sm:text-base lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quaerat reprehenderit 
            sapiente nam et atque soluta doloremque suscipit sed ratione provident minus magni ipsum cumque, aliquam veritatis, dignissimos laborum eaque!</p>
             
             <p className="lg:text-center pt-16 font-bold text-xl">Alamin Hassan</p>
             <p className="lg:text-center pt-2">Food Specialist</p>
           
        </div>
    </div>
    
         
  </div>
  );
};