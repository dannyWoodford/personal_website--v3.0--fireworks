import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Tooltip } from 'react-tooltip'

import DelayLink from '../DelayLink.js'
import Clock from '../Clock.js'

export default function Home({ currentName, linkToPageHandler }) {
	const delay = 700
	const [iconHasBeenCopied, setIconHasBeenCopied] = useState({
		copyPhoneNumber: false,
		copyEMail: false,
	})

	const resetTooltip = () => {
		setIconHasBeenCopied({
			copyPhoneNumber: false,
			copyEMail: false,
		})
	}

	return (
		<div
			className='page home-page'
			style={{
				transition: 'opacity 2s ease-in-out .6s',
				opacity: currentName === 'home' ? 1 : 0,
			}}>
			<div className='max-width-container'>
				<div className='container'>
					<div className='double-item top-row'>
						{/* <div className='item medium neonText' onClick={() => linkToPageHandler(delay)}>
							<DelayLink to={'/about'} delay={delay} className='nav-link'>
								<div className='item__border'>
									<img
										className='item__image codesandbox-padding'
										draggable='false'
										alt=''
										src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/codesandbox-logo.webp'}
									/>
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/welcome-gif.gif'} />
								</div>
							</DelayLink>
						</div> */}
						<div className='item medium' onClick={() => linkToPageHandler(delay)}>
							<DelayLink to={'/about'} delay={delay} className='nav-link'>
								<div className='item__border'>
									<img
										className='item__image about-padding'
										draggable='false'
										alt=''
										src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/about-me-logo.svg'}
									/>
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/welcome-gif.gif'} />
								</div>
							</DelayLink>
						</div>
						<div className='item neonText large' onClick={() => linkToPageHandler(delay)}>
							<DelayLink to={'/projects/subvrsive'} delay={delay} className='nav-link'>
								<div className='item__border'>
									<h1>Projects</h1>
									{/* <img className="item__image invert-on-hover" draggable="false" alt="" src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/PersonalProjects-logo.png'}/> */}
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/projects-gif.gif'} />
								</div>
							</DelayLink>
						</div>
					</div>
					<div className='double-item'>
						<div className='item' onClick={() => linkToPageHandler(delay)}>
							<DelayLink to={'/blender'} delay={delay} className='nav-link'>
								<div className='item__border'>
									<img
										className='item__image add-padding'
										draggable='false'
										alt=''
										src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/blender-logo.png'}
									/>
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/blender-gif.gif'} />
								</div>
							</DelayLink>
						</div>
						<div className='item' onClick={() => linkToPageHandler(delay)}>
							<DelayLink to={'/art'} delay={delay} className='nav-link'>
								<div className='item__border'>
									<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/art-logo.png'} />
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/art-gif.gif'} />
								</div>
							</DelayLink>
						</div>
					</div>
					<div className='item is-welcome-item'>
						<div className='item__border'>
							<div className='inset-text'>
								<div id='name'>
									<p>DANNY</p>
									<p>WOODFORD</p>
								</div>
								<div id='occupation'>
									<p>3D Developer</p>
									<p>/</p>
									<p>3D Artist</p>
								</div>
							</div>
						</div>
					</div>
					<div className='double-item double-item-clock'>
						<div className='item__clock'>
							<Clock />
						</div>
					</div>
					<a href='https://github.com/dannyWoodford' target='_blank' rel='noopener noreferrer' className='display-contents'>
						<div className='item item-mobile-break'>
							<div className='item__border'>
								<img
									className='item__image add-padding invert-on-hover'
									draggable='false'
									alt=''
									src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/github-logo.png'}
								/>
								<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'} />
							</div>
						</div>
					</a>
					<a href={process.env.PUBLIC_URL + '/technical_Resume_2024.pdf'} target='_blank' rel='noopener noreferrer' className='display-contents'>
						<div className='item small'>
							<div className='item__border'>
								<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/resume-logo.png'} />
								<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'} />
							</div>
						</div>
					</a>
					<span onPointerOut={() => resetTooltip()} className='display-contents'>
						<CopyToClipboard
							onCopy={() => setIconHasBeenCopied({ copyPhoneNumber: true })}
							className='item small'
							text={'9089078680'}
							data-tooltip-id='copy-phone-number'
							data-tooltip-content={iconHasBeenCopied.copyPhoneNumber ? 'Phone number has been copied to clipboard!' : 'Copy phone number to clipboard'}
							data-tip=''
							data-border={true}
							data-border-color='white'
							data-text-color='white'>
							<div className='item small' onPointerOut={() => resetTooltip()}>
								<div className='item__border'>
									<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/phone-logo.png'} />
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'} />
								</div>
							</div>
						</CopyToClipboard>
						<Tooltip id='copy-phone-number' />
					</span>
					<span onPointerOut={() => resetTooltip()} className='display-contents'>
						<CopyToClipboard
							onCopy={() => setIconHasBeenCopied({ copyEMail: true })}
							className='item small'
							text={'daniel.woodford.g@gmail.com'}
							data-tooltip-id='copyEMail'
							data-tooltip-content={iconHasBeenCopied.copyEMail ? 'E-mail has been copied to clipboard!' : 'Copy e-mail to clipboard'}
							data-tip=''
							data-border={true}
							data-border-color='white'
							data-text-color='white'>
							<div className='item small' onPointerOut={() => resetTooltip()}>
								<div className='item__border'>
									<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/email-logo.png'} />
									<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'} />
								</div>
							</div>
						</CopyToClipboard>
						<Tooltip id='copyEMail' />
					</span>
					<a href='https://www.linkedin.com/in/danny-woodford-54b418126/' target='_blank' rel='noopener noreferrer' className='display-contents'>
						<div className='item item-mobile-break'>
							<div className='item__border'>
								<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/linkedIn-logo.png'} />
								<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'} />
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
