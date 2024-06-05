import intro_data from "@/data/IntroData"
import Image from "next/image"


const IntroArea = () => {
   return (
      <div className="intro-area intro-area--top">
         <div className="container">
            <div className="intro-area-inner intro-home-1 bg-black">
               <div className="row no-gutters">
                  <div className="col-lg-4 text-lg-left text-center">
                     <div className="intro-title">
                        <h3>Why Choose IslamTv-254 </h3>
                        <p>We are the best online platform to enrich your islamic knowledge</p>
                        <ul>
                           <li><i className="fa fa-check"></i> Tried and tested </li>
                           <li><i className="fa fa-check"></i> Best Islamic Scholars</li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-8 align-self-center">
                     <ul className="row no-gutters">
                        {intro_data.filter((items) => items.page === "home_1").map((item) => (
                           <li key={item.id} className="col-md-4">
                              <div className="single-intro-inner style-white text-center">
                                 <div className="thumb">
                                    <Image src={item.icon} alt="img" />
                                 </div>
                                 <div className="details">
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default IntroArea
