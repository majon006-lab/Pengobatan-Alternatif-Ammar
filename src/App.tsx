/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, CheckCircle2, Star, Quote, ArrowRight, Instagram, Facebook, Menu, X } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pasien Penyakit Fisik",
    comment: "Alhamdulillah, setelah beberapa kali terapi di Ammar, sakit punggung menahun saya berangsur pulih. Pelayanannya sangat ramah dan menenangkan.",
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Pasien Keluhan Metafisik",
    comment: "Sangat terbantu dengan bimbingan dan pengobatan di sini. Pikiran jadi lebih jernih dan hati lebih tenang. InsyaAllah berkah.",
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    id: 3,
    name: "Hendra Wijaya",
    role: "Pasien Umum",
    comment: "Metode pengobatannya unik dan sangat memperhatikan aspek spiritual. Sangat merekomendasikan bagi yang mencari alternatif pengobatan yang syar'i.",
    image: "https://picsum.photos/seed/person3/100/100"
  }
];

export default function App() {
  const whatsappNumber = "628984441149";
  const emailAddress = "Pengobatanalternatifammar@gmail.com";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="px-3 h-10 bg-emerald-600 rounded-lg flex items-center justify-center font-arabic font-bold text-2xl text-white shadow-sm shadow-emerald-900/20">عمار</div>
            <span className="font-bold tracking-tight text-xl hidden sm:block text-zinc-900">AMMAR</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#home" className="hover:text-emerald-600 transition-colors">Beranda</a>
            <a href="#tentang" className="hover:text-emerald-600 transition-colors">Tentang</a>
            <a href="#testimoni" className="hover:text-emerald-600 transition-colors">Testimoni</a>
            <a href="#kontak" className="hover:text-emerald-600 transition-colors">Kontak</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleWhatsApp}
              className="hidden sm:flex bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all items-center gap-2 shadow-sm"
            >
              Konsultasi Sekarang
            </button>
            <button 
              className="md:hidden p-2 text-zinc-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 px-6 py-8 flex flex-col gap-6 text-lg font-medium text-zinc-600 shadow-xl"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-600 transition-colors">Beranda</a>
            <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-600 transition-colors">Tentang</a>
            <a href="#testimoni" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-600 transition-colors">Testimoni</a>
            <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-600 transition-colors">Kontak</a>
            <button 
              onClick={() => {
                handleWhatsApp();
                setIsMenuOpen(false);
              }}
              className="bg-emerald-600 text-white px-6 py-4 rounded-xl text-center font-bold shadow-lg shadow-emerald-100"
            >
              Konsultasi Sekarang
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-emerald-100/50 blur-[120px] -z-10 rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} fill="currentColor" />
              Pengobatan Alternatif Terpercaya
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-zinc-900">
              PENGOBATAN <br />
              <span className="text-emerald-600">ALTERNATIF</span> <br />
              <span className="text-emerald-600 italic">AMMAR</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
              Sehat dan Jernih. InsyaAllah membantu mengobati penyakit fisik dan metafisik birahmatillah, biidznillah.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleWhatsApp}
                className="bg-zinc-900 text-white hover:bg-zinc-800 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 group shadow-lg shadow-zinc-200"
              >
                <MessageCircle size={20} />
                WhatsApp Kami
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleEmail}
                className="bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-900 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-sm"
              >
                <Mail size={20} />
                Email
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-emerald-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-zinc-500 font-medium">500+ Pasien Terbantu</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/ammar/800/1000" 
                alt="Ammar" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
                <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-1">Founder</p>
                <h3 className="text-2xl font-bold text-zinc-900">Ustadz Ammar</h3>
                <p className="text-zinc-600 text-sm mt-2">Ahli pengobatan alternatif dengan pendekatan spiritual dan fisik yang mendalam.</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200/40 blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200/40 blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="tentang" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-zinc-900">Layanan Kami</h2>
            <p className="text-zinc-600">Kami memberikan solusi pengobatan yang menyeluruh, menggabungkan aspek fisik dan spiritual untuk kesehatan yang optimal.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Penyakit Fisik",
                desc: "Membantu pemulihan berbagai keluhan fisik seperti nyeri sendi, masalah pencernaan, dan kelelahan kronis.",
                icon: <CheckCircle2 className="text-emerald-600" size={32} />
              },
              {
                title: "Penyakit Metafisik",
                desc: "Pendekatan spiritual untuk mengatasi gangguan non-medis, kecemasan berlebih, dan ketenangan batin.",
                icon: <Star className="text-emerald-600" size={32} />
              },
              {
                title: "Konsultasi Spiritual",
                desc: "Bimbingan untuk mencapai kejernihan pikiran dan ketenangan hati melalui pendekatan yang syar'i.",
                icon: <Quote className="text-emerald-600" size={32} />
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#fcfbf7] border border-zinc-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all group">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoni" className="py-24 bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-zinc-900">Apa Kata Mereka?</h2>
              <p className="text-zinc-600 text-lg">Kepercayaan pasien adalah prioritas kami. Berikut adalah beberapa pengalaman nyata dari mereka yang telah berikhtiar bersama kami.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="font-bold text-xl text-zinc-900">4.9/5.0</p>
                <p className="text-zinc-500 text-sm">Rating Kepuasan</p>
              </div>
              <div className="flex items-center gap-1 text-emerald-500">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm relative"
              >
                <Quote className="absolute top-8 right-8 text-emerald-600/10" size={48} />
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-50"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-zinc-900">{t.name}</h4>
                    <p className="text-xs text-emerald-600 uppercase tracking-wider font-bold">{t.role}</p>
                  </div>
                </div>
                <p className="text-zinc-600 italic leading-relaxed">"{t.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-zinc-900 p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600 blur-[100px] rounded-full" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-8 relative z-10 text-white">Siap Untuk Hidup Lebih <br /> Sehat & Jernih?</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Jangan biarkan keluhan Anda berlarut-larut. Konsultasikan sekarang secara gratis dan temukan solusi terbaik untuk kesehatan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-700 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/20"
            >
              <MessageCircle size={24} />
              WhatsApp Sekarang
            </button>
            <button 
              onClick={handleEmail}
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3"
            >
              <Mail size={24} />
              Kirim Email
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 h-10 bg-emerald-600 rounded flex items-center justify-center font-arabic font-bold text-2xl text-white">عمار</div>
              <span className="font-bold tracking-tight text-lg text-zinc-900">AMMAR</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">Pengobatan Alternatif Ammar - Membantu kesehatan fisik dan batin Anda dengan izin Allah.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="text-zinc-400 hover:text-emerald-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-400 hover:text-emerald-600 transition-colors"><Facebook size={20} /></a>
              <a href={`tel:+${whatsappNumber}`} className="text-zinc-400 hover:text-emerald-600 transition-colors"><Phone size={20} /></a>
            </div>
            <p className="text-zinc-400 text-xs">© 2026 Pengobatan Alternatif Ammar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
