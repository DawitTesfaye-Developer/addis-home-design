import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useState } from 'react';
import { Button } from './ui/button';
import { RotateCcw, Play, Pause } from 'lucide-react';
import * as THREE from 'three';

// 3D Sofa Model
const Sofa3D = () => {
  return (
    <group>
      {/* Back rest */}
      <mesh position={[0, 0.5, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 1.2, 0.25]} />
        <meshStandardMaterial color="#d97706" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Seat */}
      <mesh position={[0, -0.1, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.4, 1.2]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-1.15, 0.2, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 1, 1.2]} />
        <meshStandardMaterial color="#ea580c" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Right arm */}
      <mesh position={[1.15, 0.2, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 1, 1.2]} />
        <meshStandardMaterial color="#ea580c" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Cushions */}
      <mesh position={[-0.6, 0.15, 0.1]} castShadow>
        <boxGeometry args={[0.7, 0.15, 0.8]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.8} />
      </mesh>
      <mesh position={[0.6, 0.15, 0.1]} castShadow>
        <boxGeometry args={[0.7, 0.15, 0.8]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.8} />
      </mesh>
    </group>
  );
};

// 3D Table Model
const Table3D = () => {
  return (
    <group>
      {/* Top */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.15, 1.5]} />
        <meshStandardMaterial color="#92400e" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Legs */}
      {[
        [-1, 0.4, -0.6],
        [1, 0.4, -0.6],
        [-1, 0.4, 0.6],
        [1, 0.4, 0.6]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow receiveShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.9]} />
          <meshStandardMaterial color="#78350f" roughness={0.4} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
};

// 3D Bed Model
const Bed3D = () => {
  return (
    <group>
      {/* Headboard */}
      <mesh position={[0, 0.7, -0.9]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 1.6, 0.15]} />
        <meshStandardMaterial color="#92400e" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Mattress */}
      <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.4, 2]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.8} />
      </mesh>
      {/* Bed frame */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.3, 2.1]} />
        <meshStandardMaterial color="#78350f" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Legs */}
      {[
        [-1.1, -0.4, -0.9],
        [1.1, -0.4, -0.9],
        [-1.1, -0.4, 0.9],
        [1.1, -0.4, 0.9]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.4]} />
          <meshStandardMaterial color="#78350f" roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
};

// 3D Chair Model
const Chair3D = () => {
  return (
    <group>
      {/* Back */}
      <mesh position={[0, 0.6, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 1.4, 0.12]} />
        <meshStandardMaterial color="#d97706" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Seat */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.12, 0.9]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Legs */}
      {[
        [-0.35, -0.4, -0.35],
        [0.35, -0.4, -0.35],
        [-0.35, -0.4, 0.35],
        [0.35, -0.4, 0.35]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.9]} />
          <meshStandardMaterial color="#b45309" roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
};

// 3D Coffee Table Model
const CoffeeTable3D = () => {
  return (
    <group>
      {/* Top */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.1, 1.2]} />
        <meshStandardMaterial color="#92400e" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Shelf */}
      <mesh position={[0, 0.15, 0]} receiveShadow>
        <boxGeometry args={[1.6, 0.08, 1]} />
        <meshStandardMaterial color="#a16207" roughness={0.4} />
      </mesh>
      {/* Legs */}
      {[
        [-0.7, 0.05, -0.5],
        [0.7, 0.05, -0.5],
        [-0.7, 0.05, 0.5],
        [0.7, 0.05, 0.5]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.9]} />
          <meshStandardMaterial color="#78350f" roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
};

// 3D Wardrobe Model
const Wardrobe3D = () => {
  return (
    <group>
      {/* Main body */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 2.5, 0.8]} />
        <meshStandardMaterial color="#92400e" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Left door */}
      <mesh position={[-0.51, 0.5, 0]} castShadow>
        <boxGeometry args={[0.02, 2.3, 0.75]} />
        <meshStandardMaterial color="#78350f" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Middle divider */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.02, 2.3, 0.75]} />
        <meshStandardMaterial color="#78350f" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Right door */}
      <mesh position={[0.51, 0.5, 0]} castShadow>
        <boxGeometry args={[0.02, 2.3, 0.75]} />
        <meshStandardMaterial color="#78350f" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Handles */}
      <mesh position={[-0.25, 0.5, 0.41]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.2]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0.25, 0.5, 0.41]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.2]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  );
};

interface Interactive3DViewerProps {
  productName: string;
}

export const Interactive3DViewer = ({ productName }: Interactive3DViewerProps) => {
  const [autoRotate, setAutoRotate] = useState(true);
  const [controlsRef, setControlsRef] = useState<any>(null);

  const getModelByName = (name: string) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('sofa')) return <Sofa3D />;
    if (nameLower.includes('table') && nameLower.includes('dining')) return <Table3D />;
    if (nameLower.includes('bed')) return <Bed3D />;
    if (nameLower.includes('chair')) return <Chair3D />;
    if (nameLower.includes('coffee')) return <CoffeeTable3D />;
    if (nameLower.includes('wardrobe')) return <Wardrobe3D />;
    return <Sofa3D />; // Default
  };

  const handleReset = () => {
    if (controlsRef) {
      controlsRef.reset();
    }
  };

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-2xl">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 1.5, 5]} />
        <OrbitControls
          ref={setControlsRef}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        <spotLight
          position={[0, 8, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.2} />
        </mesh>

        {/* 3D Model */}
        {getModelByName(productName)}
      </Canvas>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <Button
          size="sm"
          onClick={() => setAutoRotate(!autoRotate)}
          className="bg-white/90 hover:bg-white text-amber-900 border border-amber-200 shadow-lg"
        >
          {autoRotate ? (
            <>
              <Pause className="h-4 w-4 mr-1" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-1" />
              Rotate
            </>
          )}
        </Button>
        <Button
          size="sm"
          onClick={handleReset}
          className="bg-white/90 hover:bg-white text-amber-900 border border-amber-200 shadow-lg"
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <p className="text-sm text-amber-900 font-medium">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
};
