import { Suspense, useMemo, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  // Optimize the model
  useMemo(() => {
    earth.scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = !isMobile;
        obj.receiveShadow = !isMobile;
        
        // Safely optimize materials
        if (obj.material) {
          if (isMobile) {
            // Reduce complexity for mobile
            if (typeof obj.material.metalness !== 'undefined') {
              obj.material.metalness = Math.max(0, obj.material.metalness * 0.8);
            }
            if (typeof obj.material.roughness !== 'undefined') {
              obj.material.roughness = Math.min(1, obj.material.roughness * 1.1);
            }
          }
        }
      }
    });
  }, [earth, isMobile]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

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
          shadows: false,
          dpr: [1, 1.2],
          frameloop: "demand",
          antialias: false,
        }
      : {
          shadows: true,
          dpr: [1, 1.5],
          frameloop: "always",
          antialias: true,
        };
  }, [isMobile]);

  return (
    <div className="w-full h-[350px] md:h-[500px] relative">
      <ErrorBoundary>
        <Canvas
          shadows={performanceSettings.shadows}
          frameloop={performanceSettings.frameloop}
          dpr={performanceSettings.dpr}
          gl={{
            preserveDrawingBuffer: false,
            antialias: performanceSettings.antialias,
            alpha: true,
            powerPreference: isMobile ? "low-power" : "default",
            logarithmicDepthBuffer: false,
          }}
          style={{ pointerEvents: 'none' }}
          camera={{
            fov: 45,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate={!isMobile}
              autoRotateSpeed={isMobile ? 2 : 3}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default EarthCanvas;