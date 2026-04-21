import { Link } from "react-router-dom";

import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b">
      {/* LEFT */}
      <div className="flex gap-3">
        <Link to="/category/mens">
          <button className="border px-4 py-1 rounded-full text-sm">
            SHOP
          </button>
        </Link>

        <button className="border px-4 py-1 rounded-full text-sm">ABOUT</button>

        <Search
          className="cursor-pointer"
          size={18}
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      {/* CENTER */}
      <Link to="/">
        <h1 className="font-semibold tracking-wide cursor-pointer">
          THE FIGMA STORE
        </h1>
      </Link>

      {/* RIGHT */}
      <div className="flex gap-3">
        <select className="border px-3 py-1 rounded-full text-sm">
          <option>United States</option>
          <option>India</option>
          <option>UK</option>
        </select>

        <button className="border px-4 py-1 rounded-full text-sm">
          CART 0
        </button>
      </div>
    </div>
  );
};

export default Header;
