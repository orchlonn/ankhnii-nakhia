"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Molecule({
  orbitRadius,
  speed,
  yOffset,
  color,
}: {
  orbitRadius: number;
  speed: number;
  yOffset: number;
  color: string;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed;
      ref.current.position.x = Math.cos(t) * orbitRadius;
      ref.current.position.z = Math.sin(t) * orbitRadius;
      ref.current.position.y = yOffset + Math.sin(t * 2) * 0.3;
      ref.current.rotation.y += 0.02;
      ref.current.rotation.x += 0.01;
    }
  });

  const bondPositions: [number, number, number][] = [
    [0.22, 0, 0],
    [-0.22, 0, 0],
    [0, 0.22, 0],
    [0, 0, 0.22],
  ];

  return (
    <group ref={ref}>
      {/* Central atom */}
      <mesh>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Bonded atoms */}
      {bondPositions.map((pos, i) => (
        <group key={i}>
          <mesh position={pos}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color="#ccfbf1"
              opacity={0.8}
              transparent
              roughness={0.4}
            />
          </mesh>
          {/* Bond line */}
          <mesh
            position={[pos[0] / 2, pos[1] / 2, pos[2] / 2]}
            rotation={
              pos[0] !== 0
                ? [0, 0, Math.PI / 2]
                : pos[2] !== 0
                  ? [Math.PI / 2, 0, 0]
                  : [0, 0, 0]
            }
          >
            <cylinderGeometry args={[0.01, 0.01, 0.18, 4]} />
            <meshStandardMaterial
              color="#99f6e4"
              opacity={0.6}
              transparent
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function FloatingMolecules() {
  return (
    <group>
      <Molecule orbitRadius={2.5} speed={0.4} yOffset={0.5} color="#0d9488" />
      <Molecule orbitRadius={3.0} speed={0.25} yOffset={-0.8} color="#10b981" />
      <Molecule orbitRadius={2.0} speed={0.5} yOffset={1.2} color="#0f766e" />
    </group>
  );
}
