import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Simplified furniture shapes
const Sofa = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        {/* Back rest */}
        <mesh position={[0, 0.5, -0.3]}>
          <boxGeometry args={[2, 1, 0.2]} />
          <meshStandardMaterial color="#d97706" opacity={0.15} transparent />
        </mesh>
        {/* Seat */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.3, 1]} />
          <meshStandardMaterial color="#f59e0b" opacity={0.15} transparent />
        </mesh>
        {/* Arms */}
        <mesh position={[-0.9, 0.3, 0]}>
          <boxGeometry args={[0.2, 0.8, 1]} />
          <meshStandardMaterial color="#ea580c" opacity={0.15} transparent />
        </mesh>
        <mesh position={[0.9, 0.3, 0]}>
          <boxGeometry args={[0.2, 0.8, 1]} />
          <meshStandardMaterial color="#ea580c" opacity={0.15} transparent />
        </mesh>
      </group>
    </Float>
  );
};

const Chair = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <group position={position}>
        {/* Back */}
        <mesh position={[0, 0.8, -0.2]}>
          <boxGeometry args={[0.8, 1.2, 0.1]} />
          <meshStandardMaterial color="#d97706" opacity={0.12} transparent />
        </mesh>
        {/* Seat */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.8]} />
          <meshStandardMaterial color="#f59e0b" opacity={0.12} transparent />
        </mesh>
        {/* Legs */}
        <mesh position={[-0.3, -0.2, -0.3]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#b45309" opacity={0.12} transparent />
        </mesh>
        <mesh position={[0.3, -0.2, -0.3]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#b45309" opacity={0.12} transparent />
        </mesh>
      </group>
    </Float>
  );
};

const Table = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group position={position}>
        {/* Top */}
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[2, 0.1, 1.2]} />
          <meshStandardMaterial color="#ea580c" opacity={0.13} transparent />
        </mesh>
        {/* Legs */}
        <mesh position={[-0.8, 0.3, -0.5]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#b45309" opacity={0.13} transparent />
        </mesh>
        <mesh position={[0.8, 0.3, -0.5]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#b45309" opacity={0.13} transparent />
        </mesh>
        <mesh position={[-0.8, 0.3, 0.5]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#b45309" opacity={0.13} transparent />
        </mesh>
        <mesh position={[0.8, 0.3, 0.5]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#b45309" opacity={0.13} transparent />
        </mesh>
      </group>
    </Float>
  );
};

const Wardrobe = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position}>
        <mesh>
          <boxGeometry args={[1.5, 2.5, 0.8]} />
          <meshStandardMaterial color="#d97706" opacity={0.1} transparent />
        </mesh>
      </group>
    </Float>
  );
};

export const FloatingFurniture3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        {/* Multiple furniture pieces scattered in 3D space */}
        <Sofa position={[-8, 3, -5]} />
        <Chair position={[6, -2, -3]} />
        <Table position={[-5, -4, -4]} />
        <Chair position={[8, 4, -6]} />
        <Wardrobe position={[-6, -1, -8]} />
        <Table position={[4, 1, -5]} />
        <Sofa position={[7, -5, -7]} />
        <Chair position={[-3, 5, -4]} />
      </Canvas>
    </div>
  );
};
