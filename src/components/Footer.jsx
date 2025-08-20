import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <Link href={"/"} className="text-xl">
          <Image src={"/assets/logo.svg"} width={87} height={87} alt="logo" />
        </Link>
        <p className="w-56">
          Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </nav>
    </footer>
  );
}
