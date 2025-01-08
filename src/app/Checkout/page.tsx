import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { FaArrowRight} from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";



export default function checkout() {
    return(
        <div className="w-full h-auto">
  
          {/* hero sec of checkout page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Check Out</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/Checkout" className="text-yellow-600">Check Out</Link>
            </div>
            </div>
           
        </div>
  <div className="mx-auto px-4 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* left shipping address */}
        <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text"
                     placeholder="First Name"
                      className="p-3 border rounded w-full" />

                     <input type="text"
                     placeholder="Last Name"
                      className="p-3 border rounded w-full" />
                
                <input type="email"
                     placeholder="Email Address"
                      className="p-3 border rounded w-full" />

                  <input type="text"
                     placeholder="Phone number"
                      className="p-3 border rounded w-full" />

                    <input type="text"
                     placeholder="Company"
                      className="p-3 border rounded w-full" />

                      <select className="p-3 border rounded w-full" defaultValue="">
                            <option value="" disabled>
                                Choose Country
                            </option>
                            <option>Pakistan</option>
                            <option>USA</option>
                      </select>

                      <select className="p-3 border rounded w-full" defaultValue="">
                            <option value="" disabled>
                                Choose City
                            </option>
                            <option>Karachi</option>
                            <option>Lahore</option>
                      </select>                    

                     <input type="text"
                     placeholder="Zip code"
                      className="p-3 border rounded w-full" />
                
                <div>
                    <input type="text" 
                    placeholder="Address 1"
                    className="p-3 border rounded w-full" />
                 </div>

                 <div>
                    <input type="text" 
                    placeholder="Address 2"
                    className="p-3 border rounded w-full" />
                 </div>
  


     </div>
         {/* billing  */}

         <h2 className="text-xl mt-12 font-bold">Billing Address</h2>
         <div className="flex items-center gap-2 mt-1">
            
            <input type="checkbox" id="same-address" />
            <h2 className="text-gray-700">same as shipping address</h2>
            
         </div>


         {/* buttons */}
    <div className="flex mt-3 gap-4">
        <button className="text-gray-600 py-2 px-40 border flex border-gray-700">
            < MdKeyboardArrowLeft className="mt-1" />
            Back to cart
        </button>
        <button type="submit" className="bg-yellow-600 flex gap-2 text-white py-2 px-32" >
            Proceed to shipping
            < MdKeyboardArrowRight className="mt-1" />
        </button>

    </div>
  </form>
 </div>


        {/* right section */}
            <div className="mt-5 border border-gray-400">
               <div className="flex gap-3 mt-3 pl-4">
                   <Image src={"/images/menuimg3.png"} alt="tikka" width={100} height={100} />
                   <div>
                       <h1 className="font-bold text-xl">Chicken Tikka Kabbab</h1>
                       <p className="text-gray-700 pt-4">150 gm net</p>
                        <p className="text-gray-700 pt-4">50$</p>
                   </div>
              </div>

                 <div className="flex gap-3 mt-3 pl-4">
                     <Image src={"/images/menuimg3.png"} alt="tikka" width={100} height={100} />
                     <div>
                       <h1 className="font-bold text-xl">Chicken Tikka Kabbab</h1>
                        <p className="text-gray-700 pt-4">150 gm net</p>
                        <p className="text-gray-700 pt-4">50$</p>
                    </div>
                </div>

                   <div className="flex gap-3 mt-3 pl-4">
                        <Image src={"/images/menuimg3.png"} alt="tikka" width={100} height={100} />
                     <div>
                        <h1 className="font-bold text-xl">Chicken Tikka Kabbab</h1>
                        <p className="text-gray-700 pt-4">150 gm net</p>
                          <p className="text-gray-700 pt-4">50$</p>
                     </div>
                  </div>

       {/* price details */}
                      <div className="flex justify-between text-gray-600 pr-3 pt-6 pl-3">
                            <span>Subtotal</span>
                              <span>130$</span>
                       </div>

                       <div className="flex justify-between text-gray-600 pr-3 pt-6 pl-3">
                            <span>Shipping</span>
                            <span>free</span>
                      </div>

                         <div className="flex justify-between text-gray-600 pr-3 pt-6 pl-3">
                            <span>Discount</span>
                              <span>25%</span>
                         </div>
                          <div className="flex justify-between text-gray-600 pr-3 pt-6 pl-3">
                            <span>Tax</span>
                                 <span>54.76$</span>
                          </div>

                          <div className="flex justify-between font-semibold pr-3 pt-6 pl-3">
                                <span>Total</span>
                               <span>432.65$</span>
                           </div>

                              <button type="submit" className="flex gap-3 bg-yellow-600 text-white py-2 px-32 rounded ml-5 mb-3">
                               Place an order
                             < FaArrowRight className="mt-2" />
                              </button>
                              
                              </div>

                        </div>
                </div>

        </div>
    );
};