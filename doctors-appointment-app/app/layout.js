import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Doctors Appointment App",
  description: "Doctors Appointment App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}

        <main className="min-h-screen">{children}</main>

        {/* footer */}
        <footer>
          
        </footer>
      </body>
    </html>
  );
}
