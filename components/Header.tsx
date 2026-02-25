export default function Header() {
  return (
    <div className="text-center space-y-4 mb-10">
      {/* İSİM */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#2B2D42] tracking-tight">
        Emir Kaan Oğşarim
      </h1>

      {/* AVATAR */}
      <div className="flex justify-center">
        <img
          src="/avatar.jpg"
          className="w-36 h-36 rounded-full border-4 border-[#3A6EA5] shadow-md"
        />
      </div>

      {/* ALT BAŞLIK */}
      <p className="text-[#8D99AE] max-w-md mx-auto leading-relaxed">
        Backend & AI odaklı çalışan Yazılım Mühendisliği öğrencisi.
      </p>

      {/* LINKLER */}
      <div className="flex justify-center gap-4 pt-2">
  <a
    href="/cv.pdf"
    download
    className="px-4 py-2 rounded-full border border-[#E6F0F8] bg-white/70 text-[#3A6EA5] hover:text-[#3A6EA5] hover:border-[#7FB3D5] transition font-medium"
  >
    CV indir
  </a>

  <a
    href="https://github.com/0gsar1m"
    target="_blank"
    className="px-4 py-2 rounded-full border border-[#E6F0F8] bg-white/70 text-[#3A6EA5] hover:text-[#3A6EA5] hover:border-[#7FB3D5] transition font-medium"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    className="px-4 py-2 rounded-full border border-[#E6F0F8] bg-white/70 text-[#3A6EA5] hover:text-[#3A6EA5] hover:border-[#7FB3D5] transition font-medium"
  >
    LinkedIn
  </a>
</div>
    </div>
  );
}