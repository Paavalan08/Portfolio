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
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = (2 * Math.PI * i) / phi;
    const radialOffset = 2.6 + ((i * 7) % 9) * 0.18;

    positions[i * 3] = Math.cos(theta) * radiusAtY * radialOffset;
    positions[i * 3 + 1] = y * radialOffset;
    positions[i * 3 + 2] = Math.sin(theta) * radiusAtY * radialOffset;
  }

  return positions;
}

const DESKTOP_POSITIONS = createFibonacciSpherePositions(90);
const MOBILE_POSITIONS = createFibonacciSpherePositions(40);

export function Hero3DScene({ isMobile = false }: Hero3DSceneProps) {
  const coreRef = useRef<THREE.Group>(null);
  const outerPolyRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const elapsedRef = useRef(0);

  const positions = useMemo(
    () => (isMobile ? MOBILE_POSITIONS : DESKTOP_POSITIONS),
    [isMobile]
  );

  useFrame((state, delta) => {
    elapsedRef.current += delta;
    const t = elapsedRef.current;

    // Mouse damping interpolation
    const targetX = (state.pointer.x * Math.PI) / 5;
    const targetY = (state.pointer.y * Math.PI) / 7;

    if (coreRef.current) {
      coreRef.current.rotation.y = THREE.MathUtils.damp(
        coreRef.current.rotation.y,
        coreRef.current.rotation.y + delta * 0.22 + targetX * 0.1,
        3.5,
        delta
      );
      coreRef.current.rotation.x = THREE.MathUtils.damp(
        coreRef.current.rotation.x,
        targetY * 0.25,
        3.5,
        delta
      );
    }

    // Outer multifaceted polyhedron
    if (outerPolyRef.current) {
      outerPolyRef.current.rotation.y += delta * 0.35;
      outerPolyRef.current.rotation.x -= delta * 0.18;
    }

    // Inner glowing core pulse without THREE.Clock
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.5;
      const scale = 1 + Math.sin(t * 2) * 0.05;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    // Orbital Gyroscope rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.3;
      ring1Ref.current.rotation.x += delta * 0.12;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.22;
      ring2Ref.current.rotation.z += delta * 0.14;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.18;
      ring3Ref.current.rotation.y += delta * 0.16;
    }

    // Point cloud drift
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[6, 8, 5]} intensity={2.6} color="#ffffff" />
      <directionalLight position={[-6, -4, -3]} intensity={1.2} color="#ff9a8a" />
      <pointLight position={[0, 0, 0]} intensity={2.4} color="#ef4444" distance={7} />
      <pointLight position={[3, 3, 2]} intensity={1.5} color="#fb7185" distance={6} />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.7}>
        <group ref={coreRef} scale={isMobile ? 0.95 : 1.25}>
          {/* Main Translucent Glass Polyhedron */}
          <mesh ref={outerPolyRef}>
            <icosahedronGeometry args={[1.1, 0]} />
            <meshPhysicalMaterial
              color="#e84a4a"
              emissive="#9f2028"
              emissiveIntensity={0.3}
              roughness={0.15}
              metalness={0.4}
              clearcoat={1}
              clearcoatRoughness={0.1}
              transparent
              opacity={0.85}
            />
          </mesh>

          {/* Core Architectural Wireframe Cage */}
          <mesh>
            <icosahedronGeometry args={[1.14, 0]} />
            <meshBasicMaterial
              color="#ffe3dc"
              wireframe
              transparent
              opacity={0.75}
            />
          </mesh>

          {/* Inner Glowing Plasma Nucleus */}
          <mesh ref={innerCoreRef}>
            <octahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial
              color="#ff8b79"
              emissive="#e33b42"
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Orbital Gyroscope Ring 1 */}
          <mesh ref={ring1Ref}>
            <torusGeometry args={[1.9, 0.022, 16, 72]} />
            <meshStandardMaterial
              color="#ef4444"
              emissive="#b91c2c"
              emissiveIntensity={0.4}
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>

          {/* Orbital Gyroscope Ring 2 */}
          <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.2, 0.018, 16, 72]} />
            <meshStandardMaterial
              color="#fb7185"
              emissive="#e11d48"
              emissiveIntensity={0.3}
              roughness={0.35}
              metalness={0.7}
            />
          </mesh>

          {/* Orbital Gyroscope Ring 3 */}
          <mesh ref={ring3Ref} rotation={[-Math.PI / 3.5, Math.PI / 4, 0]}>
            <torusGeometry args={[2.5, 0.015, 16, 72]} />
            <meshStandardMaterial
              color="#ffb199"
              emissive="#e85d52"
              emissiveIntensity={0.25}
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>

          {/* Orbiting Satellite Crystals */}
          <mesh position={[1.9, 0, 0]}>
            <octahedronGeometry args={[0.12, 0]} />
            <meshStandardMaterial color="#fb7185" emissive="#fb7185" emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[-1.6, 1.4, 0.4]}>
            <octahedronGeometry args={[0.1, 0]} />
            <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[0.7, -2.0, -0.6]}>
            <octahedronGeometry args={[0.11, 0]} />
            <meshStandardMaterial color="#ff9a76" emissive="#ff9a76" emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[-1.8, -1.1, 0.5]}>
            <octahedronGeometry args={[0.09, 0]} />
            <meshStandardMaterial color="#f97366" emissive="#f97366" emissiveIntensity={0.6} />
          </mesh>

          {/* Quantum Particle Constellation */}
          <points ref={particlesRef}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
              />
            </bufferGeometry>
            <pointsMaterial
              size={isMobile ? 0.045 : 0.055}
              color="#d93643"
              transparent
              opacity={0.7}
              sizeAttenuation
            />
          </points>
        </group>
      </Float>
    </>
  );
}
