import React from 'react'

// export default function Loading() {
//     return (
//       <div class="full-screen-loading-background">
//         <div class="loading-container">
//           <div class="text">Loading ...</div>
//           <div class="loading-ring"></div>
//         </div>
//       </div>
//     );
// }
export default function Loading() {
    return (
        <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <sphereGeometry attach="geometry" args={[1, 16, 16]} />
          <meshStandardMaterial
            attach="material"
            color="white"
          />
        </mesh>
      );
}
