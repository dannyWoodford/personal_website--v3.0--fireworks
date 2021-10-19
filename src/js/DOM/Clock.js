import React, {useState} from 'react'

export default function Clock() {

	const [time, setTime] = useState(new Date())

	const timerId = setInterval(() => {
		setTime(new Date())
	}, 1000)

	clearInterval(timerId)

    return (
		<div className="clock-border-outer">
			<div className="clock-border">
				<div className="clock-border-inner">
					<div className="clock-body">
						<div className="clock">
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
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
							<section className="clock__indicator"></section>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}