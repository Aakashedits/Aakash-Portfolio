import React from 'react'
import akash from "../../assets/akash.jpeg"
import { CiMail, CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";

const Connect = () => {
  return (
    <div className="h-fit w-full bg-primary-dark z-20 py-12 px-12 sm:px-20 2xl:px-40 xl:grid xl:grid-cols-[3fr_2fr] items-center gap-40 text-white">
        <div className="flex flex-col md:flex-row gap-8">
            <img className="rounded-md w-full sm:w-auto md:min-w-120 aspect-4/3 object-cover" src={akash}/>
            <div>
                <p className="text-2xl">ABOUT ME</p>
                <div className="w-10 border border-primary-gold"></div>
                <p className="mt-4 font-roboto font-light">
                    I don't just edit footage. I edit feeling.
                    I'm a director and editor with 3–5 years of work across short films, and YouTube content. Every project I touch starts with one question: what should the audience feel right now?
                    My background in direction means I understand a scene before I cut it — I know why a shot was taken, what the performance is doing, and where the emotion lives. That instinct doesn't come from software. It comes from being on set, working with real people, and caring about the story above everything else.
                </p>
                <p className="mt-2 font-roboto font-light">
                    I don't believe in effects that distract. I believe in edits that disappear — where the cut feels inevitable, the pacing feels alive, and the story lands exactly the way it should.
                    This is that work. Take a look.
                </p>
            </div>
        </div>
        <div className="sm:h-full mt-8 xl:mt-0">
            <p className="text-2xl">LET'S CONNECT</p>
            <div className="w-10 border border-primary-gold"></div>
            <a href="" className="flex gap-4 mt-4 items-center"><CiMail className="text-primary-gold text-4xl" />https://www.youtube.com/@PocketProductions.p2</a>
            <a href="https://www.youtube.com/@PocketProductions.p2" className="flex gap-4 mt-4 text-white sm:whitespace-nowrap items-center"><PiYoutubeLogoLight className="text-primary-gold text-4xl font-light" />https://www.youtube.com/@PocketProductions.p2</a>
            <a href="https://www.instagram.com/akkioo111/" className="flex gap-4 mt-4 items-center"><CiInstagram className="text-primary-gold text-4xl" />https://www.instagram.com/akkioo111/</a>
        </div>

    </div>
  )
}

export default Connect