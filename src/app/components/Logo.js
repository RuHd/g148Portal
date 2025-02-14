import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Image from 'next/image'
import g148Logo from "../../../public/g148Logo.png"
import React from 'react'

const Logo = () => {
  return (
    <section className="logo--container">
        <Image
        src={g148Logo}
        alt="G148 Logo"
        width={500}
        height={200}
        />
        <span>Portal</span>

        {/* Animation Component */}
        <DotLottieReact
        src="https://lottie.host/9d3bc9f8-fd23-4687-a764-998da96c984c/K6g30k7ecs.lottie"
        loop
        autoplay
        className="linesAnimation"
        />
    </section>
  )
}

export default Logo