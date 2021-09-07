import React from 'react'

export default function Projects({...props}) {

    const menuStateCurrentName = props.menuState.currentName

    return (
        <div 
            className='page projects-page'
            style={{
                opacity: menuStateCurrentName === 'projects' ? 1 : 0
            }}
        >
            <div className='container'>
                <h1>Projects</h1>
            </div>
        </div>
    )
}
