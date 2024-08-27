import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

import CanvasLoader from "../Loader";

const UFO = () => {

    const ufo = useGLTF("./mandalorian/scene.gltf");


  return (
    <>
        <pointLight intensity={1} />
        <ambientLight intensity={10} />
        <spotLight 
            position={[10, 5, 10]}  // Directly above the object
            angle={Math.PI / 6}      // Narrow beam
            penumbra={1}             // Softer edges
            intensity={10}          // High intensity to brighten the top
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        <spotLight 
            position={[0, 2, 5]}  // Slightly above and in front of the object
            angle={Math.PI / 4}       // Wider beam to cover the front
            penumbra={0.5}            // Softer edges
            intensity={10}            // Lower intensity compared to the top light
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
        <primitive object={ufo.scene} scale={0.35} 
        autoRotate
        rotation={[-0.5, -1.0, -1]}
        />

        <EffectComposer>
            <Bloom luminanceThreshold={0.1} luminanceSmoothing={10} height={500} />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        

    </>
  );
};

const UFOCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <UFO />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default UFOCanvas;