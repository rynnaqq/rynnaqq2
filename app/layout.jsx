import "./globals.css";

export const metadata = {
  title: "Portofolio & CV Profesional | Nama Anda",
  description: "Portofolio imersif Full Stack Web Developer & UI/UX Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-[#1a1a1a] text-[#FFF7ED]">
        {children}
      </body>
    </html>
  );
}
