import React from 'react'
import { Link } from 'react-router-dom'
import useProjectStore from '../../../../../store/ProjectStore.tsx'

export default function CategorySwitchContainer() {
	const {
		displayCategoriesObject,
		displayCategory,
		updateDisplayCategory,
	} = useProjectStore()

	return (
		<div className='tab-switch-container'>
			<div className={`item quarter ${displayCategory === 'flatiron' ? 'category--selected' : ''}`}>
				<Link className='item__border' onClick={() => updateDisplayCategory('flatiron')} to={'/projects/flatiron'}>
					<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/flatiron-logo.png'} />
					<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/flatiron-gif.gif'} />
				</Link>
				<h3 className='duration'>{displayCategoriesObject['flatiron'].duration}</h3>
			</div>
			<div className={`item quarter ${displayCategory === 'personalProjects' ? 'category--selected' : ''}`}>
				<Link className='item__border' onClick={() => updateDisplayCategory('personalProjects')} to={'/projects/personalProjects'}>
					<img
						className='item__image invert-on-hover'
						draggable='false'
						alt=''
						src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/personal-projects-logo.png'}
					/>
					<img alt='' className='item__image hover-image blur-on-hover' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/welcome-gif.gif'} />
				</Link>
				<h3 className='duration'>{displayCategoriesObject['personalProjects'].duration}</h3>
			</div>
			<div className={`item quarter ${displayCategory === 'brandgage' ? 'category--selected' : ''}`}>
				<Link className='item__border' onClick={() => updateDisplayCategory('brandgage')} to={'/projects/brandgage'}>
					<img
						className='item__image'
						draggable='false'
						alt=''
						src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/brandgage-logo.png'}
					/>
					<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/brandgage-gif.gif'} />
				</Link>
				<h3 className='duration'>{displayCategoriesObject['brandgage'].duration}</h3>
			</div>
			<div className={`item quarter ${displayCategory === 'rocket' ? 'category--selected' : ''}`}>
				<Link className='item__border' onClick={() => updateDisplayCategory('rocket')} to={'/projects/rocket'}>
					<img
						className='item__image add-padding'
						draggable='false'
						alt=''
						src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/rocket-logo.png'}
					/>
					<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/acme-gif.gif'} />
				</Link>
				<h3 className='duration'>{displayCategoriesObject['rocket'].duration}</h3>
			</div>
			<div className={`item medium ${displayCategory === 'atlas' ? 'category--selected' : ''}`}>
				<Link className='item__border' onClick={() => updateDisplayCategory('atlas')} to={'/projects/atlas'}>
					<img
						className='item__image add-padding back-drop'
						draggable='false'
						alt=''
						src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/atlas-resize.png'}
					/>
					<img alt='' className='item__image hover-image blur-on-hover-low' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/atlas-gif.gif'} />
				</Link>
				<h3 className='duration'>{displayCategoriesObject['atlas'].duration}</h3>
			</div>
			<div className={`item medium ${displayCategory === 'quest' ? 'category--selected' : ''}`}>
				<Link className='item__border' onClick={() => updateDisplayCategory('quest')} to={'/projects/quest'}>
					<img
						className='item__image add-padding back-drop-strong back-drop-stronger-on-hover'
						draggable='false'
						alt=''
						src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/quest-logo.png'}
					/>
					<img alt='' className='item__image hover-image blur-on-hover-low' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/city-gif.gif'} />
				</Link>
				<h3 className='duration'>{displayCategoriesObject['quest'].duration}</h3>
			</div>
			<div className={`item medium ${displayCategory === 'subvrsive' ? 'category--selected' : ''}`}>
				<Link className='item__border' onClick={() => updateDisplayCategory('subvrsive')} to={'/projects/subvrsive'}>
					<img
						className='item__image add-padding back-drop-strong-on-hover'
						draggable='false'
						alt=''
						src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/subvrisve-logo.svg'}
					/>
					<img
						alt=''
						className='item__image hover-image blur-on-hover-low'
						src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/memorey-maker-sizzle-2.gif'}
					/>
				</Link>
				<h3 className='duration'>{displayCategoriesObject['subvrsive'].duration}</h3>
			</div>
		</div>
	)
}
