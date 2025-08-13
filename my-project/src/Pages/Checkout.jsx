import React, {useState} from "react";

export default function Checkout() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        zip :"",
        CardName: "",
        CardNumber: "",
        expiry: "",
        cvv: "",
        shipping: "standard",
        discount: "",
    });

    const [discountApplied, setDiscountApplied] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleDiscount = () => {
        if (formData.discount.trim().toLowerCase() === "save10") {
            setDiscountApplied(true);
            alert("Discount Applied: 10% off");
        } else {
            alert("Invalid Discount Code");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Checkout completed (Demo Only)");
    };

    const subtotal = 35.0;
    const discount = discountApplied ? subtotal  * 0.1 : 0;
    const shipping = formData.shipping === "express" ? 10 : 0;
    const total = subtotal - discount + shipping;

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-6">
            {/* PROGRESS INDICATOR */}
            <div className="w-full max-w-4xl mb-6">
                <div className="flex items-center justify-between text-white text-sm">
                    <span className= "flex-1 text-center border-b-2 border-blue-500 pb-2">Cart</span>
                     <span className= "flex-1 text-center border-b-2 border-blue-500 pb-2">Checkout</span>
                      <span className= "flex-1 text-center text-red-300 border-b-2 border-gray-700 pb-2">Complete</span>
                </div>
            </div>

            <div className="w-full max-w-6xl bg-gray-900 rounded-2xl shadow-xl p-6 md:p-10 text-white grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* MAIN FORM */}
                <div className="md:col-span-2">
                    <h1 className="text-3xl font-bold mb-6 text-center">Ckeckout</h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* BILLING DETAILS */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>                            
        
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/> 

                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Street Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                     className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>                                                         

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                         className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>

                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="ZIP Code"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    required
                                     className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>                                                                                          
                                </div>
                            </div>
                        </div>

                        {/* PAYMENT DETAILS */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="cardName"
                                    placeholder="Name on Card"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                    required
                                     className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>

                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={formData.cardNumber} 
                                    onChange={handleChange}
                                    required
                                     className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>


                                 <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="expiry"
                                        placeholder="MM/YY"
                                        value={formData.expiry}
                                        onChange={handleChange}
                                        required
                                         className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>


                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        required
                                         className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>                                                        
                                    </div>                                            
                            </div>
                        </div>

                        {/* SHIPPING METHOD */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="shipping"
                                        value="standard"
                                        checked={formData.shipping === "standard"}
                                        onChange={handleChange}
                                        className="text-blue-500 cursor-pointer"/>
                                        Standard (Free, 5-7 days)
                                </label>

                                <label className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="shipping"
                                        value="express"
                                        checked={formData.shipping === "express"}
                                        onChange={handleChange}
                                        className="text-blue-500 cursor-pointer"/>
                                        Express (Rs.3000 2-3 days)
                                </label>
                            </div>
                        </div>

                        {/* DISCOUNT CODE */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Discount Code</h2>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    name="discount"
                                    placeholder="Enter Code"
                                    value={formData.discount}
                                    onChange={handleChange}
                                     className="w-full p-3 border border-gray-700 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"/>

                            <button 
                            type="button"
                            onClick={handleDiscount}
                            className="bg-[#e76f51] px-4 rounded-lg hover:bg-[#d45d43] transition hover:text-black-300 cursor-pointer">
                                Apply
                            </button>               
                            </div>                          
                        </div>                       
                    </form>
                </div>

                {/* ORDER SUMMARY */}
                <div className="sticky top-6 self-start bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-3">

                        <div className="flex justify-between items-center">
                             <span>Product 1</span>
                            <span>Rs.6000</span>
                        </div>

                        <div className="flex justify-between itemms-center">
                            <span>Product 2</span>
                            <span>Rs.4500</span>
                        </div>

                        <hr className="border-gray-700 my-2"/>
                        <div className="flex justify-between">
                            <span>Sub Total</span>
                            <span>Rs.{subtotal.toFixed(2)}</span>
                        </div>

                       {discountApplied && (
              <div className="flex justify-between text-green-400">
                <span>Discount</span>
                <span>- Rs.{discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Rs.{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>Rs.{total.toFixed(2)}</span>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-6 w-full bg-[#e76f51] text-white py-3 rounded-lg font-semibold hover:bg-[#d45d43] transition hover:text-black-300 cursor-pointer"
          >
            Complete Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
