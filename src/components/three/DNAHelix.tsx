"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const helixData = useMemo(() => {
    const points: {
      pos1: [number, number, number];
      pos2: [number, number, number];
    }[] = [];
    const count = 24;
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 4;
      const y = (i / count) * 5 - 2.5;
      const radius = 0.5;
      points.push({
        pos1: [Math.cos(t) * radius, y, Math.sin(t) * radius],
        pos2: [
          Math.cos(t + Math.PI) * radius,
          y,
          Math.sin(t + Math.PI) * radius,
        ],
      });
    }
    return points;
  }, []);

  return (
    <group ref={groupRef} position={[-2.5, 0, -1]} scale={0.55}>
      {helixData.map((pair, i) => (
        <group key={i}>
          {/* Strand 1 node */}
          <mesh position={pair.pos1}>
            <sphereGeometry args={[0.08, 10, 10]} />
            <meshStandardMaterial color="#0d9488" roughness={0.4} />
          </mesh>
          {/* Strand 2 node */}
          <mesh position={pair.pos2}>
            <sphereGeometry args={[0.08, 10, 10]} />
            <meshStandardMaterial color="#10b981" roughness={0.4} />
          </mesh>
          {/* Connecting rung every 2nd pair */}
          {i % 2 === 0 && <Rung from={pair.pos1} to={pair.pos2} />}
        </group>
      ))}
    </group>
  );
}

function Rung({
  from,
  to,
}: {
  from: [number, number, number];
  to: [number, number, number];
}) {
  const midpoint: [number, number, number] = [
    (from[0] + to[0]) / 2,
    (from[1] + to[1]) / 2,
    (from[2] + to[2]) / 2,
  ];

  const dir = new THREE.Vector3(
    to[0] - from[0],
    to[1] - from[1],
    to[2] - from[2]
  );
  const length = dir.length();
  dir.normalize();

  const quaternion = new THREE.Quaternion();
  quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);

  return (
    <mesh position={midpoint} quaternion={quaternion}>
      <cylinderGeometry args={[0.015, 0.015, length, 4]} />
      <meshStandardMaterial
        color="#ccfbf1"
        opacity={0.5}
        transparent
        roughness={0.6}
      />
    </mesh>
  );
}
