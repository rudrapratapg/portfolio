import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  useEffect(() => {
    // Manually compute the bounding sphere to avoid NaN issues
    const geometry = meshRef.current.geometry;
    if (geometry) {
      geometry.computeBoundingBox(); // Compute bounding box first
      const center = new THREE.Vector3();
      geometry.boundingBox.getCenter(center); // Get the center of the bounding box
      geometry.boundingSphere = new THREE.Sphere(center, 0); // Set initial bounding sphere with radius 0

      const positionArray = geometry.attributes.position.array;
      let maxRadiusSq = 0;
      for (let i = 0; i < positionArray.length; i += 3) {
        const vertex = new THREE.Vector3(
          positionArray[i],
          positionArray[i + 1],
          positionArray[i + 2]
        );
        const distanceSq = center.distanceToSquared(vertex);
        if (!isNaN(distanceSq)) {
          maxRadiusSq = Math.max(maxRadiusSq, distanceSq);
        }
      }
      geometry.boundingSphere.radius = Math.sqrt(maxRadiusSq); // Update radius
    }
  }, []);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
