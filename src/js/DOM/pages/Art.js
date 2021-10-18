import React, { useState} from 'react'

export default function Art({...props}) {

    const menuStateCurrentName = props.menuState.currentName

	const artArray = [
		{
			name: 'art-1',
			type: 'image',
			png: '/images/art/sunrise.png'
		},
		{
			name: 'art-2',
			type: 'image',
			png: '/images/art/storm.png'
		},
		{
			name: 'art-3',
			type: 'image',
			png: '/images/art/Notflix.png'
		},
	]

	const displayArtItems = artArray.map(item => (
		<div className="item" key={item.name} onClick={() => updateDisplayArt(item.png)}>
			<div className="item__border">
				<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + item.png }/>
			</div>
		</div>
	));

	const [displayArtSrc, setDisplayArtSrc] = useState('/images/art/sunrise.png')
	const [displayArtSelected, setDisplayArtSelected] = useState(false)

	const updateDisplayArt = (itemSrc) => {
		setDisplayArtSrc(itemSrc)
		setDisplayArtSelected(true)
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
					<div className='art-container'>
						<div className="display-art">
							<img className="display-art-image" alt="" src={process.env.PUBLIC_URL + displayArtSrc} style={{opacity: !displayArtSelected ? 0 : 1}}/>
						</div>
						<h2>I've added a few paintings/drawings I've done which may not seem relevant but gives credence to my visual sense which I believe to be hugely important to animation and 3D in general because of their visual/spacial nature.</h2>
						{displayArtItems}
					</div>
				</div>
			</div>
		</div>
    )
}
