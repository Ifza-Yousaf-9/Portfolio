import {Suspense, useEffect, useState} from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Computers = ( isMobile) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
<mesh>
  <hemisphereLight intensity={0.15}
  groundColor="black"/>
  <pointLight intensity={1} />
  <spotLight 
  position={[-20, 50, 10]}
  angle={0.12}
  penumbra={1}
  intensity={1}
  castShadow
  shadow-mapSize = {1024} 
  />
  <primitive 
  object={computer.scene}
  scale={isMobile ? 0.7:  0.75}
  position={isMobile ? [0, -3, -2.2]: [0, -3.25, -1.5]}
  rotation={[-0.01, -0.2, -0.1]}
  />
</mesh>
    )
}
const ComputersCanvas = () => {
const [isMobile, setIsMobile] =  useState(false);
 // that useeffect only work with ismobile 
useEffect (() => {
 // Add a Listener for chnages to the screen size
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  //Set the initial value of the the `isMobile` state variable
  setIsMobile(mediaQuery.matches);

  //Define a callback func to handle changes to the media query
   const handleMediaQueryCharge =(event) => {
    setIsMobile(event.matches);
   }

   //Add callback func as a listener for changes to the media query
   mediaQuery.addEventListener('change', 
   handleMediaQueryCharge);

   //Remove the listener when component is unmounted
return()=> {
  mediaQuery.removeEventListener('change',handleMediaQueryCharge);
}
},

[])

  return(
    // 3d Scene 
    <Canvas 
    frameLoop='demand' 
    shadows
    camera={{ position:[20, 3, 5], fov:25}}   //20 x-axis ,3 y-axis and 5 z-axis
    gl={{preserveDrawingBuffer:true}}
 >
  <Suspense fallback={<CanvasLoader />}>
    <OrbitControls 
    enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}
    />
    <Computers isMobile={isMobile} />
    </Suspense> 
    <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;