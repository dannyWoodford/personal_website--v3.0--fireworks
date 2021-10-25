import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import React from 'react'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'
import { PropTypes } from 'prop-types'

const DUMMY_VIDEOS = [
	{
		_id: 'blender-al',
		type: 'video',
		itemUrl: '/assets-by-page/blender/blender-al.mp4'
	},
	{
		_id: 'art-5',
		type: 'image',
		itemUrl: '/images/art/art-5.JPG'
	},
]

const SlideItem = ({ url, isSelected, type, name }) => (
	<div className="display-item-wrapper" key={url}>
		{type === 'image' ? 
			<img 
				src={process.env.PUBLIC_URL + url } 
				alt={name} 
				className="displayed-item"
			/> : 
			<ReactPlayer 
				className='react-player' 
				url={process.env.PUBLIC_URL + url} 
				playing={isSelected ? isSelected : false} 
				autoPlay={true}
				loop={false} 
				controls={true}
				volume={.05}
			/>
		}
	</div>
)

const ItemCarousel = ({ data }) => {
	
	const onSwipeStartHandler = () => {
		const displayedVideoItems = document.querySelectorAll('.react-player video')
		
		displayedVideoItems.forEach((videoItem) => {
			videoItem.classList.add('no-pointer-events') 
		})
		
	}

	const onSwipeEndHandler = () => {
		const displayedVideoItems = document.querySelectorAll('.react-player video')

		displayedVideoItems.forEach((videoItem) => {
			videoItem.classList.remove('no-pointer-events') 
		})
		
	}

	const customRenderItem = (item, props) => (
		<item.type {...item.props} {...props}/>
	)

	return (
		<Carousel
			showArrows={true}
			renderItem={customRenderItem}
			emulateTouch={true} 
			swipeable={true}
			infiniteLoop={false} 
			showThumbs={false}
			autoPlay={false} 
			interval={600000}
			centerMode={true}
			onSwipeStart={onSwipeStartHandler}
			onSwipeEnd={onSwipeEndHandler}
		>
			{data.map(item => (
				<SlideItem 
					url={item.itemUrl} 
					type={item.type} 
					name={item._id}
					isSelected={item.isSelected}
					key={item._id ? item._id : item.id} 
				/>
			))}
		</Carousel>
	)
}

SlideItem.propTypes = {
	url: PropTypes.string,
	isSelected: PropTypes.bool,
}

ItemCarousel.propTypes = {
	data: PropTypes.array
}

ItemCarousel.defaultProps = {
	data: DUMMY_VIDEOS,
}

export default ItemCarousel
