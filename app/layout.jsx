import "./globals.css";

export const metadata = {
  title: "Portofolio Modern",
  description: "Portofolio dibuat dengan Next.js dan Tailwind CSS",
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
