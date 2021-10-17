import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';

import DelayLink from '../DelayLink.js'
import Clock from '../Clock.js'

export default function Projects({...props}) {
    const menuStateCurrentName = props.menuState.currentName
	const delay = 700
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
        <div 
            className='page projects-page'
            style={{
                transition: 'opacity 2s ease-in-out .6s',
                opacity: menuStateCurrentName === 'home' ? 1 : 0,
            }}
        >	
            <div className='max-width-container'>
				<div className='container'>
					<div className="item medium">
						<div className="item__border">
							<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/flatiron-logo.png'}/>
							<img alt="" className="item__image hover-image" src={process.env.PUBLIC_URL + '/gifs/projects/flatiron-gif.gif'} />
						</div>
					</div>
					<div className="item medium">
						<div className="item__border">
							<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/brandgage-logo.png'}/>
							<img alt="" className="item__image hover-image" src={process.env.PUBLIC_URL + '/gifs/projects/brandgage-gif.gif'} />
						</div>
					</div>  
					<div className="item medium">
						<div className="item__border">
							<img className="item__image inver-on-hover" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/projects-logo.png'}/>
							<img alt="" className="item__image hover-image" src={process.env.PUBLIC_URL + '/gifs/projects/projects-gif.gif'} />
						</div>
					</div>  
					<div className="double-item">
						<div className="item">
							<div className="item__border">
								<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/blender-logo.png'}/>
								<img alt="" className="item__image hover-image" src={process.env.PUBLIC_URL + '/gifs/projects/blender-gif.gif'} />
							</div>
						</div>
						<div className="item" onClick={() => props.linkToPageHandler(delay)}>
							<DelayLink to={'/about'} delay={delay} className="nav-link">
								<div className="item__border">
									<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/art-logo.png'}/>
									<img alt="" className="item__image hover-image" src={process.env.PUBLIC_URL + '/gifs/projects/art-gif.gif'} />
								</div>
							</DelayLink>
						</div>
					</div>
					<div className="item is-welcome-item">
						<div className="item__border">
							<div className="text">
								<div id='name'><p>DANNY WOODFORD</p></div>
								<div id='occupation'><p>3D Web Developer</p></div>
							</div>
						</div>
					</div>
					<div className="double-item">
					<div className="item">
							<div className="item__border">
								<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/blender-logo.png'}/>
								<img alt="" className="item__image hover-image" src={process.env.PUBLIC_URL + '/gifs/projects/blender-gif.gif'} />
							</div>
						</div>
						<div className="item item__clock">
							<Clock />
						</div>
					</div>
					{/* <div className="double-item">
						<div className="item">
							<div className="item__border">
								<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/art-logo.png'}/>
								<img alt="" className="item__image hover-image" src={process.env.PUBLIC_URL + '/gifs/projects/art-gif.gif'} />
							</div>
						</div>
						<div className="item">
							<div className="item__border">
								<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/blender-logo.png'}/>
								<img alt="" className="item__image hover-image" src={process.env.PUBLIC_URL + '/gifs/projects/blender-gif.gif'} />
							</div>
						</div>
					</div> */}
					<div className="item" onClick={() => props.linkToPageHandler(delay)}>
						<DelayLink to={'/about'} delay={delay} className="nav-link">
							<div className="item__border">
								<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/about-me-logo.png'}/>
								<img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
							</div>
						</DelayLink>
					</div>
					<a href={process.env.PUBLIC_URL + '/Danny_Woodford_Resume.pdf'} target='_blank' rel='noopener noreferrer' className='display-contents'>
						<div className="item small">
							<div className="item__border">
								<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/resume-logo.png'}/>
								<img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
							</div>
						</div>
					</a>
					<span 
						onPointerOut={() => resetTooltip()}
						className='display-contents'
					>  
						<CopyToClipboard 
							onCopy={() => setIconHasBeenCopied({copyPhoneNumber: true})} 
							className='item small' 
							text={'9089078680'} 
							data-for='copyPhoneNumber' 
							data-tip=''
							data-border={true} 
							data-border-color='white' 
							data-text-color='white' 
						>
							<div className="item small" onPointerOut={() => resetTooltip()}>
								<div className="item__border">
								<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/phone-logo.png'}/>
							<img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
								</div>
							</div>  
						</CopyToClipboard>
						<ReactTooltip id='copyPhoneNumber' getContent={() => iconHasBeenCopied.copyPhoneNumber ? 'Phone number has been copied to clipboard!' : 'Copy phone number to clipboard'}/>
					</span>
					<span 
						onPointerOut={() => resetTooltip()}
						className='display-contents'
					>  
						<CopyToClipboard 
							onCopy={() => setIconHasBeenCopied({copyEMail: true})} 
							className='item small' 
							text={'daniel.woodford.g@gmail.com'} 
							data-for='copyEMail' 
							data-tip=''
							data-border={true} 
							data-border-color='white' 
							data-text-color='white' 
						>
							<div className="item small" onPointerOut={() => resetTooltip()}>
								<div className="item__border">
										<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/email-logo.png'}/>
										<img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
								</div>
							</div>  
						</CopyToClipboard>
						<ReactTooltip id='copyEMail' getContent={() => iconHasBeenCopied.copyEMail ? 'E-mail has been copied to clipboard!' : 'Copy e-mail to clipboard'}/>
					</span>
					<a href='https://www.linkedin.com/in/danny-woodford-54b418126/' target='_blank' rel='noopener noreferrer' className='display-contents'>
						<div className="item">
							<div className="item__border">
								<img className="item__image" draggable="false" alt="" src={process.env.PUBLIC_URL + '/images/projects/thumbnails/linkedIn-logo.png'}/>
								<img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
							</div>
						</div>
					</a>
				</div>
            </div>
        </div>
    )
}
