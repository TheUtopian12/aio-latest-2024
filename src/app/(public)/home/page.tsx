import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const backgroundImage = "/poster/M1.png";
const Home = () => {
  return (
    <section
      className="bg-black h-screen relative flex justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Hace que la imagen cubra toda el área sin distorsionarse
        backgroundPosition: "center", // Centra la imagen en el fondo
        backgroundRepeat: "no-repeat", // Evita que la imagen se repita
      }}
    >
      <div className="absolute bg-black w-full h-full bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center absolute bottom-20">
        <div className="max-w-md">
          <section className="flex justify-center items-center">
            <Image
              src={"/aio-logo_v2.svg"}
              alt="aio logo"
              priority
              width={100}
              height={100}
            />
          </section>
          <p className="my-5 text-xl font-bold text-white">
            Enjoy the Best <span className="text-[#F26457]">Movies</span> and{" "}
            <span className="text-[#F26457]">TV Shows</span>
          </p>
          <Link href={"/login"}>
            <Button
              radius="lg"
              size="lg"
              className="bg-[#F26457] text-white shadow-lg font-semibold"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
