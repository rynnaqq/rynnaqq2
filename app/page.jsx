"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, Menu, X, ArrowUpRight, ArrowDown, Heart, MessageSquare, 
  Palette, Code, Laptop, PenTool, Rocket, Maximize2, Quote, 
  Copy, Check, Github, Linkedin, Twitter, Instagram 
} from "lucide-react";

export default function Home() {
  // 1. Hook untuk Efek Parallax Scroll
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // 2. State Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3. State Lightbox Gallery
  const [selectedImg, setSelectedImage] = useState(null);

  // 4. State Salin Email
  const [copied, setCopied] = useState(false);
  const emailText = "emailanda@domain.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const galleryItems = [
    {
      id: 1,
      title: "E-Commerce Analytics",
      category: "Web Application",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      desc: "Dashboard manajemen toko dengan analisis real-time.",
    },
    {
      id: 2,
      title: "AI Content Platform",
      category: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
      desc: "Antarmuka interaktif pembuat konten AI modern.",
    },
    {
      id: 3,
      title: "Fintech Wallet",
      category: "Mobile App",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      desc: "Aplikasi dompet digital dengan kemudahan transaksi.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-brand-warm relative">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark/85 backdrop-blur-md border-b border-brand-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 font-heading text-lg font-bold text-white">
            <span className="w-9 h-9 rounded-lg bg-white text-brand-dark flex items-center justify-center font-extrabold shadow-md">
              <Sparkles className="w-5 h-5 text-brand-orange" />
            </span>
            <span>NAMA<span className="text-brand-orange">ANDA</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#tentang" className="hover:text-brand-orange transition-colors">Tentang Saya</a>
            <a href="#layanan" className="hover:text-brand-orange transition-colors">Layanan</a>
            <a href="#galeri" className="hover:text-brand-orange transition-colors">Galeri Proyek</a>
            <a href="#testimoni" className="hover:text-brand-orange transition-colors">Testimoni</a>
            <a href="#kontak" className="hover:text-brand-orange transition-colors">Kontak</a>
          </div>

          <a href="#kontak" className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-orangeHover transition-all shadow-lg hover:-translate-y-0.5">
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-white border border-brand-border rounded-lg"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-6 flex flex-col gap-4 border-t border-brand-border/50 mt-4"
          >
            <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-1 border-b border-brand-border/30">Tentang Saya</a>
            <a href="#layanan" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-1 border-b border-brand-border/30">Layanan</a>
            <a href="#galeri" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-1 border-b border-brand-border/30">Galeri Proyek</a>
            <a href="#testimoni" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-1 border-b border-brand-border/30">Testimoni</a>
            <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="text-base font-medium py-1">Kontak</a>
            <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-brand-orange text-white text-xs font-semibold uppercase tracking-wider">
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </nav>

      {/* ================= HERO SECTION (PARALLAX) ================= */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-4xl mx-auto text-center z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 text-brand-orange text-xs font-semibold mb-6"
          >
            <Heart className="w-4 h-4 fill-brand-orange" />
            <span>Selamat Datang! Mari Wujudkan Ide Hangatmu</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Menciptakan Karya Digital Berjiwa, <br className="hidden sm:block" />
            <span className="text-brand-orange">Estetis & Berdampak.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-muted text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Saya seorang desainer & pengembang web berdedikasi. Berfokus pada penciptaan antarmuka interaktif yang hangat, responsif, dan memberikan pengalaman visual tak terlupakan.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#galeri" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orangeHover transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
              <span>Jelajahi Karya</span>
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#kontak" className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-border bg-transparent text-brand-warm font-semibold text-sm hover:bg-brand-warm hover:text-brand-dark transition-all flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>Mari Mengobrol</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECTION TENTANG SAYA ================= */}
      <section id="tentang" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl overflow-hidden border border-brand-border shadow-2xl aspect-[4/5] relative">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" alt="Foto Profil" className="w-full h-full object-cover grayscale opacity-90" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-card p-5 rounded-2xl border border-brand-border shadow-2xl hidden sm:block">
              <h3 className="font-heading text-2xl font-bold text-brand-orange">5+ Tahun</h3>
              <p className="text-xs text-brand-muted">Pengalaman Industri Kreatif</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">/ TENTANG SAYA</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white leading-tight">
              Menyelaraskan Kehangatan Desain dengan Rekayasa Kode Modern.
            </h2>
            <p className="text-brand-muted text-base leading-relaxed">
              Setiap produk digital harus terasa manusiawi. Saya membantu merek dan individu mengubah konsep abstrak menjadi produk nyata yang mudah digunakan, cepat, dan bernilai estetika tinggi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-card border border-brand-border">
                <div className="w-12 h-12 rounded-lg bg-brand-orange/15 border border-brand-orange/30 text-brand-orange flex items-center justify-center shrink-0">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Desain UI/UX</h4>
                  <p className="text-xs text-brand-muted">Prototyping & Visual Art</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-card border border-brand-border">
                <div className="w-12 h-12 rounded-lg bg-brand-orange/15 border border-brand-orange/30 text-brand-orange flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Web Development</h4>
                  <p className="text-xs text-brand-muted">Clean Code & Performance</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= SECTION LAYANAN ================= */}
      <section id="layanan" className="py-24 px-6 bg-brand-card/30 border-y border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">/ LAYANAN & KEAHLIAN</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">Apa Yang Bisa Saya Bantu?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-orange/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 text-brand-orange flex items-center justify-center mb-6">
                <Laptop className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Pengembangan Website</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Website kustom, responsif, berkecepatan tinggi, serta ramah mesin pencari (SEO) sesuai dengan identitas bisnis Anda.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-orange/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 text-brand-orange flex items-center justify-center mb-6">
                <PenTool className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Desain Antarmuka (UI/UX)</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Perancangan alur pengguna yang intuitif, ramah pengguna, dan tata letak modern berbasis data penelitian pengguna.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-orange/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 border border-brand-orange/30 text-brand-orange flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">Branding & Identitas Digital</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Membangun sistem desain visual dan panduan gaya merek agar bisnis Anda konsisten di seluruh platform digital.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION GALERI (LIGHTBOX) ================= */}
      <section id="galeri" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">/ GALERI KARYA</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">Portofolio Terpilih</h2>
          </div>
          <p className="text-sm text-brand-muted max-w-xs">Klik gambar untuk pratinjau imersif React Modal Lightbox.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-brand-border aspect-[4/3] cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-xs px-2.5 py-1 rounded bg-brand-orange text-white w-fit font-medium mb-2">{item.category}</span>
                <h4 className="font-heading text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-brand-muted flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5" /> Perbesar Gambar
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full bg-brand-card p-4 rounded-2xl border border-brand-border" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-dark text-white border border-brand-border hover:text-brand-orange"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedImg.img} alt={selectedImg.title} className="w-full aspect-video object-cover rounded-xl mb-4" />
            <span className="text-xs px-2.5 py-1 rounded bg-brand-orange/20 text-brand-orange font-semibold">{selectedImg.category}</span>
            <h3 className="font-heading text-xl font-bold text-white mt-2 mb-1">{selectedImg.title}</h3>
            <p className="text-sm text-brand-muted">{selectedImg.desc}</p>
          </div>
        </div>
      )}

      {/* ================= SECTION TESTIMONI ================= */}
      <section id="testimoni" className="py-24 px-6 bg-brand-card/30 border-y border-brand-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-2">/ ULASAN KLIEN</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">Apa Kata Mereka?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-brand-orange/40 mb-4" />
                <p className="text-brand-warm text-base italic leading-relaxed mb-6">
                  "Bekerja bersamanya adalah keputusan terbaik. Hasil websitenya sangat cepat, komunikatif, dan memiliki sentuhan estetika hangat yang disukai oleh klien kami."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Sarah Amanda" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Sarah Amanda</h4>
                  <p className="text-xs text-brand-muted">Founder, Creative Studio</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-card border border-brand-border flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-brand-orange/40 mb-4" />
                <p className="text-brand-warm text-base italic leading-relaxed mb-6">
                  "Sangat profesional dan menguasai rekayasa kode secara mendalam. Proyek kami dapat selesai tepat waktu dengan standar performa kelas atas."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="Budi Pratama" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Budi Pratama</h4>
                  <p className="text-xs text-brand-muted">CTO, Tech Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION KONTAK ================= */}
      <section id="kontak" className="py-28 px-6 text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block mb-4">/ MARI TERHUBUNG</span>
        <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Punya Ide Hangat? <br />
          <span className="text-brand-orange">Mari Wujudkan Bersama.</span>
        </h2>
        <p className="text-brand-muted text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Saya selalu siap menyambut diskusi baru, proyek kolaborasi, atau sekadar berbagi ide kreatif.
        </p>

        {/* Copy Email Box */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-brand-card border border-brand-border mb-12 shadow-sm">
          <span className="px-4 py-2 font-mono text-sm text-brand-warm">{emailText}</span>
          <button 
            onClick={handleCopyEmail}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-orange text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-orangeHover transition-all flex items-center justify-center gap-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Berhasil Disalin!" : "Salin Email"}</span>
          </button>
        </div>

        {/* Social Icon Links */}
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com" target="_blank" className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-warm hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-warm hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-warm hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center text-brand-warm hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 border-t border-brand-border px-6 text-xs text-brand-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} <strong className="text-white">Nama Anda</strong>. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">Dibuat dengan <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" /> & Next.js</p>
        </div>
      </footer>

    </div>
  );
}
