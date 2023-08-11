import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


const Model = () => {
  const gltf = useGLTF('/models/fones.glb');
  const modelRef = useRef();
  useFrame(() => modelRef.current.rotation.y += 0.005);
  return <primitive object={gltf.scene} ref={modelRef} scale={[1, 1, 1]} />; // Ajuste a escala aqui
};


const App = () => {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <directionalLight position={[0, 50, 0]} intensity={4} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
};

export default App;
