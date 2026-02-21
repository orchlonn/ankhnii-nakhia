"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import PillCapsule from "./PillCapsule";
import DNAHelix from "./DNAHelix";
import FloatingMolecules from "./FloatingMolecules";
import FloatingParticles from "./FloatingParticles";

export default function PharmacyScene() {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px]">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.8}
            color="#ccfbf1"
          />
          <pointLight position={[-3, -3, 2]} intensity={0.4} color="#10b981" />
          <pointLight position={[3, 2, -2]} intensity={0.2} color="#5eead4" />

          {/* Main pill capsule with floating animation */}
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
            <PillCapsule />
          </Float>

          {/* DNA helix strand */}
          <DNAHelix />

          {/* Orbiting molecules */}
          <FloatingMolecules />

          {/* Ambient particles */}
          <FloatingParticles />

          {/* Interactive controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
