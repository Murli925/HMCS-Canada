import Link from 'next/link'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] px-4 pt-20 pb-10 text-[var(--color-background)] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-light tracking-tight sm:text-3xl lg:text-[2rem]">
            HMCS Canada Expedition 2025
          </h3>

          <div className="mt-8 flex items-center justify-center">
            <a
              href="mailto:info.hmcscanadaexpedition@gmail.com"
              className="inline-block px-5 py-2 text-base font-bold text-[var(--color-background)] transition-opacity hover:opacity-80"
            >
              Email: <span className="underline font-400">info.hmcscanadaexpedition@gmail.com</span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
<Link
  href="#"
  aria-label="Facebook"
  className="transition-opacity hover:opacity-70 bg-white p-4"
>
  <FaFacebookF className="h-5 w-5 text-xl text-black" />
</Link>
<Link
  href="#"
  aria-label="Instagram"
  className="transition-opacity bg-white p-4 hover:opacity-70"
>
  <FaInstagram className="h-5 w-5 text-xl text-black" />
</Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/60" />

        <div className="mt-10 text-center text-sm text-white/80">
          Copyright © HMCS Canada Expedition 2025 | All Rights Reserved. | Powered By <a className="underline !text-sm hover:opacity-80" href="https://www.adnaan.com" target="_blank" rel="noopener noreferrer">
            Adaan Digital Solutions Pvt Limited
          </a>
        </div>
      </div>
    </footer>
  )
}
