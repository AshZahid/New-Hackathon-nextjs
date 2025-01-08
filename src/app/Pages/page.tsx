import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";


export default function Pages() {
    return(
        <div className="w-full h-auto bg-black text-white">
  
          {/* hero sec of pages page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>More Pages</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/OurMenu" className="text-yellow-600">Pages</Link>
            </div>
            </div>
           
        </div>
        <div className="w-full text-center font-bold text-3xl">
            <h2>Here Are More PAges For You</h2>
        </div>

        < div className="flex flex-col pl-20 font-bold underline  text-xl pt-5 space-y-5">
          <Link href="/ShoppingCart" className="hover:text-yellow-600">Shopping Cart</Link>
          <Link href="/BlogDetails" className="hover:text-yellow-600">Blog Details</Link>
          <Link href="/OurChef" className="hover:text-yellow-600">Meet Our Chefs</Link>
          <Link href="/FAQ" className="hover:text-yellow-600">FAQ</Link>
          <Link href="/Checkout" className="hover:text-yellow-600">Check Out</Link>
          <Link href="/Signup" className="hover:text-yellow-600">Sign Up</Link>
          <Link href="/Signin" className="hover:text-yellow-600">Sign In</Link>
          <Link href="/Error" className="hover:text-yellow-600">Click here for more</Link>
        </div>

   </div>
  );
};