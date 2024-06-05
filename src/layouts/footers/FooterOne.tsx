import Image from "next/image";
import Link from "next/link"

import footerLogo from "@/assets/img/footer-logo.png"

const course_data: string[] = ["Branding design", "Ui/Ux designing", "Make Elements", "Business", "Graphics design"];

const FooterOne = () => {
   return (
      <footer className="footer-area bg-gray">
         <div className="footer-subscribe">
            <div className="container">
               <form className="footer-subscribe-inner">
                  <div className="row">
                     <div className="col-lg-5">
                        <div className="single-input-inner style-border-bottom">
                           <input type="text" placeholder="Your Full Name" />
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className="single-input-inner style-border-bottom">
                           <input type="text" placeholder="Your Email Address" />
                        </div>
                     </div>
                     <div className="col-lg-2">
                        <Link className="ed-btn btn-base" href="#">Subscribe</Link>
                     </div>
                  </div>
               </form>
            </div>
         </div>

         <div className="footer-top">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-6">
                     <div className="widget widget_contact">
                        <h4 className="widget-title">Contact Us</h4>
                        <ul className="details">
                           <li><i className="fa fa-map-marker"></i> 420 Love Sreet 133/2 Street NewYork</li>
                           <li><i className="fa fa-envelope"></i> info.contact@gmail.com</li>
                           <li><i className="fa fa-phone"></i> 012 345 678 9101</li>
                        </ul>
                     </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                     <div className="widget widget_nav_menu">
                        <h4 className="widget-title">Course</h4>
                        <ul>
                           {course_data.map((list, i) => (
                              <li key={i}><Link href="/course">{list}</Link></li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                     <div className="widget widget_blog_list">
                        <h4 className="widget-title">News & Blog</h4>
                        <ul>
                           <li>
                              <h6><Link href="/blog-details">Big Ideas Of Business Branding Info.</Link></h6>
                              <span className="date"><i className="fa fa-calendar"></i>December 7, 2023</span>
                           </li>
                           <li>
                              <h6><Link href="/blog-details">Ui/Ux Ideas Of Business Branding Info.</Link></h6>
                              <span className="date"><i className="fa fa-calendar"></i>December 7, 2023</span>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                     <div className="widget widget_contact">
                        <h4 className="widget-title">Twitter Feed</h4>
                        <ul className="details">
                           <li>
                              <i className="fa fa-twitter"></i>
                              Simply dummy brand  <a href="#">https//tweets/c3l.com</a>
                              <div className="time">9 Hours ago</div>
                           </li>
                           <li>
                              <i className="fa fa-twitter"></i>
                              Simply dummy brand  <a href="#">https//tweets/c7l.com</a>
                              <div className="time">9 Hours ago</div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer-bottom">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4 col-md-6 align-self-center">
                     <Link href="/"><Image src={footerLogo} alt="img" /></Link>
                  </div>
                  <div className="col-lg-4  col-md-6 order-lg-12 text-md-right align-self-center">
                     <ul className="social-media mt-md-0 mt-3">
                        <li><Link className="facebook" href="#"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link className="twitter" href="#"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link className="instagram" href="#"><i className="fa fa-instagram"></i></Link></li>
                        <li><Link className="youtube" href="#"><i className="fa fa-youtube"></i></Link></li>
                        <li><Link className="pinterest" href="#"><i className="fa fa-pinterest"></i></Link></li>
                     </ul>
                  </div>
                  <div className="col-lg-4 order-lg-8 text-lg-center align-self-center mt-lg-0 mt-3">
                     <p>copyright 2024 by Islamtv-254.online</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
