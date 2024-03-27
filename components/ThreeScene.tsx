'use client';
import {Canvas} from "@react-three/fiber";
import {Stars} from "@react-three/drei";

function ThreeScene() {
  return (
    <div className='fixed h-full w-full -z-10'>
      <Canvas>
        <Stars/>
      </Canvas>
    </div>
  );
}

export default ThreeScene;
