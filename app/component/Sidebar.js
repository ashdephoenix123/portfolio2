import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='ml-4 w-1/2 border-2 bg-gray-50 border-gray-100 text-black rounded-lg p-4 self-start max-[880px]:ml-0 max-[880px]:w-full dark:bg-gray-600 dark:border-gray-600 dark:text-zinc-300'>
            <h2 className='font-semibold text-2xl dark:text-neutral-300 mb-2'>Note about Blogs</h2>
            <p className='mb-4 text-sm'>If you want to publish your writin then please get in touch with me. I will be happy to serve your blog on my website. If you want to publish your writin then please get in touch with me. I will be happy to serve your blog on my website. If you want to publish your writin then please get in touch with me. I will be happy to serve your blog on my website.</p>
            <Link href='/' className='btn'>Send</Link>
        </div>
    )
}

export default Sidebar
