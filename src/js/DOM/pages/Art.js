import React from 'react'
import ItemCarousel from '../ItemCarousel.js'

export default function Art({ ...props }) {
	const menuStateCurrentName = props.menuState.currentName

	const itemArray = [
		{
			_id: 'art-1',
			type: 'image',
			itemUrl: '/assets-by-page/art/art-1.jpeg',
		},
		{
			_id: 'art-7',
			type: 'image',
			itemUrl: '/assets-by-page/art/art-7.JPG',
		},
		{
			_id: 'art-2',
			type: 'image',
			itemUrl: '/assets-by-page/art/art-2.jpeg',
		},
		{
			_id: 'art-3',
			type: 'image',
			itemUrl: '/assets-by-page/art/art-3.jpeg',
		},
		{
			_id: 'art-4',
			type: 'image',
			itemUrl: '/assets-by-page/art/art-4.jpeg',
		},
		{
			_id: 'art-5',
			type: 'image',
			itemUrl: '/assets-by-page/art/art-5.JPG',
		},
		{
			_id: 'art-6',
			type: 'image',
			itemUrl: '/assets-by-page/art/art-6.JPG',
		},
	]

	return (
		<div
			className='page art-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'art' ? 1 : 0,
			}}>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<div className='display-item non-project-display-item'>
							<div className='text-container'>
								<h2 className='text'>
									I've added a few paintings/drawings I've done which may not seem relevant but gives credence to my visual sense which I believe to be hugely
									important to animation and 3D in general because of their visual/spacial nature.
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
