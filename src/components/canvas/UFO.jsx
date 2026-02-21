import { Suspense, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

import CanvasLoader from "../Loader";

const Effects = () => {
  const { gl } = useThree();
  
  // Check if renderer is valid before attempting to create EffectComposer
  if (!gl || !gl.getContext) {
    return null;
  }

  try {
    return (
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={15} height={500} />
        <Noise opacity={0.01} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    );
  } catch (error) {
    console.warn('EffectComposer failed to initialize:', error);
    return null;
  }
};

const UFO = () => {
    const ufo = useGLTF("./mandalorian/scene.gltf");

  return (
    <>
        <pointLight intensity={1} />
        <ambientLight intensity={10} />
        <spotLight 
            position={[10, 5, 10]}
            angle={Math.PI / 6}
            penumbra={1}
            intensity={10}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        <spotLight 
            position={[0, 2, 5]}
            angle={Math.PI / 4}
            penumbra={0.5}
            intensity={10}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        <primitive object={ufo.scene} scale={0.35} 
        autoRotate
        rotation={[-0.5, -1.0, -1]}
        />

        <Effects />
        

    </>
  );
};

const UFOCanvas = () => {
  return (
    <Canvas
      shadows={false}
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ 
        preserveDrawingBuffer: false,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <UFO />
      </Suspense>
    </Canvas>
  );
};

export default UFOCanvas;