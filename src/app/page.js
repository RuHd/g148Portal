import Image from "next/image";
import styles from "./page.scss";
import g148Logo from "../../public/g148Logo.png"
import Link from "next/link";
import linksGallery from "@/utils/linksGallery";
import Linkscard from "./components/Linkscard/Linkscard";
import quizzLogo from '../../public/quizzLogo.svg'

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
      </section>
      <ul>
          {linksGallery.map(link => {
            return (
              <li>
                <Linkscard urlPath={link.path} imageSrc={link.logo}/>
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
