import Link from "next/link";
import { useState } from "react";
import {
  BlogDropdownMenus,
  ContactDropdownMenus,
  DemoDropdownMenus,
  ElementsMegaMenu,
  PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";

/* eslint-disable @next/next/no-img-element */
export default function HeaderHomeOne() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scroll = useScroll();

  return (
    <header
      className={`site-header site-header--menu-right fugu-header-section ${
        scroll ? "sticky-menu" : ""
      }`}
      id="sticky-menu"
    >
      <div className="container-fluid">
        <nav className="navbar site-navbar">
          <div className="brand-logo">
            <Link href={"/"}>
              <img
                src="/images/logo/prep-d-logo-green-transparent.svg"
                alt="logo"
                className="light-version-logo"
              />
            </Link>
          </div>
          <div className="menu-block-wrapper">
            <div
              className={`menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
              onClick={handleCloseMobileMenu}
            ></div>
            <nav
              className={`menu-block ${isMobileMenuOpen ? "active" : null}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div
                  className="mobile-menu-close"
                  onClick={handleCloseMobileMenu}
                >
                  &times;
                </div>
              </div>

              <Navbar>
                {/* <NavItem navItemText="Demo" menuItems={DemoDropdownMenus} /> */}
                {/* <NavItem
                  navItemText="About Us"
                  menuItems={PagesDropdownMenus}
                /> */}
                <Link href="about-us" class="nav-link-item drop-trigger">
                  About
                </Link>
                {/* <NavItem
                  navItemText="Team"
                  //   menuItems={ElementsMegaMenu}
                /> */}
                {/* <Link href="team-light" class="nav-link-item drop-trigger">
                  Team
                </Link> */}
                {/* <NavItem
                  navItemText="Blog" */}
                {/* // menuItems={BlogDropdownMenus} */}
                {/* /> */}
                {/* <NavItem
                  navItemText="Contact Us"
                  //   menuItems={ContactDropdownMenus}
                /> */}
                <Link href="contact-us" class="nav-link-item drop-trigger">
                  Contact Us
                </Link>
              </Navbar>
            </nav>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <a className="fugu-btn fugu-header-btn" href="#">
              Login
            </a>
          </div>

          <div
            className="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
