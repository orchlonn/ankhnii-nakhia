"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function PillCapsule() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.z = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0.3, 0, 0.5]}>
      {/* Top half - teal */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.8, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#0d9488" roughness={0.3} metalness={0.15} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.5, 32]} />
        <meshStandardMaterial color="#0d9488" roughness={0.3} metalness={0.15} />
      </mesh>

      {/* Bottom half - white */}
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry
          args={[0.8, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]}
        />
        <meshStandardMaterial color="#f0fdfa" roughness={0.2} metalness={0.05} />
      </mesh>
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.5, 32]} />
        <meshStandardMaterial color="#f0fdfa" roughness={0.2} metalness={0.05} />
      </mesh>

      {/* Dividing ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.81, 0.025, 8, 48]} />
        <meshStandardMaterial color="#99f6e4" roughness={0.5} metalness={0.1} />
      </mesh>
    </group>
  );
}
