import Link from "next/link";
import { Container } from "@/components/layout/Container";

const social = [
  { href: "https://x.com/", label: "X" },
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.youtube.com/", label: "YouTube" },
  { href: "https://framer.link/clariv-studio", label: "Framer" },
];

const navLinks = ["About", "Projects", "Blog", "Contact"];

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-8 text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/herovideo2.mp4" type="video/mp4" />
        </video>

        {/* Seamless blend from the previous section */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 pb-16">

          {/* Top Left: Logo / Icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20">
              {/* Simple stylized icon representing BigTopSocial */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 lg:pl-12">

            {/* Navigate */}
            <div>
              <h4 className="text-[13px] font-semibold mb-5 text-white">Navigate</h4>
              <ul className="space-y-3 text-[13px] text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[13px] font-semibold mb-5 text-white">Services</h4>
              <ul className="space-y-3 text-[13px] text-white/60">
                <li><Link href="#" className="hover:text-white transition-colors">Social Strategy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Story-Driven Content</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Brand Identity</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Paid Campaigns</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[13px] font-semibold mb-5 text-white">Legal</h4>
              <ul className="space-y-3 text-[13px] text-white/60">
                <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h4 className="text-[13px] font-semibold mb-5 text-white">Follow</h4>
              <ul className="space-y-3 text-[13px] text-white/60">
                {social.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                      {/* Simple dot for list aesthetic */}
                      <span className="w-1 h-1 rounded-full bg-white/40"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Newsletter */}
          <div className="w-full lg:max-w-[260px] flex-shrink-0">
            <h4 className="text-[13px] font-medium leading-relaxed mb-4 text-white/90">
              Sign up for our curated edit<br />of social insights & updates
            </h4>
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-[#1A1A1A] text-white text-[13px] rounded-md px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors placeholder:text-white/30"
              />
              <button type="submit" className="absolute right-2 p-2 text-white/50 hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Giant Wordmark */}
        <div className="w-full flex items-end justify-center pt-8 pb-12 ">
          <h1 className="text-[14.5vw] font-bold leading-[0.8] tracking-tight text-white select-none text-center whitespace-nowrap lowercase">
            bigtopsocial
          </h1>
        </div>
      </Container>
    </footer>
  );
}