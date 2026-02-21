"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Tablet() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0008) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.4, 0, 0.2]}>
      {/* Main tablet body - flat cylinder */}
      <mesh>
        <cylinderGeometry args={[1.1, 1.1, 0.35, 48]} />
        <meshStandardMaterial
          color="#f0fdfa"
          roughness={0.35}
          metalness={0.05}
        />
      </mesh>

      {/* Top rounded edge */}
      <mesh position={[0, 0.175, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.04, 12, 48]} />
        <meshStandardMaterial
          color="#e2e8f0"
          roughness={0.4}
          metalness={0.05}
        />
      </mesh>

      {/* Bottom rounded edge */}
      <mesh position={[0, -0.175, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[1.1, 0.04, 12, 48]} />
        <meshStandardMaterial
          color="#e2e8f0"
          roughness={0.4}
          metalness={0.05}
        />
      </mesh>

      {/* Score line - horizontal groove across top face */}
      <mesh position={[0, 0.18, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.0, 0.02, 0.04]} />
        <meshStandardMaterial
          color="#cbd5e1"
          roughness={0.6}
          metalness={0.0}
        />
      </mesh>

      {/* Embossed cross - vertical line */}
      <mesh position={[0, 0.185, 0]}>
        <boxGeometry args={[0.06, 0.01, 0.7]} />
        <meshStandardMaterial
          color="#0d9488"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Embossed cross - horizontal line */}
      <mesh position={[0, 0.185, 0]}>
        <boxGeometry args={[0.7, 0.01, 0.06]} />
        <meshStandardMaterial
          color="#0d9488"
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Subtle teal tint ring on top surface */}
      <mesh position={[0, 0.18, 0]}>
        <torusGeometry args={[0.75, 0.02, 8, 48]} />
        <meshStandardMaterial
          color="#0d9488"
          roughness={0.4}
          metalness={0.1}
          opacity={0.4}
          transparent
        />
      </mesh>
    </group>
  );
}
