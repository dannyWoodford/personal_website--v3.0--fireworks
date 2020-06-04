import React, {Suspense, useRef, useState} from 'react'
// import * as THREE from 'three'
import { OrbitControls, Stats } from 'drei'
import {Canvas} from 'react-three-fiber'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


import Loading from "../sceneComponents/setup/Loading.js"
import Nav from "../containers/Nav.js"
import Statue from "../sceneComponents/Statue.js"
import Lighting from "../sceneComponents/setup/Lighting.js"
import Structure from "../sceneComponents/Structure.js"

// extend({OrbitControls})

export default function Scene(props) {
  
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
    
    
    // softShadows()
    
    return (
    <div>
      
      <div>
        <Canvas  
          camera={{fov:48, position:[0,0,5]}}
          // shadowMap
          // shadowMap-type={ THREE.BasicShadowMap}
          // gl={{ alpha: true, antialias: true, logarithmicDepthBuffer: true }}  
        >
          <OrbitControls />
          {/* <Camera /> */}
          <Lighting />

          <Nav />
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
