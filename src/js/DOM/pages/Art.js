import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Art({...props}) {
    const menuStateCurrentName = props.menuState.currentName

	const itemArray = [
		{
			name: 'art-1',
			type: 'image',
			url: '/images/art/art-1.jpeg'
		},
		{
			name: 'art-2',
			type: 'image',
			url: '/images/art/art-2.jpeg'
		},
		{
			name: 'art-video-1',
			type: 'video',
			url: '/videos/Chess-demo.mp4'
		},
		{
			name: 'art-3',
			type: 'image',
			url: '/images/art/art-3.jpeg'
		},
		{
			name: 'art-video-2',
			type: 'video',
			url: '/videos/3d-spotify-visualizer-trimmed.mp4'
		},
		{
			name: 'art-4',
			type: 'image',
			url: '/images/art/art-4.jpeg'
		},
		{
			name: 'art-5',
			type: 'image',
			url: '/images/art/art-5.JPG'
		},
		{
			name: 'art-6',
			type: 'image',
			url: '/images/art/art-6.JPG'
		},
		{
			name: 'art-7',
			type: 'image',
			url: '/images/art/art-7.JPG'
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

	const changeHandler = (index, item) => {
		console.log('index', index)
		console.log('item', item.props.children)
	}

    return (
        <div className='page art-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'art' ? 1 : 0,
			}}
		>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<h2>I've added a few paintings/drawings I've done which may not seem relevant but gives credence to my visual sense which I believe to be hugely important to animation and 3D in general because of their visual/spacial nature.</h2>
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
								onChange={(index, item) => changeHandler(index, item)}
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
