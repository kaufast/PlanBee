"use client"
import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/images/icon/icon_34.svg"
import logo from "@/assets/images/logo/logo_07.svg"
import shape_1 from "@/assets/images/assets/bg_12.png"
import shape_2 from "@/assets/images/shape/shape_56.svg"
import shape_3 from "@/assets/images/shape/shape_57.svg"

const FooterFive = () => {
  return (
    <div className="footer-five">
      <div className="wrapper">
        <div className="container">
          <div className="position-relative">
            <div className="newsletter">
              <div className="row">
                <div className="col-xl-6 col-lg-5 col-md-6">
                  <h3 className="sm-mb-40">Signup for Regular Newsletter</h3>
                </div>
                <div className="col-md-6 ms-auto">
                  <form onSubmit={(e) => e.preventDefault()} className="position-relative">
                    <h6>Newsletter</h6>
                    <input type="email" placeholder="rakabir@gmail.com" />
                    <button className="tran3s"><Image src={icon_1} alt="" className="m-auto" /></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 me-auto">
                <div className="footer-intro mb-30">
                  <div className="logo mt-15">
                    <Link href="/">
                      <Image src={logo} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 col-6">
                <div className="footer-nav mb-20">
                  <ul className="footer-nav-link style-none">
                    <li><Link href="/about-us-v1">About </Link></li>
                    <li><Link href="/project-v1">Work Gallery</Link></li>
                    <li><Link href="/pricing-v2">Pricing</Link></li>
                    <li><Link href="/blog-v1">Blog</Link></li>
                    <li><Link href="/contact-v2">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-2 col-md-4 col-6">
                <div className="footer-nav mb-40">
                  <ul className="footer-nav-link style-none">
                    <li><Link href="/faq-v2">Faq’s</Link></li>
                    <li><Link href="/faq-v2">Privacy Policy</Link></li>
                    <li><Link href="/faq-v2">Terms</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-md-4">
                <div className="footer-contact mb-20">
                  <p className="fw-500">210 Wallent Street, California, Main OC, USA</p>
                  <Link href="#" className="tel fw-500 tran3s">(+91) 0187 34 377</Link>
                  <ul className="style-none d-flex align-items-center social-icon">
                    <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="copyright-text text-center m0"><strong className="text-dark">@2024.</strong> All Right Reserved. </p>
          </div>
        </div>
      </div>
      <Image src={shape_1} alt="" className="shapes bg_01" />
      <Image src={shape_2} alt="" className="shapes shape_02" />
      <Image src={shape_3} alt="" className="shapes shape_03" />
    </div>
  )
}

export default FooterFive
