"use client"

import Image from "next/image";
import "./page.scss";
import linksGallery from "@/utils/linksGallery";
import Linkscard from "./components/Linkscard/Linkscard";


export default function Home() {
  
  return (
    <div className="page">
      <ul>

        {/* Link Options Rendering */}

        {linksGallery.map((link, id) => {

          return (
            <li key={id}>
              <Linkscard urlPath={link.path} imageSrc={link.logo} title = {link.title} />
            </li>
          )

        })}

      </ul>
      {/* <footer>
        Feito por Ruan Mesquita - 2025
      </footer> */}
    </div>
  );
}
