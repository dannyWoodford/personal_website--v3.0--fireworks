// import * as THREE from 'three'
// import React, { useRef } from 'react'
// import { useLoader, useResource, useThree, useFrame } from 'react-three-fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import { draco } from 'drei'

// export default function Model(props) {
//   const { nodes, materials } = useLoader(GLTFLoader, '3d/blueMountains_v2.gltf', draco('/draco-gltf/'))
//   const [ref, mountainModel] = useResource()
  

//     // console.log(mountainModel)
//     // console.log( props.cubeCamRef.current)

//     // const {renderer, scene} = useThree()

//     // useFrame( () => {
//     //   props.cubeCamRef.current.update(renderer, scene);
//     // })


//   return (
//     <group 
//       {...props} 
//       dispose={null}
//     >
//       <mesh  
//           position={[0,0,-7.2]}
//           geometry={nodes.mesh_0.geometry} 
//           ref={ref} 
//       >
//         <meshPhysicalMaterial
//             attach="material"
//             color="#B76E79" 
//             emissive="#000000" 
//             roughness="0.35" 
//             metalness="0.4"
//             reflectivity="1"
//             clearcoat="1"
//             side={THREE.DoubleSide}
//             // envMap={props.cubeCamRef.current.renderTarget}
//           />
//       </mesh>
//     </group>
//   )
// }




import * as THREE from "three"
import React from "react"
import { useLoader, useThree, useFrame, useResource } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { draco } from "drei"

export default function Model({ cubeCam, ...props }) {
  const [ref] = useResource()
  const { gl, scene } = useThree()
  useFrame(() => ref.current.update(gl, scene))
  const { nodes } = useLoader(GLTFLoader, "3d/blueMountains_v2.gltf", draco("/draco-gltf/"))
  return (
    <group {...props} dispose={null}>
      <cubeCamera args={[0.1, 50, 512]} ref={ref} position={[0, 0, 17.2]} />
      {ref.current && (
        <mesh position={[0, 0, 17.2]} geometry={nodes.mesh_0.geometry}>
          <meshPhysicalMaterial
            attach="material"
            color="#b76e79"
            emissive="#000000"
            roughness="0.35"
            metalness="0.4"
            reflectivity="3"
            clearcoat="1"
            side={THREE.DoubleSide}
            envMap={ref.current.renderTarget.texture}
          />
        </mesh>
      )}
    </group>
  )
}
