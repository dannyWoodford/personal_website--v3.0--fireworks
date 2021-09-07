import React from 'react'

export default function Skills({...props}) {

    const menuStateCurrentName = props.menuState.currentName

    return (
        <div 
            className='page skills-page'
            style={{
                opacity: menuStateCurrentName === 'skills' ? 1 : 0
            }}
        >
            <div 
                className='container'
                // style={{
                //     opacity: menuStateCurrentName === 'skills' ? 1 : 0
                // }}
            >
                <h1>Skills</h1>
            </div>
        </div>
    )
}
