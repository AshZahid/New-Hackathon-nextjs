import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";


export default function Error() {
    return(
        <div className="w-full h-auto">
  
          {/* hero sec of error page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>404 Error</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/Error" className="text-yellow-600">404</Link>
            </div>
            </div>
           
        </div>

        {/* second sec */}
         <div className="mt-16 text-center">
            <h1 className="font-bold text-5xl text-yellow-600">404</h1>
            <p className="font-bold text-xl pt-5 pb-6">Oops! looks like something going wronf</p>
            <p>page Cannot be found! we will have it figured out in no time.<br/>Meanwhile, check out these fresh ideas.</p>
           
           <Link href="/">
            <button className="px-9 py-3 mt-6 mb-12 text-sm font-medium text-white  rounded bg-yellow-600 hover:bg-white hover:text-yellow-600">
            Go to home
          </button>
          </Link>
         </div>

     </div>
    );
}; 