import LogoImage from "@/assets/logo.svg";
import XSolial from "@/assets/social-x.svg";
import IgSolial from "@/assets/social-instagram.svg";
import YtSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <>
      <footer className="py-5 border-t border-white/15 ">
        <div className="container">
          <div className="flex flex-col gap-8 lg:flex-row justify-between lg:items-center">
            <div className="flex gap-2 items-center lg:flex-1 ">
              <LogoImage className="h-6" />
              <div className="font-medium">Trust People Solutions</div>
            </div>
            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
              <a href="#" className="text-white/70 hover:text-white text-xs">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white text-xs">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white text-xs">
                Blog
              </a>
              <a href="#" className="text-white/70 hover:text-white text-xs">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white text-xs">
                Changelog
              </a>
            </nav>
            <div className="flex gap-5 lg:flex-1 lg:justify-end">
              <a href="https://x.com/trust_peoplesol" target="_blank">
                <XSolial className="text-white/40 hover:text-white transition" />
              </a>
              <a
                href="https://www.instagram.com/trustpeoplesolutions/"
                target="_blank"
              >
                <IgSolial className="text-white/40 hover:text-white transition" />
              </a>
              <a href="#">
                <YtSocial className="text-white/40 hover:text-white transition" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
