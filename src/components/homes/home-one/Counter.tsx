import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/1.png";
import icon_2 from "@/assets/img/icon/2.png";
import icon_3 from "@/assets/img/icon/3.png";
import Count from "@/components/common/Count";

interface DataType {
   id: number;
   icon: StaticImageData;
   count: number;
   title: string;
}[];

const counter_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      count: 200,
      title: "Learners & counting",
   },
   {
      id: 2,
      icon: icon_2,
      count: 12,
      title: "Total courses",
   },
   {
      id: 3,
      icon: icon_3,
      count: 348,
      title: "Successful students taught",
   },
]

const Counter = () => {
   return (
      <div className="counter-area bg-gray">
         <div className="container">
            <div className="counter-area-inner pd-top-120 pd-bottom-120" style={{ backgroundImage: `url(/assets/img/other/1.png)` }}>
               <div className="row">
                  <div className="col-lg-8 mb-5 mb-lg-0">
                     <div className="section-title mb-0">
                        <h6 className="sub-title right-line">Funfact</h6>
                        <h2 className="title">Strength in Numbers</h2>
                        <p className="content pb-3">IslamTV-254 has taught over 300 students, Raised donations for the needy, Constructed Mosques in local areas, Dug wells, boreholes,   Robbing Scholarships to international Universties eg Turkey ||Austrial || Mecca||Madina</p>
                        <div className="btn-counter bg-base mt-4">
                           <h3 className="left-val align-self-center"><span className="counter"><Count number={348} /></span>k+</h3>
                           <div className="right-val align-self-center">
                              Successful <br /> students
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 align-self-center">
                     <ul className="single-list-wrap">
                        {counter_data.map((item) => (
                           <li key={item.id} className="single-list-inner style-box-bg">
                              <div className="media">
                                 <div className="media-left">
                                    <Image src={item.icon} alt="img" />
                                 </div>
                                 <div className="media-body align-self-center">
                                    <h5><span className="counter"><Count number={item.count} /></span>+</h5>
                                    <p>{item.title}</p>
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

export default Counter
