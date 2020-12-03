import React, {Suspense, useRef} from 'react'
import { OrbitControls, Stats } from 'drei'
import {Canvas} from 'react-three-fiber'
import {useSpring, a} from 'react-spring/three'
// import * as THREE from 'three'
// import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls.js';

import About from "./About.js"
import Projects from "./Projects.js"

import Loading from "../sceneComponents/setup/Loading.js"
import Lighting from "../sceneComponents/setup/Lighting.js"
import Statue from "../sceneComponents/Statue.js"
import Logo from "../sceneComponents/Logo.js"
import Structure from "../sceneComponents/Structure.js"

// extend({DeviceOrientationControls})


export default function Scene({ ...props }) {

    const group = useRef()
    const sectionRotation = useSpring({
        rotateTo: props.sectionSelection.rotation, delay: 800
      })

      
  

    return (
        <Canvas  camera={{fov: window.innerWidth > 1100 ? 55 : 90}}  >
          <OrbitControls 
          // enableZoom={false}
          // maxPolarAngle={Math.PI / 1}
          // minPolarAngle={Math.PI / 2}
          />
      

            <a.group ref={group} rotation={sectionRotation.rotateTo}>
              <Lighting />
              <Suspense fallback={<Loading />}>
                <About />
                <Structure />
                <Logo />
                <Statue  />
                <Projects />
              </Suspense>
            </a.group> 

          {/* <Stats /> */}
        </Canvas>
  )
}
