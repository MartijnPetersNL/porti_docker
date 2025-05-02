import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import { useEffect } from "react";
import { OrbitControls, ContactShadows } from "@react-three/drei";

export default function Octogaan() {
  const [scale, setScale] = useState(1); // Initial height scale
  const meshRef = useRef();
  // const handleWheel = (e) => {
  //   const delta = e.deltaY * 0.01;
  //   setScale((prev) => Math.min(5, Math.max(1, prev - delta))); // Clamp the scale
  // };
  // useEffect(() => {
  //   // Define the passive wheel handler

  //   // Add the event listener with the passive option
  //   // window.addEventListener("wheel", handleWheel, { passive: true });

  //   // Cleanup function to remove the event listener
  //   // return () => {
  //   //   window.removeEventListener("wheel", handleWheel);
  //   // };
  // }, []);
  return (
    <>
      <Canvas
        camera={{ position: [5, 5, 5], fov: 25 }}
        fallback={<div>Sorry no WebGL supported!</div>}
      >
        <mesh
          ref={meshRef}
          position={[0, 0.05, 1]}
          scale={[0.1, 0.5, 0.1]} // Apply scale constraint on Y-axis
        >
          <boxGeometry args={[2, 3, 2]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh
          position={[2, 0, 2]}
          onClick={() => console.log("clicked change colour")}
          ref={meshRef}
          scale={[1, scale, 1]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.9}
          scale={10}
          blur={2.5}
          far={20}
        />
      </Canvas>
    </>
  );
}
