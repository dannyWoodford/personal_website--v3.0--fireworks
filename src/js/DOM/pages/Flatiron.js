import React from 'react'

export default function Flatiron({...props}) {

    const menuStateCurrentName = props.menuState.currentName

    return (
        <div className='page flatiron-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: menuStateCurrentName === 'flatiron' ? 1 : 0,
			}}
		>
			<div className='max-width-container'>
				<div className='container'>
					<div className='flatiron-container' >
						<h1>flatiron</h1>
						<p>Former carpenter turned full-stack developer in the pursuit of more challenging and ornate work. Renovating and building houses exposed a passion for engineering and building where I learned to see big jobs through from stflatiron to finish independently. I graduated from the Flatiron School where I learned JavaScript, React, Ruby, and Ruby on Rails mainly, and discovered canvas for the first time. While there I stflatironed and lead the first cross-discipline collaboration event. In my personal life, I like to write jokes and make things like paintings, replica movie props, woodworking projects for fun. I am a semi-professional stand-up comedian and a pflatiron from doing it for the love of it I believe to grow as a person you must chase the things that make you inherently anxious such as expressing ideas publicly or overcoming failure; along with creative problem solving, skills I now consider to be some of my greatest strengths.</p>
					</div>
				</div>
			</div>
		</div>
    )
}
