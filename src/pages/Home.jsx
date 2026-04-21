import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-3 gap-6">
        {/* WOMENS */}
        <Link to="/category/womens">
          <div className="cursor-pointer">
            <img
              src="https://store.figma.com/cdn/shop/products/Figma-Store-1096_1000x.jpg"
              className="rounded-2xl h-64 w-full object-cover"
            />

            <p className="text-xs mt-2 text-gray-500">CATEGORY</p>

            <p className="font-medium">WOMENS</p>
          </div>
        </Link>

        {/* ACCESSORIES */}
        <Link to="/category/accessories">
          <div className="cursor-pointer">
            <img
              src="https://store.figma.com/cdn/shop/products/figma-store_dress-code-hat_01_1000x.png"
              className="rounded-2xl h-64 w-full object-cover"
            />

            <p className="text-xs mt-2 text-gray-500">CATEGORY</p>

            <p className="font-medium">ACCESSORIES</p>
          </div>
        </Link>

        {/* MENS */}
        <Link to="/category/mens">
          <div className="cursor-pointer">
            <img
              src="https://store.figma.com/cdn/shop/products/Figma-Store-3814_1000x.jpg"
              className="rounded-2xl h-64 w-full object-cover"
            />

            <p className="text-xs mt-2 text-gray-500">CATEGORY</p>

            <p className="font-medium">MENS</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
