import React from 'react'

export default function About({...props}) {

    const menuStateCurrentName = props.menuState.currentName

    return (
        <div 
            className='page about-page'
            style={{
                opacity: menuStateCurrentName === 'about' ? 1 : 0
            }}
        >
            <div className='container'>
                <h1>About</h1>
            </div>
        </div>
    )
}
