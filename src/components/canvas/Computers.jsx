import { Suspense, useEffect, useState, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Optimize geometry and materials
  useMemo(() => {
    computer.scene.traverse((obj) => {
      if (obj.isMesh) {
        // Only cast shadows on desktop
        obj.castShadow = !isMobile;
        obj.receiveShadow = !isMobile;
        obj.material.side = THREE.FrontSide;
        
        // Optimize materials for better performance
        if (obj.material) {
          // Safely dispose shadow map if it exists
          if (obj.material.shadowMap) {
            obj.material.shadowMap.dispose();
          }
          
          // Reduce lighting complexity on mobile using type check
          if (isMobile && obj.material.type === 'MeshStandardMaterial') {
            obj.material.metalness = Math.max(0, obj.material.metalness - 0.1);
            obj.material.roughness = Math.min(1, obj.material.roughness + 0.1);
          }
        }
      }
    });
  }, [computer, isMobile]);

  return (
    <mesh>
      <ambientLight intensity={isMobile ? 1 : 2} />
      <hemisphereLight intensity={isMobile ? 0.08 : 0.15} groundColor="black" />
      <pointLight intensity={isMobile ? 0.5 : 1} />
      {!isMobile && (
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={512}
        />
      )}
      <pointLight intensity={isMobile ? 0.5 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Handle loading states
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Timeout after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Enhanced error handling
  const handleError = (error) => {
    console.error("3D Model Error:", error);
    setError(error);
    setIsLoading(false);
  };

  // Improved performance settings based on device
  const performanceSettings = useMemo(() => {
    return isMobile 
      ? { 
          shadows: false, 
          dpr: [1, 1.2],
          frameloop: "demand",
          antialias: false
        }
      : { 
          shadows: true, 
          dpr: [1, 1.5],
          frameloop: "always",
          antialias: true
        };
  }, [isMobile]);

  if (error) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-tertiary rounded-lg">
        <p className="text-secondary">Failed to load 3D model</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-tertiary/50">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-primary border-r-primary border-b-secondary border-l-secondary rounded-full animate-spin mb-4"></div>
            <p className="text-white">Loading 3D model...</p>
          </div>
        </div>
      )}
      
      <ErrorBoundary>
        <Canvas
          frameloop={performanceSettings.frameloop}
          shadows={performanceSettings.shadows}
          dpr={performanceSettings.dpr}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ 
            preserveDrawingBuffer: false,
            antialias: performanceSettings.antialias,
            alpha: true,
            powerPreference: isMobile ? 'low-power' : 'default',
            logarithmicDepthBuffer: false
          }}
          style={{ pointerEvents: 'none' }}
          onCreated={() => setIsLoading(false)}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enablePan={false}
              autoRotate={!isMobile}
              autoRotateSpeed={0.5}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default ComputersCanvas;