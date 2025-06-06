import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Doctors Appointment App",
  description: "Doctors Appointment App",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* header */}

          <main className="min-h-screen">{children}</main>

          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>hehe</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
