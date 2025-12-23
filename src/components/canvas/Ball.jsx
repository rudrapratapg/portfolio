import { Suspense, useEffect, useState, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <mesh castShadow={false} receiveShadow={false} scale={2.75}>
      <icosahedronGeometry args={[1, 2]} />
      <meshPhongMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        shininess={30}
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
            powerPreference: isMobile ? "low-power" : "default",
            logarithmicDepthBuffer: false,
          }}
          camera={{ position: [0, 0, 5], fov: 90 }}
          style={{ pointerEvents: "none" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={isMobile ? 0.3 : 0.5} />
            <directionalLight position={[0, 0, 0.05]} intensity={isMobile ? 0.4 : 0.8} />
            <OrbitControls
              enableZoom={false}
              autoRotate={!isMobile}
              autoRotateSpeed={isMobile ? 3 : 5}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Ball imgUrl={icon} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default BallCanvas;