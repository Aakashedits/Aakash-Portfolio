import React, { useRef } from 'react'
import Hero from "./Hero"
import Content from "./Content"
import Connect from "./Connect"

const home = () => {

  const contentRef = useRef(null);
  const connectRef = useRef(null);

  return (
    <>
      <Hero contentRef={contentRef} />
      <div ref={contentRef}>
        <Content contentRef={contentRef} connectRef={connectRef} />
      </div>
      <div ref={connectRef}>
        <Connect />
      </div>
    </>
  )
}

export default home