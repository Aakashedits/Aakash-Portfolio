import React from 'react'

const Header = () => {
  return (
    <div className="fixed z-40 top-8 mx-auto left-0 right-0 w-fit h-fit px-8 py-2 bg-slate-900/25 rounded-full backdrop-blur-2xl text-sm flex gap-4 items-center">
        <span>Content</span>
        <div className="h-1 w-1 rounded-full bg-primary-gold"></div>
        <span>Connect</span>
    </div>
  )
}

export default Header