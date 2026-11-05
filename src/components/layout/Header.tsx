"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/lib/hooks";
import { nav, site, telHref } from "@/lib/site";

/**
 * Replaces the header half of designesia.js: the `smaller` sticky class, the
 * `header-mobile` breakpoint class, and the `#menu-btn` drawer — all of which
 * were jQuery class toggles, so React state covers them exactly.
 *
 * The template's own CSS still does every bit of the styling; this only decides
 * which classes are on.
 */
export default function Header({
  onepage = false,
  phone = "",
}: {
  onepage?: boolean;
  /** The shop's number, from lib/content via the layout. "" hides the link. */
  phone?: string;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // header.header-mobile — the class the ≤992px menu styles hang off.
  const isMobile = useMediaQuery("(max-width: 992px)");

  // header.smaller — designesia.js only applied it above 992px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // The drawer is a mobile-only affordance; leaving it "open" in state while the
  // viewport is desktop would re-open it on the way back down.
  const drawerOpen = menuOpen && isMobile;

  const closeMenu = () => setMenuOpen(false);

  const headerClass = [
    "transparent",
    "px-lg-5",
    "px-4",
    scrolled && !isMobile ? "smaller" : "",
    isMobile ? "header-mobile" : "",
    drawerOpen ? "menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  // The drawer works by growing the header to fill the screen; the menu below
  // the logo row is clipped by `header.header-mobile { overflow: hidden }`.
  const headerStyle = drawerOpen ? { height: "100vh" } : undefined;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const tel = telHref(phone);

  return (
    <header className={headerClass} style={headerStyle}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="de-flex">
              {/* Logo */}
              <div className="de-flex-col">
                <div id="logo">
                  <Link href={onepage ? "#section-intro" : "/"}>
                    <Image
                      src="/images/logo.webp"
                      className="logo-main"
                      alt="Crafted Studio"
                      width={640}
                      height={213}
                      priority
                    />
                    <Image
                      src="/images/logo.webp"
                      className="logo-scroll"
                      alt="Crafted Studio"
                      width={640}
                      height={213}
                      priority
                    />
                    <Image
                      src="/images/logo.webp"
                      className="logo-mobile"
                      alt="Crafted Studio"
                      width={640}
                      height={213}
                      priority
                    />
                  </Link>
                </div>
              </div>

              {/* Main navigation */}
              <div className="de-flex-col header-col-mid">
                <nav aria-label="Main">
                  <ul id="mainmenu" className={onepage ? "onepage" : undefined}>
                    {nav.map((item) => {
                      // One-page variants jump to a section; the multipage build routes.
                      const href = onepage && item.section.startsWith("#") ? item.section : item.href;
                      const active = !onepage && isActive(item.href);

                      return (
                        <li key={item.label}>
                          <Link
                            className={`menu-item${active ? " active" : ""}`}
                            href={href}
                            aria-current={active ? "page" : undefined}
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}

                    {/* Booking lives off-site, so the drawer gets its own button
                        rather than a menu item that quietly leaves. */}
                    <li className="header-narrow-only mt-3">
                      {/* No fx-slide here, and no inner span: the drawer styles
                          `#mainmenu a span` as the menu underline (width: 0),
                          which eats the button's label. A hover animation is no
                          use on touch anyway. The utilities are !important, so
                          they win back the padding `#mainmenu a` would impose. */}
                      <a
                        className="btn-main d-block text-center px-4 py-3"
                        href={site.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                      >
                        Book Now
                      </a>
                    </li>

                    {/* Calling is the one thing a phone is already holding. */}
                    {phone ? (
                      <li className="header-narrow-only header-phone-drawer">
                        <a
                          className="d-block text-center px-4 py-3 text-light text-decoration-none"
                          href={tel}
                          onClick={closeMenu}
                        >
                          <i className="icofont-phone id-color me-2" aria-hidden="true" />
                          {phone}
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </nav>
              </div>

              {/* Booking CTA — always one click away, on every page.
                  header-wide-only rather than a `d-lg-*` utility: it switches on
                  the template's own breakpoint (see globals.css), and it only
                  ever hides, so .de-flex-col keeps centring the button. A
                  Bootstrap display utility is !important and would drop that
                  centring, leaving the button sitting above the logo. */}
              <div className="de-flex-col header-wide-only">
                <div className="d-flex align-items-center gap-3">
                  {/* The number only appears once the row has room for it
                      (see header-phone in globals.css): between the drawer
                      breakpoint and 1200px the logo, nav and button already
                      fill the width. It is in the drawer at every size. */}
                  {phone ? (
                    <a className="header-phone text-light text-decoration-none" href={tel}>
                      <i className="icofont-phone id-color me-2" aria-hidden="true" />
                      {phone}
                    </a>
                  ) : null}

                  <a
                    className="btn-main fx-slide"
                    data-hover="Book Now"
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Book Now</span>
                  </a>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="de-flex-col header-narrow-only">
                <div className="menu_side_area">
                  <button
                    type="button"
                    id="menu-btn"
                    className={drawerOpen ? "menu-open" : undefined}
                    aria-label={drawerOpen ? "Close menu" : "Open menu"}
                    aria-expanded={drawerOpen}
                    aria-controls="mainmenu"
                    onClick={() => setMenuOpen((open) => !open)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
