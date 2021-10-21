import React, {useState} from 'react'

export default function Clock() {

	const [time, setTime] = useState(new Date())

	const timerId = setInterval(() => {
		setTime(new Date())
	}, 1000)

	clearInterval(timerId)

    return (
		<div className="clock-border-outer">
			<div className="clock">
				<div className="hex-outer-1">
					<div className="hex-body"></div>
					<div className="hex-shadow"></div>
				</div>
				<div className="hex-outer-2">
					<div className="hex-body"></div>
					<div className="hex-shadow"></div>
				</div>
				<div className="hex-middle-1 orange-hex">
					<div className="hex-body"></div>
					<div className="hex-shadow"></div>
				</div>
				<div className="hex-middle-2">
					<div className="hex-body"></div>
					<div className="hex-shadow"></div>
				</div>
				<div className="hex-inner-1">
					<div className="hex-body"></div>
					<div className="hex-shadow"></div>
				</div>
				<div className="hex-inner-2 orange-hex">
					<div className="hex-body"></div>
					<div className="hex-shadow"></div>
				</div>

				<div className='clock__hour'
					style={{transform: `rotateZ(${time.getHours() * 30 }deg)`,}}
				/>
				<div
					className='clock__minute'
					style={{transform: `rotateZ(${time.getMinutes() * 6 }deg)`,}}
				/>
				<div
					className='clock__second'
					style={{transform: `rotateZ(${time.getSeconds() * 6 }deg)`,}}
				/>
				
				<div className="clock__axis"></div>
				<div className="clock__axis__hex"></div>
			</div>
			<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
					<filter id="round">
						<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />    
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
						<feComposite in="SourceGraphic" in2="goo" operator="atop"/>
					</filter>
				</defs>
			</svg>
		</div>
	)
}