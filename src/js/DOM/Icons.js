import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';

export default function Icons() {

	const [iconHasBeenCopied, setIconHasBeenCopied] = useState(
		{
			copyPhoneNumber: false,
			copyEMail: false
		}
	)

	const resetTooltip = () => {
		setIconHasBeenCopied({
			copyPhoneNumber: false,
			copyEMail: false
		})
	}

    return (
		<div className='icon-container'>
			<span>
				<a href='https://www.linkedin.com/in/danny-woodford-54b418126/' target='_blank' rel='noopener noreferrer' className='copy-icon'>
					<img src={process.env.PUBLIC_URL + '/icons/linkedin.svg'} alt='linkedin-icon'/>
				</a>
			</span>
			<span>
				<a href={process.env.PUBLIC_URL + '/Resume.pdf'} target='_blank' rel='noopener noreferrer' className='copy-icon'>
					<img src={process.env.PUBLIC_URL + '/icons/resume.svg'} alt='resume-icon' />
				</a>
			</span>
			<span 
				onPointerOut={() => resetTooltip()}
			>
				<CopyToClipboard 
					onCopy={() => setIconHasBeenCopied({copyPhoneNumber: true})} 
					className='copy-icon' 
					text={'daniel.woodford.g@gmail.com'} 
					data-for='copyPhoneNumber' 
					data-tip=''
					data-border={true} 
					data-border-color='white' 
					data-text-color='white' 
				>
					<img src={process.env.PUBLIC_URL + '/icons/mail.svg'} alt='mail-icon'/>
				</CopyToClipboard>
			</span>
			<span 
				onPointerOut={() => resetTooltip()}
			>
				<CopyToClipboard 
					onCopy={() => setIconHasBeenCopied({copyEMail: true})} 
					className='copy-icon' 
					text={'9089078680'} 
					data-for='copyEMail' 
					data-tip=''
					data-border={true} 
					data-border-color='white' 
					data-text-color='white' 
				>
					<img src={process.env.PUBLIC_URL + '/icons/phone.svg'} alt='phone-icon'/>
				</CopyToClipboard>
			</span>
			<ReactTooltip id='copyPhoneNumber' getContent={() => iconHasBeenCopied.copyPhoneNumber ? 'E-mail has been copied to clipboard!' : 'Copy e-mail to clipboard'}/>
			<ReactTooltip id='copyEMail' getContent={() => iconHasBeenCopied.copyEMail ? 'Phone number has been copied to clipboard!' : 'Copy phone number to clipboard'}/>
		</div>
	)
}
