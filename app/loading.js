import React from 'react'

const loading = () => {
    return (
        <>
            <div className='relative h-screen'>
                <div className="lds-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><div></div><div></div><div></div><div></div></div>
            </div>
        </>
    )
}

export default loading
