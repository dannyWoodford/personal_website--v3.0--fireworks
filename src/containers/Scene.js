import React, {Suspense} from 'react'
import { OrbitControls, Stats } from 'drei'
import {Canvas} from 'react-three-fiber'
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import Loading from "../sceneComponents/setup/Loading.js"
import NavRep from "../containers/NavRep.js"
import Statue from "../sceneComponents/Statue.js"
import Lighting from "../sceneComponents/setup/Lighting.js"
import Structure from "../sceneComponents/Structure.js"

// extend({OrbitControls})

export default function Scene({ active, setActive, ...props }) {
  

    return (
      <div>
        <Canvas  
          camera={{fov:55}}
          // gl={{ alpha: true, antialias: true, logarithmicDepthBuffer: true }}  
        >
          <OrbitControls />
          <Lighting />

          <NavRep active={props.active} setActive={props.set}/>
          <Structure />

          <Suspense fallback={<Loading />}>
            <Statue  />
          </Suspense>

          <Stats />
        </Canvas>

      </div>
  )
}
