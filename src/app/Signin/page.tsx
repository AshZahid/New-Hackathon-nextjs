import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


export default function Signin() {
    return(
        <div className="w-full h-auto bg-black text-white">
  
          {/* hero sec of signin page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Sign in page</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/Signin" className="text-yellow-600">Sign in</Link>
            </div>
            </div>
           
        </div>

        {/* signup sec */}
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>

                       {/* iput fields  */}
                       <form className="space-y-4">
                       

                        <div className="flex gap-3">
                          <MdOutlineEmail className="text-slate-900 mt-1 h-8" />       
                        <input type="email" placeholder="Email" className="w-full text-slate-900 px-3 py-2 border rounded-md" />

                        </div>

                        <div className="flex gap-3">
                        <CiLock className="text-slate-900 mt-1 h-8" />  
                        <input type="password" placeholder="Password" className="w-full text-slate-900 px-3 py-2 border rounded-md" />

                        </div>
                        {/* remember me */}
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="text-yellow-700 rounded" />
                              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me?</label>
                        </div>
                        {/* button */}
                        <button type="submit" className="w-full bg-yellow-700 text-white font-medium py-2">
                            Sign Up
                        </button>

                        {/* forget Password */}
                        <div className="text-right mt-2">
                            <a href="#" className="text-sm text-gray-500 hover:underline">Forget password?</a>
                        </div>
                       </form>

                       {/* divider */}
                       <div className="relative flex py-5 items-center">
                         <div className="flex-grow border-t border-gray-300"></div>
                         <span className="flex-shrink mx-4 text-sm text-gray-500">OR</span>
                         <div className="flex-grow border-t border-gray-300"></div>
                       </div>

                       {/* google */}

                      <div className="space-y-3">
                        <button className="w-full flex items-center justify-center gap-12 border py-2 text-gray-500 hover:bg-gray-100">
                            <FaGoogle />
                            Sign up with Google
                        </button>

                        <button className="w-full flex items-center justify-center gap-12 border py-2 text-gray-500 hover:bg-gray-100">
                            <FaApple />
                            Sign up with Apple
                        </button>
                      </div>
            </div>
        </div>

  </div>
 );
};