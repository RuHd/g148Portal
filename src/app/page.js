"use client"

import Image from "next/image";
import "./page.scss";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import g148Logo from "../../public/g148Logo.png"
import linksGallery from "@/utils/linksGallery";
import Linkscard from "./components/Linkscard/Linkscard";


export default function Home() {
  return (
    <div className="page">


      <section className="logo--container">
        <Image
          src={g148Logo}
          alt="G148 Logo"
          width={500}
          height={200}
        />
        <span>Portal</span>

        <DotLottieReact
          src="https://lottie.host/9d3bc9f8-fd23-4687-a764-998da96c984c/K6g30k7ecs.lottie"
          loop
          autoplay
          className="linesAnimation"
        />
      </section>
      <ul>
        {linksGallery.map((link, id) => {
          return (
            <li key={id}>
              <Linkscard urlPath={link.path} imageSrc={link.logo} />
            </li>
          )
        })}

      </ul>
      <footer>
        Feito por Ruan Mesquita - 2025
      </footer>
    </div>
  );
}
