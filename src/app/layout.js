import { Yellowtail,Playball, Figtree, Figtree } from "next/font/google";
import "./globals.css";

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400"
});

const playball = Playball({
  variable: "--font-playball",
  subsets: ["latin"],
  weight: "400"
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["700"]
})

export const metadata = {
  title: "G148 Portal",
  description: "Portal de sites do G148 Jacareí",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${yellowtail.variable} ${playball.variable} ${figtree.variable}`}>
        {children}
      </body>
    </html>
  );
}
