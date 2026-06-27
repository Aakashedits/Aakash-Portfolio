import React from 'react'
import { CiMail, CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";

const Connect = () => {
  return (
    <div className="h-fit w-full bg-primary-dark z-20 py-12 px-12 3xl:py-20 sm:px-20 2xl:px-40 3xl:grid 3xl:grid-cols-[3fr_2fr] items-center gap-40 text-white">
        <div className="flex flex-col md:flex-row gap-8">
            <img className="rounded-md w-full sm:w-auto md:min-w-120 aspect-4/3 object-cover" src="https://res.cloudinary.com/dbyzyzx7p/image/upload/v1782230287/PROFILE_PIC_CHOTI_dycosa.webp"/>
            <div>
                <p className="text-3xl">ABOUT ME</p>
                <div className="w-10 border border-primary-gold"></div>
                <p className="mt-4 font-roboto font-light">
                    I don't just edit footage. I edit feeling.
                    3–5 years across short films and YouTube. 
                    <br />
                    <br />
                    Every project starts with the same question: what should the audience feel right now?
                    My background in direction means I understand a scene before I cut it, the shot, the performance, where the emotion lives. That instinct comes from being on set, not from software.
                    No distracting effects. Just edits that disappear cuts that feel inevitable, pacing that feels alive, stories that land.
                    This is that work.
                </p>
                <img className="h-20 mt-4" src="https://res.cloudinary.com/dbyzyzx7p/image/upload/v1782235216/akkisin2_dtqdqt.webp" alt="Aakash's Signature " />
            </div>
        </div>
        <div className="sm:h-full mt-8 3xl:mt-0">
            <p className="text-3xl">LET'S CONNECT</p>
            <div className="w-16 border border-primary-gold"></div>
            <a href="mailto:aakashedit4u@gmail.com" className="flex gap-4 mt-4 items-center break-all"><CiMail className="text-primary-gold text-4xl" />aakashedit4u@gmail.com</a>
            <a href="https://www.youtube.com/@PocketProductions.p2" className="flex gap-4 mt-4 text-white break-all items-center"><PiYoutubeLogoLight className="text-primary-gold text-4xl min-w-10 font-light" />https://www.youtube.com/@PocketProductions.p2</a>
            <a href="https://www.instagram.com/akkioo111/" className="flex gap-4 mt-4 items-center break-all"><CiInstagram className="text-primary-gold text-4xl min-w-11" />https://www.instagram.com/akkioo111/</a>
        </div>

    </div>
  )
}

export default Connect