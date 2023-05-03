import React from 'react'
import ItemCarousel from '../ItemCarousel.js'

export default function Blender({ currentName }) {
	const itemArray = [
		{
			_id: 'blender-wile-e-coyote',
			type: 'image',
			itemUrl: '/assets-by-page/blender/blender-wile-e-coyote.jpeg',
		},
		{
			_id: 'blender-booth',
			type: 'image',
			itemUrl: '/assets-by-page/blender/blender-booth.jpg',
		},
		{
			_id: 'blender-couch',
			type: 'image',
			itemUrl: '/assets-by-page/blender/blender-couch.jpg',
		},
		{
			_id: 'blender-steve',
			type: 'video',
			itemUrl: '/assets-by-page/blender/blender-steve.mp4',
		},
		{
			_id: 'blender-al',
			type: 'video',
			itemUrl: '/assets-by-page/blender/blender-al.mp4',
		},
		{
			_id: 'blender-chair',
			type: 'video',
			itemUrl: '/assets-by-page/blender/blender-chair.mp4',
		},
		{
			_id: 'blender-donut',
			type: 'image',
			itemUrl: '/assets-by-page/blender/blender-donut.jpg',
		},
	]

	return (
		<div
			className='page blender-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: currentName === 'blender' ? 1 : 0.5,
			}}>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<div className='display-item non-project-display-item'>
							<div className='text-container'>
								<h2 className='text'>
									Here are some original blender models I have created. However, much of my experience with blender has been optimizing already built models to
									make them "game ready".
								</h2>
							</div>
							<ItemCarousel data={itemArray} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
