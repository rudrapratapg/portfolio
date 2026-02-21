import { Suspense, useEffect, useState, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <group>
      <mesh castShadow={false} receiveShadow={false} scale={2.75} rotation={[0, 0, 0]}>
        {/* Coin shape using cylinder with very small height */}
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial
          color="#fff8eb"
          metalness={0.3}
          roughness={0.4}
        />
        {/* Front side decal */}
        <Decal
          position={[0, 0.05, 0]}
          rotation={[0, 0, 0]}
          scale={1.1}
          map={decal}
          flatShading
        />
      </mesh>
      
      {/* Rotating animation applied to group */}
      <mesh 
        castShadow={false} 
        receiveShadow={false} 
        scale={2.75}
        rotation={[0, 0, 0]}
      >
        <ambientLight intensity={0.6} />
      </mesh>
    </group>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Validate that icon is a valid path/URL
  if (!icon || typeof icon !== 'string') {
    return (
      <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-tertiary rounded-lg">
        <span className="text-xs text-gray-500">No icon</span>
      </div>
    );
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const performanceSettings = useMemo(() => {
    return isMobile
      ? {
          dpr: [1, 1.2],
          frameloop: "demand",
          antialias: false,
        }
      : {
          dpr: [1, 1.5],
          frameloop: "always",
          antialias: true,
        };
  }, [isMobile]);

  const canvasContainerRef = useRef(null);

  return (
    <div className="w-24 h-24 md:w-28 md:h-28" ref={canvasContainerRef}>
      <ErrorBoundary>
        <Canvas
          frameloop={performanceSettings.frameloop}
          dpr={performanceSettings.dpr}
          gl={{
            preserveDrawingBuffer: false,
            antialias: performanceSettings.antialias,
            alpha: true,
            powerPreference: isMobile ? "low-power" : "high-performance",
            logarithmicDepthBuffer: false,
          }}
          camera={{ position: [0, 0, 5], fov: 90 }}
          style={{ pointerEvents: "none" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={isMobile ? 0.5 : 0.7} />
            <directionalLight position={[5, 5, 5]} intensity={isMobile ? 0.6 : 1} />
            <OrbitControls
              enableZoom={false}
              autoRotate={!isMobile}
              autoRotateSpeed={isMobile ? 8 : 12}
              enablePan={false}
              maxPolarAngle={Math.PI}
              minPolarAngle={0}
            />
            <Ball imgUrl={icon} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default BallCanvas;