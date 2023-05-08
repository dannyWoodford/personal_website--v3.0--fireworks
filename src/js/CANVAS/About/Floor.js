import * as THREE from 'three'
import React, { useEffect, useMemo } from 'react'
import { Box, useTexture, Cylinder, Plane } from '@react-three/drei'

import Streetlamp from './Streetlamp'
import Cart from './Cart'

export default function Floor() {
	const [building, tree, sidewalk, grass, floor] = useTexture([
		process.env.PUBLIC_URL + '/assets-by-page/about/building.jpeg',
		process.env.PUBLIC_URL + '/assets-by-page/about/tree.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/floor/sidewalk.jpeg',
		process.env.PUBLIC_URL + '/assets-by-page/about/floor/grass.jpg',
		process.env.PUBLIC_URL + '/assets-by-page/about/floor/2k/GroundCobblestone001_COL_2K.jpg',
	])

	const treeFlip = useMemo(() => tree.clone(), [tree])
	const stoneWall = useMemo(() => sidewalk.clone(), [sidewalk])
	const stoneWallColumn = useMemo(() => sidewalk.clone(), [sidewalk])
	const stoneWallTop = useMemo(() => sidewalk.clone(), [sidewalk])

	useEffect(() => {
		treeFlip.wrapS = THREE.RepeatWrapping
		treeFlip.repeat.x = -1
		treeFlip.needsUpdate = true

		floor.wrapS = THREE.RepeatWrapping
		floor.wrapT = THREE.RepeatWrapping
		floor.repeat.set(2, 2)
		floor.needsUpdate = true

		sidewalk.wrapS = THREE.RepeatWrapping
		sidewalk.wrapT = THREE.RepeatWrapping
		sidewalk.repeat.set(5, 1)
		sidewalk.needsUpdate = true

		stoneWall.wrapS = THREE.RepeatWrapping
		stoneWall.wrapT = THREE.RepeatWrapping
		stoneWall.repeat.set(25, 1)
		stoneWall.needsUpdate = true

		stoneWallColumn.wrapS = THREE.RepeatWrapping
		stoneWallColumn.wrapT = THREE.RepeatWrapping
		stoneWallColumn.repeat.set(0.3, 0.3)
		stoneWallColumn.needsUpdate = true

		stoneWallTop.wrapS = THREE.RepeatWrapping
		stoneWallTop.wrapT = THREE.RepeatWrapping
		stoneWallTop.repeat.set(1, 35)
		stoneWallTop.needsUpdate = true

		grass.wrapS = THREE.RepeatWrapping
		grass.wrapT = THREE.RepeatWrapping
		grass.repeat.set(1, 15)
		grass.needsUpdate = true
	}, [floor, sidewalk, stoneWall, stoneWallColumn, stoneWallTop, grass, treeFlip])

	return (
		<group position={[0, 0, 70]}>
			<group name='road' position={[0, -5.7, 0]}>
				<Plane name='cobblestone' args={[80, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[-80, 0, -40]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />
				</Plane>
				<Plane name='cobblestone' args={[80, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[80, 0, -40]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />
				</Plane>
				<Plane name='cobblestone' args={[80, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -40]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />
				</Plane>
				<Plane name='cobblestone' args={[80, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 40]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />
				</Plane>
				<Plane name='cobblestone' args={[80, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 120]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />
				</Plane>
				<Plane name='cobblestone' args={[80, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 200]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />
				</Plane>
				<Plane name='cobblestone' args={[80, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 280]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />
				</Plane>
				<Plane name='cobblestone' args={[80, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 360]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />
				</Plane>
			</group>

			<group name='back-wall-and-side-walk' position={[0, 0, -50]}>
				<Cylinder name='backWall-top' position={[0, 3.5, -60.87]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} args={[1, 1, 400, 3]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallTop} color='grey' />
				</Cylinder>
				<Box name='backWall' position={[0, -1, -61]} args={[400, 8, 2]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWall} color='grey' />
				</Box>
				<Box name='back-Sidewalk' position={[0, -7.9, -40]} args={[400, 6, 40]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>

				<Streetlamp pos={[60, 15, -31]} hasLight={false} args={[15, 40]} />

				<Cart />

				<Streetlamp pos={[-80, 15, -31]} hasLight={false} args={[15, 40]} />

				<Box name='back-Sidewalk-column' position={[140, 0, -61]} args={[10, 12, 4]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallColumn} color='grey' />
				</Box>
				<Box name='back-Sidewalk-column' position={[40, 0, -61]} args={[10, 12, 4]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallColumn} color='grey' />
				</Box>
				<Box name='back-Sidewalk-column' position={[-60, 0, -61]} args={[10, 12, 4]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallColumn} color='grey' />
				</Box>
				<Box name='back-Sidewalk-column' position={[-160, 0, -61]} args={[10, 12, 4]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallColumn} color='grey' />
				</Box>
			</group>

			<group name='trees'>
				<group name='group-0' position={[0, 0, -140]}>
					<Plane name='tree-left' args={[75, 62]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[90, 63]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
				</group>
				<group name='group-1' position={[0, 0, -100]}>
					<Plane name='tree-left' args={[75, 62]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
					
					<Plane name='tree-right' args={[90, 63]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
				</group>

				<group name='group-2' position={[0, 0, -60]}>
					<Plane name='tree-left' args={[81, 60]} rotation={[0, 0, 0]} position={[-38, 23, 155]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[-50, 9.7, 130]} />

					<Plane name='tree-right' args={[86, 59]} rotation={[0, 0, 0]} position={[38, 23, 150]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[45, 9.7, 130]} />
				</group>

				<group name='group-3' position={[0, 0, -20]}>
					<Plane name='tree-left' args={[91, 62]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
					<Plane name='tree-right' args={[83, 60]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
				</group>

				<group name='group-4' position={[0, 0, 20]}>
					<Plane name='tree-left' args={[82, 63]} rotation={[0, 0, 0]} position={[-38, 23, 155]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[90, 61]} rotation={[0, 0, 0]} position={[38, 23, 150]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
				</group>

				<group name='group-5' position={[0, 0, 60]}>
					<Plane name='tree-left' args={[81, 62]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[-50, 9.7, 130]} />

					<Plane name='tree-right' args={[86, 60]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[45, 9.7, 130]} />
				</group>

				<group name='group-6' position={[0, 0, 100]}>
					<Plane name='tree-left' args={[110, 68]} rotation={[0, 0, 0]} position={[-35, 27, 150]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[81, 63]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
				</group>
				<group name='group-7' position={[0, 0, 140]}>
					<Plane name='tree-left' args={[80, 65]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[110, 80]} rotation={[0, 0, 0]} position={[38, 30, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
				</group>
				<group name='group-8' position={[0, 0, 180]}>
					<Plane name='tree-left' args={[85, 74]} rotation={[0, 0, 0]} position={[-38, 30, 150]}>
						<meshLambertMaterial map={tree} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[-50, 9.7, 130]} />

					<Plane name='tree-right' args={[100, 75]} rotation={[0, 0, 0]} position={[38, 30, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.DoubleSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[45, 9.7, 130]} />
				</group>
			</group>

			<group name='buildings'>
				<Plane name='buildings-left' args={[400, 100]} rotation={[0, Math.PI / 2, 0]} position={[-80, 45, 220]}>
					<meshLambertMaterial map={building} />
				</Plane>
				<Plane name='buildings-right' args={[400, 100]} rotation={[0, -Math.PI / 2, 0]} position={[80, 42, 220]}>
					<meshLambertMaterial map={building} />
				</Plane>
			</group>

			<group name='left'>
				<Box name='left-sidewalk' position={[-69, -5.9, 220]} args={[400, 2, 22]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='left-sidewalk-curb' position={[-41, -5.9, 200]} args={[400, 2, 2]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='left-sidewalk-curb-turn' position={[-50, -5.9, -1]} args={[20, 2, 2]} receiveShadow rotation={[0, 0, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='left-sidewalk-turn' position={[-108, -5.9, 9]} args={[100, 2, 22]} receiveShadow rotation={[0, 0, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Plane name='grass' args={[16, 450]} rotation={[-Math.PI / 2, 0, 0]} position={[-50, -5.3, 225]}>
					<meshLambertMaterial map={grass} color={'#046312'} side={THREE.FrontSide} />
				</Plane>
			</group>

			<group name='right'>
				<Box name='right-sidewalk' position={[69, -5.9, 220]} args={[400, 2, 22]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='right-sidewalk-curb' position={[41, -5.9, 200]} args={[400, 2, 2]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='right-sidewalk-curb-turn' position={[50, -5.9, -1]} args={[20, 2, 2]} receiveShadow rotation={[0, 0, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='right-sidewalk-turn' position={[108, -5.9, 9]} args={[100, 2, 22]} receiveShadow rotation={[0, 0, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Plane name='grass' args={[16, 450]} rotation={[-Math.PI / 2, 0, 0]} position={[50, -5.3, 225]}>
					<meshLambertMaterial map={grass} color={'#046312'} side={THREE.FrontSide} />
				</Plane>
			</group>
		</group>
	)
}
