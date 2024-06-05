import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/img/icon/12.png";
import icon_2 from "@/assets/img/icon/13.png";
import icon_3 from "@/assets/img/icon/14.png";
import icon_4 from "@/assets/img/icon/15.png";

interface DataType {
   id: number;
   icon: StaticImageData
   title: string;
   desc: string;
}[];

const work_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Sign up",
      desc: "Create an Acoount",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Select course",
      desc: "Choose from among the various courses",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Start Learning",
      desc: "Through videos and Pdf's",
   },
   {
      id: 4,
      icon: icon_4,
      title: "Get Certificate",
      desc: "Download Certificate after succesfull completion of a course",
   },
]

const WorkArea = () => {
   return (
      <div className="work-area pd-top-110">
         <div className="container">
            <div className="section-title">
               <div className="row">
                  <div className="col-lg-6 align-self-center">
                     <h6 className="sub-title right-line">What we do</h6>
                     <h2 className="title">How it works?</h2>
                  </div>
                  <div className="col-lg-6 align-self-center">
                     <p className="content mt-lg-0">A detailed summary of how to enroll for a course</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {work_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="single-intro-inner style-icon-bg bg-gray text-center">
                        <div className="thumb">
                           <Image src={item.icon} alt="img" />
                           <div className="intro-count">{item.id}</div>
                        </div>
                        <div className="details">
                           <h5>{item.title}</h5>
                           <p>{item.desc}</p>
                           {/* <Link className="read-more-text" href="/blog-details">Read More <i className="fa fa-angle-right"></i></Link> */}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default WorkArea
