import Link from "next/link";

import { FaAngleRight } from "react-icons/fa";


export default function OurChef() {
    const chefs = [
        { id: 1, name: "Tahmina Rumi", role: "Chef", image: "/images/chefcard1.jpeg" },
        { id: 2, name: "Jorina Begum", role: "Chef", image: "/images/chefcard2.jpeg" },
        { id: 3, name: "M.Mohammad", role: "Chef", image: "/images/team chef.jpeg" },
        { id: 4, name: "Munna Kathy", role: "Chef", image: "/images/chefcard4.jpeg" },
        { id: 5, name: "Bisnu Devgon", role: "Chef", image: "/images/chefcard5.jpeg" },
        { id: 6, name: "Motin Molladf", role: "Chef", image: "/images/chefcard6.jpeg" },
        { id: 7, name: "William Rumi", role: "Chef", image: "/images/chefcard7.jpeg" },
        { id: 8, name: "Kets William Roy", role: "Chef", image: "/images/chefcard8.jpeg" },
        { id: 9, name: "Mahmud Khoill", role: "Chef", image: "/images/chefcard9.jpeg" },
        { id: 10, name: "Ataur Rahman", role: "Chef", image: "/images/chefcard10.jpeg" },
        { id: 11, name: "Monalisa Holly", role: "Chef", image: "/images/chefcard11.jpeg" },
        { id: 12, name: "Monalisa Holly", role: "Chef", image: "/images/chefcard12.jpeg" },
      ];
      

    return(
        <div className="w-full h-auto">
  
          {/* hero sec of chef page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Our Chef</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/Chef" className="text-yellow-600">chef</Link>
            </div>
            </div>
           
        </div>
       {/* card sec */}
 <div className="container mx-auto px-4 py-10">
  
      <h1 className="text-3xl font-bold text-center mb-10">Meet Our Chefs</h1>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{chef.name}</h2>
              <p className="text-gray-500">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

 </div> 
  );
}; 