import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <section className="place-items-center space-y-10 w-96 h-max lg:w-[500px] py-16">
        <Image
          src={"/aio-logo_v2.svg"}
          alt="aio logo"
          priority
          width={100}
          height={100}
        />
        <p className=" text-xl font-bold text-white">Enter the 4-digit code</p>
        <Input
          type="text"
          variant="bordered"
          color="warning"
          label="EX: 1234"
          className="max-w-xs text-white"
        />
        <Button
          radius="lg"
          size="lg"
          className="bg-[#F26457] text-white shadow-lg font-semibold"
        >
          Log In
        </Button>
      </section>
    </div>
  );
};

export default Login;
