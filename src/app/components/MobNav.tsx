
import Link from "next/link";
import { Search } from 'lucide-react';
import { BsHandbag} from "react-icons/bs";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
    import { Menu } from 'lucide-react';


export default function MobNav(){

    return(
        <div className='bg-black text-white'>
        <div className="flex justify-start items-center pt-5 pl-8 font-bold text-2xl">
            <h1 className="text-yellow-600">Food</h1>
            <h1 className="">tuck</h1>
        </div>

        <div className="flex border border-yellow-600 rounded-full ml-2 w-40">
                 
                 <input className="bg-black text-white pl-3 " type="text" placeholder="Search..." />
                 <div className="mt-2 ml-3">
                 <Search />
               </div>
               <span className='ml-2'>
            < BsHandbag  />  
            </span> 
               </div>
            


            <Sheet>
  <SheetTrigger className=''>
    < Menu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
        
        <div className="flex justify-center items-center pt-5 font-bold text-2xl">
          <h1 className="text-yellow-600">Food</h1>
          <h1 className="">tuck</h1>
      </div>
      </SheetTitle>
      <SheetDescription>
      <div className="flex flex-col pl-10 mt-2 pb-2 items-center gap-6 bg-slate-800 text-white pt-3 inter.className">
            <Link className="hover:text-yellow-600" href="/menu">Menu</Link>
            <Link className="hover:text-yellow-600" href="/">Home</Link>
            <Link className="hover:text-yellow-600" href="/blog">Blog</Link>
            <Link className="hover:text-yellow-600" href="/pages">Pages</Link>
            <Link className="hover:text-yellow-600" href="/about">About</Link>
            <Link className="hover:text-yellow-600" href="/shop">Shop</Link>
            <Link className="hover:text-yellow-600" href="/contact">Contact</Link>
            </div>
         </SheetDescription> 
      </SheetHeader>
    </SheetContent>
  </Sheet>
 </div>
  );
}; 



