import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/16.png"
import icon_2 from "@/assets/img/icon/17.png"
import icon_3 from "@/assets/img/icon/18.png"
import HomeContactForm from "@/components/forms/HomeContactForm";

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   address: JSX.Element;
}[];

const contact_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Our Address",
      address: (<><p>Nairobi, Kenya</p>
         <p>South B || Masjid Alhuda</p></>),
   },
   {
      id: 2,
      icon: icon_2,
      title: "Our Phone",
      address: (<><p>+254 791 278 751</p>
         <p>+256 772 437 053</p></>),
   },
   {
      id: 3,
      icon: icon_3,
      title: "Our Email",
      address: (<> <p>noordeena49@gmail.com</p>
         </>),
   },
]

const Contact = () => {
   return (
      <div className="contact-area bg-overlay mt-200 pd-bottom-90" style={{ backgroundImage: `url(/assets/img/banner/2.png)` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <HomeContactForm />
               </div>
               <div className="col-lg-4 align-self-end">
                  <div className="mt-5 mt-lg-0">
                     <ul className="single-list-wrap">
                        {contact_data.map((item) => (
                           <li key={item.id} className="single-list-inner style-white style-check-box-grid-2">
                              <div className="media">
                                 <div className="media-left">
                                    <Image src={item.icon} alt="img" />
                                 </div>
                                 <div className="media-body align-self-center">
                                    <h5>{item.title}</h5>
                                    {item.address}
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

export default Contact
