"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

function Model() {
  const mesh = useRef<any>(null);
  const { scene } = useGLTF("/models/robo/robo.gltf"); // ← update path if needed

  // Auto-rotate anti-clockwise (negative Y rotation)
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y -= delta * 0.15; // adjust 0.25 → speed (radians/sec)
    }
  });

  return (
    <primitive ref={mesh} object={scene} scale={25} position={[0.5, -3, 0]} />
  );
}

export default function ThreeDHero() {
  return (
    <div className="h-screen w-full bg-black relative">
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />

        {/* 3D Model */}
        <Model />

        {/* Environment lighting */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
