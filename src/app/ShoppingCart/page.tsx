import Link from "next/link";
import { FaAngleRight} from "react-icons/fa";




export default function ShoppingCart() {

    
        const products = [
          { id: 1, name: "Burger", price: 55, quantity: 4, total: 220, image: "/images/foodimg2.png" },
          { id: 2, name: "Fresh Lime", price: 63, quantity: 1, total: 63, image: "/images/img1abt.png" },
          { id: 3, name: "Pizza", price: 105, quantity: 4, total: 420, image: "/images/blogimg1.png" },
          { id: 4, name: "Chocolate Muffin", price: 43, quantity: 2, total: 86, image: "/images/dessert.png" },
          { id: 5, name: "Cheese Butter", price: 15, quantity: 3, total: 45, image: "/images/img2abot.png" },
        ];
      

    return(
        <div>
              {/* hero sec of shopingcart page */}
           <div>
            <div className="place-content-center text-center w-full h-60 bg-cover bg-no-repeat bg-center" style={{backgroundImage:`url("/images/bgimg.png")`}}>
            <div className="text-white font-bold text-3xl">
                <h1>Shopping Cart</h1>
            </div>
            <div className="flex gap-2 justify-center mt-2">
                <Link href="/" className="text-white">Home</Link>
                < FaAngleRight className="text-white mt-1"/>
                <Link href="/ShoppingCart" className="text-yellow-600">Shopping Cart</Link>
            </div>
            </div>
           
        </div>

        {/* section 2 */}

        <div className="overflow-x-auto ml-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4">Remove</th>
            </tr>
            </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-4 flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded" />
                  {product.name}
                </td>
                <td className="p-4">${product.price.toFixed(2)}</td>
                <td className="p-4 flex items-center gap-2">
                  <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                  {product.quantity}
                  <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                </td>
                <td className="p-4">${product.total.toFixed(2)}</td>
                <td className="p-4">
                  <button className="text-red-500">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* Bottom Section */}
       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Coupon Code */}
        
        <div className="p-4 border rounded">
        <h3 className="font-semibold mb-4">Coupon Code</h3>
          <p className="text-sm text-gray-500 mb-4">
            Enter your coupon code below and apply it to get a discount.
            
          </p>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter coupon code"
          
          />
            <button className="w-full bg-yellow-500 text-white py-2 rounded">Apply</button>
        </div>
          {/* Total Bill */}
          
        <div className="p-4 border rounded">
          <h3 className="font-semibold mb-4">Total Bill</h3>
          <div className="flex justify-between mb-2">
            <span className="font-bold">Cart Subtotal:</span>
            <span>$205.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping Charge:</span>
            <span>$20.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total Amount:</span>
            <span>$225.00</span>
          </div>
          <button className="w-full bg-yellow-500 text-white py-2 rounded mt-4">
            Proceed to Checkout
          </button>
        </div>
      </div>
  </div>
  );
};