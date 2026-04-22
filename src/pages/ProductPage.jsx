import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/Product.json";

// 🔥 flatten your JSON correctly
const allProducts = [
  ...data.product[0].mens,
  ...data.product[0].womens,
  ...data.product[0].accessories,
];

const ProductPage = () => {
  const { id } = useParams();

  const product = allProducts.find((p) => Number(p.id) === Number(id));

  if (!product) return <h1 className="p-10">Product not found</h1>;

  const [mainImage, setMainImage] = useState(product.thumbnail);
  const [quantity, setQuantity] = useState(product.quantity);
  const [showForm, setShowForm] = useState(false);
  const [selectedSize, setSelectedSize] = useState("S");

  return (
    <div className="grid grid-cols-[100px_1fr_1fr] gap-10 p-10 max-w-7xl mx-auto">
      {/* LEFT - THUMBNAILS */}
      <div className="flex flex-col gap-3">
        {[product.thumbnail, ...product.images].map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setMainImage(img)}
            className={`w-16 h-20 object-cover rounded-lg cursor-pointer border transition ${
              mainImage === img
                ? "border-black"
                : "border-transparent opacity-60"
            }`}
          />
        ))}
      </div>

      {/* CENTER - MAIN IMAGE */}
      <div>
        <img src={mainImage} className="w-full rounded-3xl object-cover" />
      </div>

      {/* RIGHT - DETAILS */}
      <div className="flex flex-col gap-6">
        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs w-fit">
          LAYERS
        </span>

        <h1 className="text-3xl font-bold">{product.title}</h1>

        {/* SIZE SELECT */}
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity((q) => Math.max(0, q - 1))}
            className="w-9 h-9 border rounded-full flex items-center justify-center"
          >
            -
          </button>

          <span className="text-lg font-medium">{quantity}</span>

          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-9 h-9 border rounded-full flex items-center justify-center"
          >
            +
          </button>
        </div>

        {/* MAIN BUTTON */}
        <button
          disabled={quantity === 0}
          onClick={() => setShowForm(true)}
          className={`py-4 rounded-full font-semibold transition ${
            quantity === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-700 text-white hover:bg-black"
          }`}
        >
          {quantity === 0 ? "SOLD OUT" : "CONTACT"}
        </button>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* CONTACT FORM */}
        {showForm && (
          <form
            className="flex flex-col gap-3 mt-4"
            action={() => {
              alert("Form Submitted");
            }}
          >
            <input className="border p-2 rounded" placeholder="First Name" />

            <input className="border p-2 rounded" placeholder="Last Name" />

            <input
              type="email"
              className="border p-2 rounded"
              placeholder="Email Address"
            />

            <input className="border p-2 rounded" placeholder="Phone Number" />

            <input className="border p-2 rounded" placeholder="Address" />

            <button className="bg-black text-white py-3 rounded hover:bg-gray-800">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
