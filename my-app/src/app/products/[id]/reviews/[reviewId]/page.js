"use client";

import { useParams } from "next/navigation";

const ProductReviewsByIdPage = () => {
  const params = useParams();

  const id = params.id;
  const reviewId = params.reviewId;

  console.log("productId:", id);
  console.log("reviewId:", reviewId);

  return (
    <>
      <div className="text-7xl">Product Reviews By Id Page</div>
      <h1 className="text-4xl"> Product of id:{id}</h1>
      <h2 className="text-4xl">Review Product id: {reviewId}</h2>
    </>
  );
};

export default ProductReviewsByIdPage;
