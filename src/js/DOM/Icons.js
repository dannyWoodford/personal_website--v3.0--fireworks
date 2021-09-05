import React from 'react'

export default function Icons() {
    return (
		<div className='icon-container'>
			<a href='https://www.linkedin.com/in/danny-woodford-54b418126/' target='_blank' rel='noopener noreferrer'>
				<img id='linkedin-icon' src={process.env.PUBLIC_URL + '/icons/linkedin.svg'} alt='linkedin-icon'/>
			</a>
			<a href='https://github.com/dannyWoodford' target='_blank' rel='noopener noreferrer'>
				<img id='github-icon' src={process.env.PUBLIC_URL + '/icons/github.svg'} alt='github-icon' />
			</a>
			<a href='mailto:daniel.woodford.g@gmail.com' target='_blank' rel='noopener noreferrer'>
				<img id='mail-icon' src={process.env.PUBLIC_URL + '/icons/mail.svg'} alt='mail-icon'/>
			</a>
			<a href='tel:9089078680' target='_blank' rel='noopener noreferrer'>
				<img id='phone-icon' src={process.env.PUBLIC_URL + '/icons/phone.svg'} alt='phone-icon'/>
			</a>
		</div>
	)
}
