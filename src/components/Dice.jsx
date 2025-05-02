import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";

export default function Dobbelsteen() {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 25 }}
      fallback={<div>Sorry no WebGL supported!</div>}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} />
      <Dobbelsteenobject />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.9}
        scale={10}
        blur={2.5}
        far={20}
      />
    </Canvas>
  );
}

function Dobbelsteenobject() {
  const textures = useLoader(TextureLoader, [
    "./dicesidesone.jpg",
    "./dicesidesTwo.jpg",
    "./dicesideThree.jpg",
    "./dicesidesFour.jpg",
    "./dicesidesFive.jpg",
    "./dicesidesSix.jpg",
  ]);

  const diceRef = useRef();
  const [rolling, setRolling] = useState(false);
  const [targetRotation, setTargetRotation] = useState([0, 0, 0]); // Final rotation

  // Predefined rotations for each side (in radians)
  const sides = {
    1: [0, 0, 0], // Front
    2: [Math.PI / 2, 0, 0], // Top
    3: [0, Math.PI / 2, 0], // Right
    4: [0, -Math.PI / 2, 0], // Left
    5: [-Math.PI / 2, 0, 0], // Bottom
    6: [0, Math.PI, 0], // Back
  };

  const handleClick = () => {
    setRolling(true);

    // Randomly select a side to land on
    const side = Math.floor(Math.random() * 6) + 1;
    setTargetRotation(sides[side]);

    // Simulate a roll animation for 2 seconds
    setTimeout(() => setRolling(false), 2000);
  };

  // Animate the dice rotation
  useFrame((state, delta) => {
    if (rolling && diceRef.current) {
      // Apply random rolling effect
      diceRef.current.rotation.x += delta * 10;
      diceRef.current.rotation.y += delta * 10;

      // Smoothly interpolate towards the target rotation
      diceRef.current.rotation.x +=
        (targetRotation[0] - diceRef.current.rotation.x) * 0.05;
      diceRef.current.rotation.y +=
        (targetRotation[1] - diceRef.current.rotation.y) * 0.05;
      diceRef.current.rotation.z +=
        (targetRotation[2] - diceRef.current.rotation.z) * 0.05;
    }
  });

  return (
    <mesh ref={diceRef} onClick={handleClick}>
      <boxGeometry args={[2, 2, 2]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={texture}
        />
      ))}
    </mesh>
  );
}
