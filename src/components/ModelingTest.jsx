// import { createRoot } from "react-dom/client";
import "../App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { AmbientLight, MeshStandardMaterial } from "three/src/Three.Core.js";

// Fallback: if WebGL is not supported
export default function CubeModel() {
  return (
    <div id="canvas-container">
      <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
        <mesh camera={{ position: [5, 5, 5], fov: 25 }}>
          <boxGeometry args={[3, 3, 3]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.2} />
        <directionalLight color="green" position={[0, 0, 5]} />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>

      <Canvas
        camera={{ position: [5, 5, 5], fov: 25 }}
        fallback={<div>Sorry no WebGL supported!</div>}
      >
        <mesh>
          <sphereGeometry args={[2, 2, 2]} />
          <meshNormalMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
    </div>
  );
}
