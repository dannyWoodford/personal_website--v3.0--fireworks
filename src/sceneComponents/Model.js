import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader, useResource, useThree, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { draco } from 'drei'

export default function Model(props) {
  const { nodes, materials } = useLoader(GLTFLoader, '3d/blueMountains_v2.gltf', draco('/draco-gltf/'))
  const [ref, mountainModel] = useResource()
  
  // const {renderer, scene} = useThree()
    // console.log(mountainModel)
    // console.log( props.cubeCam.current)
    // useFrame(state => {
    //   mountainModel.position.z = -6 + Math.sin(state.clock.getElapsedTime() * 1) * 2
    // })


  return (
    <group 
    {...props} 
    // onClick={() => props.lightColorHandler()}
    dispose={null}
    >
      <mesh  
    position={[0,0,-2.2]}
          geometry={nodes.mesh_0.geometry} 
          ref={ref} 
      >
        <meshPhysicalMaterial
            attach="material"
            color="#b76e79 " 
            emissive="#000000" 
            roughness="0.35" 
            metalness="0.4"
            reflectivity="3"
            clearcoat="1"
            side={THREE.DoubleSide}
            // envMap={props.cubeCam.current.renderTarget}
          />
      </mesh>
    </group>
  )
}
