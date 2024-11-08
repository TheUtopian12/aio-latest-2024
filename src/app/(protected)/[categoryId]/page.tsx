import GridMovies from "@/components/trendingMovies/GridMovies";
import React from "react";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  // Asegurarse de que params.categoryId está en el formato correcto
  const param = { categoryId: params.categoryId };

  return (
    <div className="w-full h-max">
      <GridMovies param={param} />
    </div>
  );
};

export default Category;
