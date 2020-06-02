import React, {Suspense, useRef, useState, useEffect} from 'react'
// import * as THREE from 'three';
import { PerspectiveCamera, Stats } from 'drei'
import {Canvas, extend, useThree, useFrame, useResource} from 'react-three-fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import Header  from "./Header.js";

import Loading from "../sceneComponents/Loading.js"
import Model from "../sceneComponents/Model.js"
import Lighting from "../sceneComponents/setup/Lighting.js"
import Structure from "../sceneComponents/Structure.js"

extend({OrbitControls})

export default function Scene(props) {

  const [mainLightColor, setMainLightColorState] = useState(() => {
    return "rgb(183,136,101)"
  })
  const [cameraPos, setCameraPos] = useState({
    position: '[0,0,0]'
  })
  

  const lightColorHandler = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    
    setMainLightColorState(() => {
      return `rgb(${r},${g},${b})`
    }
    )
  }

  const onMouseMove = e => {
  
    setMainLightColorState(`rgb(${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 90 )},${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 30 )},${Math.round((e.clientX/e.target.offsetWidth)* Math.PI * 90)})`);
      // console.log(`rgb(${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 90 )},60,${Math.round((e.clientY/e.target.offsetWidth)* Math.PI * 90)})`)
  };


  function StateDisplay () {
    // console.dir(cam)
  const displayCamPos = () => {
    let x = Math.round((cam.current.position.x+ Number.EPSILON) * 100) / 100
    let y = Math.round((cam.current.position.y+ Number.EPSILON) * 100) / 100
    let z = Math.round((cam.current.position.z+ Number.EPSILON) * 100) / 100
      setCameraPos({
        position: `[${x},${y},${z}]`
      })
    }

    return(
      <div className='state-display'>
        <p id="mainLightColor">mainLightColor: <span style={{color: mainLightColor }}>{mainLightColor}</span></p>
        <p id="cameraPos">cameraPos: <span style={{color: mainLightColor}}>{cameraPos.position}</span></p>
        <button id="cameraPos-button" onClick={() => displayCamPos()}> Camera Position</button>
      </div>
    ) 
  }
  
  const Controls = () => {
    const controls = useRef()
    const {camera, gl} = useThree()

    useFrame(() => {
      controls.current.update()
    })

    return (
      <orbitControls 
        ref={controls}  
        args={[camera, gl.domElement]}
      />
    )
  }

  const cam = useRef()
  
  function Camera (props) {  
    // useFrame(state => {
    //   cam.current.position.z = 3 + Math.sin(state.clock.getElapsedTime() * 1.3) * 2
    // })
    
    return(
        <PerspectiveCamera 
          makeDefault 
          ref={cam}   
          fov={48}
          position={[0,0,7]}
        />
      ) 
    }
    
  // const cubeCam = useRef()

  // function CubeCamera() {
  //   const {renderer, scene} = useThree()

  //   // useFrame( () => {
  //   //   cubeCam.current.update(renderer, scene);
  //   // })

  //   return(
  //     <cubeCamera 
  //       args={[.1, 50, 512]}
  //       ref={cubeCam}
  //       position={[0,0,-2.2]}
  //     /> 
  //   )
  // }

  
  return (
    <div>
      {/* <StateDisplay /> */}
      <Header />
      <div>
        <Canvas onMouseMove={onMouseMove}>
          {/* <Controls /> */}
          <Camera />
          <Lighting mainLightColor={mainLightColor}/>

          <Structure />

          <Suspense fallback={<Loading />}>
            {/* <CubeCamera /> */}
            <Model lightColorHandler={lightColorHandler} />
          </Suspense>

          {/* <mesh visible position={[0, 3, 8]} >
          <icosahedronBufferGeometry attach="geometry" args={[3, 0]} />
          <meshPhysicalMaterial
            attach="material"
            color="0x3f0000" 
            emissive="#000000" 
            roughness="0.0" 
            metalness="0.4"
            reflectivity="1"
            clearcoat="1"
          />
        </mesh> */}

          <Stats />
        </Canvas>
      </div>
    </div>
  )
}

  // const Controls = () => {
  //   const controls = useRef()
  //   const {camera, gl} = useThree()

  //   useFrame(() => {
  //     controls.current.update()
  //   })

  //   return (
  //     <orbitControls 
  //       ref={controls}  
  //       args={[camera ,gl.domElement]}
  //     />
  //   )
  // }