import React from "react";
import GridMovies from "@/components/trendingMovies/GridMovies";
const TrendingMovies = async ({
  params,
}: {
  params: { categoryId: string };
}) => {
  const param = { categoryId: params.categoryId };

  return (
    <div className="w-full h-max">
      <GridMovies param={param} />
    </div>
  );
};

export default TrendingMovies;
