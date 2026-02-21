"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const tablets = [
  { pos: [2.2, 1.2, -0.5] as const, rot: [0.8, 0.3, 1.2] as const, scale: 0.3, color: "#0d9488", speed: 1.2 },
  { pos: [-1.8, -1.5, 0.5] as const, rot: [1.5, 0.7, 0.3] as const, scale: 0.25, color: "#10b981", speed: 1.8 },
  { pos: [1.5, -1.8, -1] as const, rot: [0.3, 1.2, 0.8] as const, scale: 0.2, color: "#14b8a6", speed: 1.4 },
  { pos: [-2.3, 0.8, -0.8] as const, rot: [1.0, 0.5, 1.5] as const, scale: 0.28, color: "#0f766e", speed: 1.6 },
  { pos: [2.5, -0.5, 0.8] as const, rot: [0.5, 1.8, 0.4] as const, scale: 0.22, color: "#2dd4bf", speed: 2.0 },
];

function MiniTablet({
  position,
  rotation,
  scale,
  color,
  speed,
}: {
  position: readonly [number, number, number];
  rotation: readonly [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5;
      ref.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <group
        ref={ref}
        position={position as unknown as THREE.Vector3Tuple}
        rotation={rotation as unknown as THREE.EulerTuple}
        scale={scale}
      >
        {/* Tablet body */}
        <mesh>
          <cylinderGeometry args={[1, 1, 0.3, 24]} />
          <meshStandardMaterial
            color="#f8fafc"
            roughness={0.35}
            metalness={0.05}
          />
        </mesh>
        {/* Color accent on top */}
        <mesh position={[0, 0.16, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.01, 24]} />
          <meshStandardMaterial
            color={color}
            roughness={0.3}
            metalness={0.1}
            opacity={0.6}
            transparent
          />
        </mesh>
        {/* Score line */}
        <mesh position={[0, 0.16, 0]}>
          <boxGeometry args={[1.8, 0.015, 0.03]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export default function SmallTablets() {
  return (
    <group>
      {tablets.map((t, i) => (
        <MiniTablet
          key={i}
          position={t.pos}
          rotation={t.rot}
          scale={t.scale}
          color={t.color}
          speed={t.speed}
        />
      ))}
    </group>
  );
}
