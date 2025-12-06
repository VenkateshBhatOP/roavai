// src/components/VideoHero.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function VideoHero() {
  return (
    <div className="relative">
      {/* Optional dark overlay only if you have text on top */}
      <div className="absolute inset-0 bg-black/30" />{" "}
      {/* remove this line if you don’t want overlay */}
      <img
        src="/images/0001.png"
        alt="vibrant hero"
        className="w-full h-screen object-cover 
               brightness-100 contrast-125 saturate-110   /* magic numbers */
               scale-105                                    /* tiny zoom = no blurry edges */"
      />
      {/* Your text / 3D model goes here */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-2xl">
          Your Title
        </h1>
      </div> */}
    </div>
  );
}
