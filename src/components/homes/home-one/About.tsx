import Image from "next/image"

import bannerThumb from "@/assets/img/icon/4.png"

const About = () => {
   return (
      <div className="about-area pd-top-140">
         <div className="container">
            <div className="about-area-inner">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="about-thumb-wrap left-icon" style={{ backgroundImage: `url(/assets/img/banner/2.png)` }}>
                        <div className="about-icon"><Image src={bannerThumb} alt="img" /></div>
                        <div className="bottom-content">
                           Let's share the knowledge
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="about-inner-wrap pl-xl-4 pt-5 pt-lg-0 mt-5 mt-lg-0">
                        <div className="section-title mb-0">
                           <h6 className="sub-title right-line">ABOUT US</h6>
                           <h2 className="title">Islam Tv-254</h2>
                           <p className="content">Is an online broadcasting channel that distributes Islamic lectures from local scholars and international scholars through authentic Islamic content, in relation to Islamic sheria(Jurisprudence)</p>
                           <ul className="single-list-wrap">
                              <li className="single-list-inner style-check-box-grid">
                                 <div className="media">
                                    <div className="media-left">
                                       <i className="fa fa-check"></i>
                                    </div>
                                    <div className="media-body">
                                       <h5>Founded</h5>
                                       <p>IslamTv-254 was founded in the year 2017 7th March By Ustaadh  Noordeen Arafat Ibin Mohammed Waburoko</p>
                                    </div>
                                 </div>
                              </li>
                              <li className="single-list-inner style-check-box-grid">
                                 <div className="media">
                                    <div className="media-left">
                                       <i className="fa fa-check"></i>
                                    </div>
                                    <div className="media-body">
                                       <h5>Mission</h5>
                                       <p>-To Spread the Islamic Lectures aid local madrassa <br />-Scholarship for opharns <br />-Aid the aged people, less fortune, widows. <br />-Construct water Sources and Madrassa <br />-Distribute Quran copies</p> 
                                       
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
