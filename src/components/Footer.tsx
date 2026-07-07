import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113-3.41 0-6.177-2.767-6.177-6.177s2.767-6.177 6.177-6.177c1.5 0 2.87.535 3.94 1.564l3.129-3.129C19.124 2.128 15.918 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-11.002 0-.745-.067-1.463-.193-2.193H12.24z" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tight">
            KDT<span className="text-electric-cyan">TILING</span>
          </Link>
          <p className="mt-2 text-gray-500 text-sm">
            Professional wall & floor tiling across South Wales.
          </p>
        </div>

        <div className="flex items-center space-x-6 mb-6 md:mb-0">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-electric-cyan transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-electric-cyan transition-colors"
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-electric-cyan transition-colors"
          >
            <span className="sr-only">Google Business</span>
            <GoogleIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} KDT Tiling Swansea. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Fully Insured & Guaranteed
          </p>
        </div>
      </div>
    </footer>
  );
}
