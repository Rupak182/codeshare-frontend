import React from 'react'

const Header = () => {
    return (
        <>
            <div className="top flex flex-col gap-4 items-center justify-center">
                <img src="NoteCodeLogo.svg" alt="" />
                <span className='font-bold text-2xl'>Create & Share</span>
                <span className='font-bold text-3xl '>Your Code easily</span>
            </div>
        </>
    )
}

export default Header
