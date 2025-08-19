export default function Example() {
  return (
    <div className="font-[Poppins]">
      {/* Heading */}
      <h1 className="text-5xl font-semibold text-center mx-auto mt-25">About our Shop</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        RetailVibe is your go-to clothing store for curated styles across Women, Accessories, and Mens. 
        Each piece is carefully selected with intention, emotion, and style, ensuring quality and trendiness 
        for every wardrobe.
      </p>

      {/* Grid Section */}
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-16">
        <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FFE5B4]"></div>

        {/* Item 1 */}
        <div>
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
              alt="flash"
            />
          </div>
          <div className="mt-5 space-y-2 bg-blue-100 p-4 rounded hover:bg-pink-100 cursor-pointer">
            <h3 className="text-base font-medium text-slate-600">Fast Delivery</h3>
            <p className="text-sm text-slate-500">Quick and reliable delivery for all orders, so you get your favorite styles fast.</p>
          </div>
        </div>

        {/* Item 2 */}
        <div>
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
              alt="colors"
            />
          </div>
          <div className="mt-5 space-y-2 bg-blue-100 p-4 rounded hover:bg-pink-100 cursor-pointer">
            <h3 className="text-base font-medium text-slate-600">Trendy Styles</h3>
            <p className="text-sm text-slate-500">Beautifully curated collections for Women, Kids, and Accessories.</p>
          </div>
        </div>

        {/* Item 3 */}
        <div>
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
              alt="puzzle"
            />
          </div>
          <div className="mt-5 space-y-2 bg-blue-100 p-4 rounded hover:bg-pink-100 cursor-pointer">
            <h3 className="text-base font-medium text-slate-600">Easy Shopping</h3>
            <p className="text-sm text-slate-500">
              User-friendly website, making it simple to browse and shop your favorite products.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div>
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/bookEmoji.png"
              alt="book"
            />
          </div>
          <div className="mt-5 space-y-2 bg-blue-100 p-4 rounded hover:bg-pink-100 cursor-pointer">
            <h3 className="text-base font-medium text-slate-600 ">Clear Product Info</h3>
            <p className="text-sm text-slate-500">
              Detailed descriptions, size guides, and images to help you choose confidently.
            </p>
          </div>
        </div>

        {/* Item 5 */}
        <div>
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/boxEmoji.png"
              alt="box"
            />
          </div>
          <div className="mt-5 space-y-2 bg-blue-100 p-4 rounded hover:bg-pink-100 cursor-pointer">
            <h3 className="text-base font-medium text-slate-600 ">Flexible Options</h3>
            <p className="text-sm text-slate-500">
              Easily mix and match clothing and accessories to suit your style.
            </p>
          </div>
        </div>

        {/* Item 6 */}
        <div>
          <div className="size-10 p-2 bg-indigo-50 border border-indigo-200 rounded">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/brainEmoji.png"
              alt="brain"
            />
          </div>
          <div className="mt-5 space-y-2 bg-blue-100 p-4 rounded hover:bg-pink-100 cursor-pointer">
            <h3 className="text-base font-medium text-slate-600">Customer First</h3>
            <p className="text-sm text-slate-500">
             Dedicated support to ensure an inclusive and satisfying shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
