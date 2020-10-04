import React from 'react'


function Header({setOpen}) {
    return (
        <div >
            <div className="hero">
                <h1>
                    Random Things Out Of Mind
                </h1>
                <button className="btn head-btn" onClick={()=> setOpen(true)} >
                    Write
                </button>
            </div>
        </div>
    )
}

export default Header
