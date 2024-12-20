"use client";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const [valid, setValid] = useState(false);
  const [digit, setDigit] = useState("");
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(digit);
    if (digit === "1234") {
      window.location.href = "/main";
    } else {
      setValid(true);
    }
  };

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
        <form onSubmit={handleLogin} className="place-items-center space-y-5">
          <Input
            type="text"
            variant="bordered"
            color="warning"
            label="EX: 1234"
            isInvalid={valid}
            errorMessage={"Invalid Digit"}
            value={digit}
            onChange={(e) => setDigit(e.target.value)}
            className="max-w-xs text-white text-center"
          />
          <Button
            radius="lg"
            size="lg"
            type="submit"
            onClick={() => handleLogin}
            className="bg-[#F26457] text-white shadow-lg font-semibold"
          >
            Log In
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
