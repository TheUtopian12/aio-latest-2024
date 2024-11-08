import { Spinner } from "@nextui-org/react";
import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-[50%] left-[50%]">
      <Spinner label="Loading..." color="danger" labelColor="danger" />
    </div>
  );
};

export default Loader;
