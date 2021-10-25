import React, { useState} from 'react'
import ReactPlayer from 'react-player'

export default function Brandgage({...props}) {
    
    const menuStateCurrentName = props.menuState.currentName
	const [displayItem, setDisplayItem] = useState(
		{
			_id: '',
			name: "",
			description: '',
			language: "",
			github: "",
			type: 'image',
			itemUrl: '/placeholder.jpg'
		},
	)
	const [displayItemSelected, setDisplayItemSelected] = useState(false)

	const itemArray = [
		{
			_id: 'Merck 3D',
			name: "Merck 3D",
			description: 'VR experience created for pharmaceutical trade shows.',
			language: "JavaScript / Three.js / Twig / PHP / SASS",
			demo: 'https://3d.gesvirtualexhibits.com/show/gjk39k/esmo-2021/',
			type: 'video',
			itemUrl: '/assets-by-page/brandgage/msd.mp4'
		},
		{
			_id: 'Pfizer Cibinqo',
			name: "Pfizer Cibinqo",
			description: 'VR experience created for pharmaceutical trade shows.',
			language: "JavaScript / Three.js / Twig / PHP / SASS",
			demo: 'https://cibinqovirtualexperience.com/show/zx93mk/aad-2021/',
			type: 'video',
			itemUrl: '/assets-by-page/brandgage/Cibinqo.mp4'
		},
		{
			_id: 'Pfizer Rare Disease',
			name: "Pfizer Rare Disease",
			description: 'Virtual Booth created for pharmaceutical trade shows.',
			language: "JavaScript / Three.js / Twig / PHP / SASS",
			demo: 'https://pfizerrarediseasecongressresources.com/show/jl09pa/endo-2021/',
			type: 'video',
			itemUrl: '/assets-by-page/brandgage/Pfizer-Rare-Disease.mp4'
		},
		{
			_id: 'Takeda',
			name: "Takeda",
			description: 'Virtual Booth created for pharmaceutical trade shows.',
			language: "JavaScript / Three.js / Twig / PHP / SASS",
			demo: 'https://everymileofthejourney.com/show/booth/',
			type: 'video',
			itemUrl: '/assets-by-page/brandgage/Takeda-demo.mp4'
		},
		{
			_id: 'R&D 3D Virtual Booth',
			name: "R&D 3D Virtual Booth",
			description: 'Experimental Virtual Booth I am building alone as an R&D project for Brandgage. It is the same as the next project but with many of the features to edit the scene taken out as the idea evolved from a Virtual Booth Builder to a Virtual Booth Experience. However, the model used in this version is greatly improved and loads 12 times faster after I baked the lighting, normal maps, etc, reduced the poly count by 97%, and consolidated textures by UV-mapping multiple meshes to use the same texture to save space.',
			language: "React / React-Three-Fiber",
			demo: 'http://phpstack-95367-1945343.cloudwaysapps.com/baked-models-live-lights-working-nav/',
			type: 'video',
			itemUrl: '/assets-by-page/brandgage/R&D.mp4'
		},
		{
			_id: 'R&D 3D Virtual Booth (Earlier Version)',
			name: "R&D 3D Virtual Booth (Earlier Version)",
			description: 'An earlier version of the previous project. Originally the idea was a Virtual Booth Builder/Editor, so many of the objects can be transformed and select meshes edited. However, this was before I optimized the model.',
			language: "React / React-Three-Fiber",
			demo: 'https://phpstack-95367-1945343.cloudwaysapps.com/drag-and-drop-reduced-models/',
			type: 'video',
			itemUrl: '/assets-by-page/brandgage/R&D-previous.mp4'
		},
	]

	const displayItems = itemArray.map(item => (
		<div className="item" key={item._id} onClick={() => updateDisplayItem(item)}>
			<div className="item__border">
				<div className="item__thumbnail">
					<p className="item__title">
						{item._id}
					</p>
				</div>
			</div>
		</div>
	))

	const updateDisplayItem = (item) => {
		setDisplayItem(item)
		setDisplayItemSelected(true)
	}

    return (
        <div className='page brandgage-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'brandgage' ? 1 : 0,
			}}
		>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<div className="display-item">
							<div className="display-item-image" style={{display: displayItem.type === 'image' ? 'block' : 'none'}}>
								<img className="display-item-target" alt="" src={process.env.PUBLIC_URL + displayItem.itemUrl} style={{opacity: !displayItemSelected ? 0 : 1}}/>
							</div>
							<div className="display-item-video" style={{display: displayItem.type === 'video' ? 'block' : 'none'}}>
								<ReactPlayer 
									className='react-player' 
									url={process.env.PUBLIC_URL + displayItem.itemUrl} 
									playing={true} 
									autoPlay={true}
									loop={true}
									controls={false}
									muted={true}
								/>
							</div>
							<div className="display-item-description" style={{display: displayItemSelected ? 'block' : 'none'}}>
								<p><span className="strong">Name:</span> {displayItem.name}</p>
								<p style={{display: displayItem.description ? 'block' : 'none'}}><span className="strong">Description:</span> {displayItem.description}</p>
								<p style={{display: displayItem.language ? 'block' : 'none'}}><span className="strong">Built with:</span> {displayItem.language}</p>
								<div className="link-container">
									<a href={displayItem.github} target="_blank" rel="noreferrer" className="link" style={{display: displayItem.github ? 'block' : 'none'}}>Github</a>
										<span className="link-separator" style={{display: displayItem.demo && displayItem.github ? 'block' : 'none'}}>|</span>
									<a href={displayItem.demo} target="_blank" rel="noreferrer" className="link" style={{display: displayItem.demo ? 'block' : 'none'}}>Demo</a>
								</div>
							</div>
						</div>
							<p>** Websites are up during the dates of the trade show it was built for so links may or may not work. **</p>
						<div className="display-items-container">
							{displayItems}
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}
