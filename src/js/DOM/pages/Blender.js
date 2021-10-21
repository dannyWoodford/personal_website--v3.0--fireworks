import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Blender({...props}) {
    const menuStateCurrentName = props.menuState.currentName

	const itemArray = [
		{
			name: 'blender-video-1',
			type: 'video',
			url: '/blender/blender-1.mov'
		},
		{
			name: 'blender-video-2',
			type: 'video',
			url: '/blender/blender-2.mov'
		},
		{
			name: 'blender-video-3',
			type: 'video',
			url: '/blender/blender-4.mov'
		},
		{
			name: 'blender-1',
			type: 'image',
			url: '/images/blender/blender-4.png'
		},
	]

	const displayItems = itemArray.map(item => (
		<div className="item-wrapper" key={item.name}>
			{item.type === 'image' ? 
				<img src={process.env.PUBLIC_URL + item.url } alt={item.name} /> : 
				<video src={process.env.PUBLIC_URL + item.url } className='video-item' autoPlay loop controls ></video>
			}
		</div>
	))

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
						{/* <h2>I've added a few paintings/drawings I've done which may not seem relevant but gives credence to my visual sense which I believe to be hugely important to animation and 3D in general because of their visual/spacial nature.</h2> */}
						<div className="display-item" >
							<Carousel 
								emulateTouch={true} 
								swipeable={true}
								dynamicHeight={true} 
								infiniteLoop={false} 
								showThumbs={false}
								autoPlay={false} 
								interval={600000}
								centerMode={true}
							>
								{displayItems}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
