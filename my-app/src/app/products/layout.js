import ProductsBanner from "@/components/products/Banner";

const ProductLayout = ({ children }) => {
  return (
    <div>
      <ProductsBanner />
      {children}
    </div>
  );
};

export default ProductLayout;
