import React, {Suspense, useRef, useState} from 'react'
import * as THREE from 'three'
import { OrbitControls, Stats, softShadows } from 'drei'
import {Canvas, extend, useThree, useFrame, useResource} from 'react-three-fiber'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


import Loading from "../sceneComponents/setup/Loading.js"
import Model from "../sceneComponents/Model.js"
import Statue from "../sceneComponents/Statue.js"
import Lighting from "../sceneComponents/setup/Lighting.js"
import Structure from "../sceneComponents/Structure.js"

// extend({OrbitControls})

export default function Scene(props) {
  softShadows()
  // const [mainLightColor, setMainLightColorState] = useState(() => {
  //   return "rgb(183,136,101)"
  // })
  // // const [cameraPos, setCameraPos] = useState({
  // //   position: '[0,0,0]'
  // // })
  



  // const onMouseMove = e => {
  //   setMainLightColorState(`rgb(${Math.round((e.clientY/e.target.offsetWidth)* Math.PI * 90 )},${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 30 )},${Math.round((e.clientX/e.target.offsetWidth)* Math.PI * 90)})`);
  //     // console.log(`rgb(${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 90 )},60,${Math.round((e.clientY/e.target.offsetWidth)* Math.PI * 90)})`)
  // };


  // function StateDisplay () {
  //   const displayCamPos = () => {
  //     let x = Math.round((cam.current.position.x+ Number.EPSILON) * 100) / 100
  //     let y = Math.round((cam.current.position.y+ Number.EPSILON) * 100) / 100
  //     let z = Math.round((cam.current.position.z+ Number.EPSILON) * 100) / 100
  //     setCameraPos({
  //       position: `[${x},${y},${z}]`
  //     })
  //   }

  //   return(
  //     <div className='state-display'>
  //       <p id="mainLightColor">mainLightColor: <span style={{color: mainLightColor }}>{mainLightColor}</span></p>
  //       <p id="cameraPos">cameraPos: <span style={{color: mainLightColor}}>{cameraPos.position}</span></p>
  //       <button id="cameraPos-button" onClick={() => displayCamPos()}> Camera Position</button>
  //     </div>
  //   ) 
  // }
  

  // const cam = useRef()
  
  // function Camera () {  

  //   console.log(cam.current)

  //   // useFrame(state => {
  //   //   cam.current.position.z = 3 + Math.sin(state.clock.getElapsedTime() * 1.3) * 2
  //   // })
    
  //   return(
  //       <perspectiveCamera 
  //         makeDefault 
  //         ref={cam}   
  //         fov={48}
  //         position={[0,0,20]}
  //       />
  //     ) 
  //   }
  
    



  // const loadingComplete = () => {
  //   let loadingAnimation = document.querySelector(".full-screen-loading-background")
  //   loadingAnimation.classList.remove('hide-loading-page')
  // }

  

  return (
    <div>
      
      <div>
        <Canvas  
          camera={{fov:48, position:[0,0,5]}}
          // gl={{ alpha: true, antialias: true, logarithmicDepthBuffer: true }}  
        >
          <OrbitControls />
          {/* <Camera /> */}
          <Lighting />

          <Structure />

          <Suspense fallback={<Loading />}>
            <Statue  />
          </Suspense>

          <Stats />
        </Canvas>
      </div>
    </div>
  )
}
