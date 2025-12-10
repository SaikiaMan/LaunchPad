import { Poppins, Nabla, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const nabla = Nabla({ subsets: ["latin"], variable: "--font-accent" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-brand" });

export const metadata = {
  title: "fun.pump",
  description: "create token listings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nabla.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
