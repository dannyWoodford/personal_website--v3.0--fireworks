import React from 'react'
import ItemCarousel from '../ItemCarousel.js'

export default function Blender({...props}) {
    const menuStateCurrentName = props.menuState.currentName

	const itemArray = [
		{
			_id: 'blender-booth',
			type: 'image',
			itemUrl: '/assets-by-page/blender/blender-booth.jpg'
		},
		{
			_id: 'blender-couch',
			type: 'image',
			itemUrl: '/assets-by-page/blender/blender-couch.jpg'
		},
		{
			_id: 'blender-steve',
			type: 'video',
			itemUrl: '/assets-by-page/blender-steve.mp4'
		},
		{
			_id: 'blender-al',
			type: 'video',
			itemUrl: '/assets-by-page/blender/blender-al.mp4'
		},
		{
			_id: 'blender-chair',
			type: 'video',
			itemUrl: '/assets-by-page/blender/blender-chair.mp4'
		},
		{
			_id: 'blender-donut',
			type: 'image',
			itemUrl: '/assets-by-page/blender/blender-donut.jpg'
		},
	]

    return (
        <div className='page blender-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'blender' ? 1 : 0,
			}}
		>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<div className="display-item" >
						<h2 className="text">I've added a few paintings/drawings I've done which may not seem relevant but gives credence to my visual sense which I believe to be hugely important to animation and 3D in general because of their visual/spacial nature.</h2>
							<ItemCarousel 
								emulateTouch={true} 
								swipeable={true}
								dynamicHeight={true} 
								infiniteLoop={false} 
								showThumbs={false}
								autoPlay={false} 
								interval={600000}
								centerMode={true}
								data={itemArray}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
