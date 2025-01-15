import { Yellowtail,Playball } from "next/font/google";
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

export const metadata = {
  title: "G148 Portal",
  description: "Portal de sites do G148 Jacareí",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${yellowtail.variable} ${playball.variable}`}>
        {children}
      </body>
    </html>
  );
}
