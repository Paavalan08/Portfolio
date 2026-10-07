"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface Hero3DSceneProps {
  isMobile?: boolean;
}

// Deterministic Fibonacci sphere point generator for React 19 purity compliance
function createFibonacciSpherePositions(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = 2 * Math.PI * i / phi;

    const radialOffset = 2.4 + ((i * 7) % 10) * 0.22;

    positions[i * 3] = Math.cos(theta) * radiusAtY * radialOffset;
    positions[i * 3 + 1] = y * radialOffset;
    positions[i * 3 + 2] = Math.sin(theta) * radiusAtY * radialOffset;
  }

  return positions;
}

const DESKTOP_POSITIONS = createFibonacciSpherePositions(85);
const MOBILE_POSITIONS = createFibonacciSpherePositions(35);

export function Hero3DScene({ isMobile = false }: Hero3DSceneProps) {
  const coreRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const innerPolyRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const positions = useMemo(
    () => (isMobile ? MOBILE_POSITIONS : DESKTOP_POSITIONS),
    [isMobile]
  );

  useFrame((state, delta) => {
    // Smooth mouse responsiveness with damping
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 8;

    if (coreRef.current) {
      coreRef.current.rotation.y = THREE.MathUtils.damp(
        coreRef.current.rotation.y,
        coreRef.current.rotation.y + delta * 0.25 + targetX * 0.1,
        3,
        delta
      );
      coreRef.current.rotation.x = THREE.MathUtils.damp(
        coreRef.current.rotation.x,
        targetY * 0.3,
        3,
        delta
      );
    }

    // Rings rotating on different orbital axes
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.3;
      ring1Ref.current.rotation.x += delta * 0.15;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.25;
      ring2Ref.current.rotation.z += delta * 0.1;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.2;
      ring3Ref.current.rotation.y += delta * 0.15;
    }

    // Inner polyhedron gentle rotation
    if (innerPolyRef.current) {
      innerPolyRef.current.rotation.y += delta * 0.4;
      innerPolyRef.current.rotation.x -= delta * 0.2;
    }

    // Particle constellation slow drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[6, 8, 5]} intensity={2.2} color="#ffffff" />
      <directionalLight position={[-6, -4, -3]} intensity={1.0} color="#818cf8" />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#4f46e5" distance={6} />

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
        <group ref={coreRef} scale={isMobile ? 0.9 : 1.25}>
          {/* Inner Core Solid Facets */}
          <mesh ref={innerPolyRef}>
            <octahedronGeometry args={[1.05, 0]} />
            <meshStandardMaterial
              color="#4f46e5"
              roughness={0.2}
              metalness={0.7}
              emissive="#312e81"
              emissiveIntensity={0.35}
            />
          </mesh>

          {/* Core Wireframe Overlay for Architectural Feel */}
          <mesh>
            <octahedronGeometry args={[1.08, 0]} />
            <meshBasicMaterial
              color="#c7d2fe"
              wireframe
              transparent
              opacity={0.8}
            />
          </mesh>

          {/* Inner Small Energy Node */}
          <mesh>
            <sphereGeometry args={[0.35, 16, 16]} />
            <meshBasicMaterial color="#6366f1" />
          </mesh>

          {/* Orbiting Orbital Ring 1 */}
          <mesh ref={ring1Ref}>
            <torusGeometry args={[1.8, 0.02, 16, 64]} />
            <meshStandardMaterial
              color="#6366f1"
              emissive="#4338ca"
              emissiveIntensity={0.4}
              roughness={0.3}
            />
          </mesh>

          {/* Orbiting Orbital Ring 2 */}
          <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.1, 0.015, 16, 64]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#1d4ed8"
              emissiveIntensity={0.3}
              roughness={0.4}
            />
          </mesh>

          {/* Orbiting Orbital Ring 3 */}
          <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[2.35, 0.012, 16, 64]} />
            <meshStandardMaterial
              color="#818cf8"
              roughness={0.3}
              transparent
              opacity={0.7}
            />
          </mesh>

          {/* Orbiting Satellite Nodes */}
          <mesh position={[1.8, 0, 0]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshBasicMaterial color="#3b82f6" />
          </mesh>
          <mesh position={[-1.4, 1.2, 0.5]}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshBasicMaterial color="#6366f1" />
          </mesh>
          <mesh position={[0.6, -1.8, -0.8]}>
            <sphereGeometry args={[0.07, 12, 12]} />
            <meshBasicMaterial color="#a5b4fc" />
          </mesh>

          {/* Constellation Point Cloud */}
          <points ref={particlesRef}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
              />
            </bufferGeometry>
            <pointsMaterial
              size={isMobile ? 0.04 : 0.05}
              color="#6366f1"
              transparent
              opacity={0.65}
              sizeAttenuation
            />
          </points>
        </group>
      </Float>
    </>
  );
}
