import React from 'react'

export default function Icons() {
    return (
		<div className='icon-container'>
			<span>
				<a href='https://www.linkedin.com/in/danny-woodford-54b418126/' target='_blank' rel='noopener noreferrer'>
					<img src={process.env.PUBLIC_URL + '/icons/linkedin.svg'} alt='linkedin-icon'/>
				</a>
			</span>
			<span>
				<a href='https://github.com/dannyWoodford' target='_blank' rel='noopener noreferrer'>
					<img src={process.env.PUBLIC_URL + '/icons/resume.svg'} alt='resume-icon' />
				</a>
			</span>
			<span title={'Copy e-mail to clipboard'}>
				<a href='mailto:daniel.woodford.g@gmail.com' target='_blank' rel='noopener noreferrer'>
					<img  src={process.env.PUBLIC_URL + '/icons/mail.svg'} alt='mail-icon'/>
				</a>
			</span>
			<span title={'Copy phone number to clipboard'}>
				<a href='tel:9089078680' target='_blank' rel='noopener noreferrer'>
					<img src={process.env.PUBLIC_URL + '/icons/phone.svg'} alt='phone-icon'/>
				</a>
			</span>
		</div>
	)
}
