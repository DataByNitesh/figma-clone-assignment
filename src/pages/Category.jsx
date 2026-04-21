import { useParams, Link } from "react-router-dom";
import data from "../data/Product.json";

const Category = () => {
  const { type } = useParams();

  const products = data.product[0][type];

  if (!products) {
    return <h1 className="p-10">Category not found</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-10">
        CATEGORY {type.toUpperCase()}
      </h2>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div className="cursor-pointer">
              {/* IMAGE */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="mt-3 text-sm">
                <p className="text-gray-500">New!</p>
                <p className="font-medium">{item.title}</p>

                <div className="flex justify-between text-gray-600">
                  <span>Rs.</span>
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Category;
