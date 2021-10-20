import React, { useState} from 'react'

export default function Flatiron({...props}) {
    
    const menuStateCurrentName = props.menuState.currentName
	const [displayItemSrc, setDisplayItemSrc] = useState('/images/placeholder.jpg')
	const [displayItemSelected, setDisplayItemSelected] = useState(false)

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
			name: 'art-3',
			type: 'image',
			url: '/images/art/art-3.jpeg'
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
		<div className="item" key={item.name} onClick={() => updateDisplayItem(item.url)}>
			<div className="item__border">
				<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + item.url }/>
			</div>
		</div>
	))

	const updateDisplayItem = (itemSrc) => {
		setDisplayItemSrc(itemSrc)
		setDisplayItemSelected(true)
	}

    return (
        <div className='page flatiron-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'flatiron' ? 1 : 0,
			}}
		>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<div className="display-item">
							<img className="display-item-target" alt="" src={process.env.PUBLIC_URL + displayItemSrc} style={{opacity: !displayItemSelected ? 0 : 1}}/>
						</div>
						<h2>I've added a few paintings/drawings I've done which may not seem relevant but gives credence to my visual sense which I believe to be hugely important to animation and 3D in general because of their visual/spacial nature.</h2>
						{displayItems}
					</div>
				</div>
			</div>
		</div>
    )
}
