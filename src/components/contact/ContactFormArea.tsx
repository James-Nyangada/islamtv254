import Link from "next/link";
import ContactForm from "../forms/ContactForm";

const icons: string[] = ["fa fa-facebook", "fa fa-youtube",];

const ContactFormArea = () => {
   return (
      <div className="counter-area pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="section-title mb-0">
                     <h6 className="sub-title right-line">Get in touch</h6>
                     <h2 className="title">Qoute</h2>
                     <p className="content pb-3">وقوله سبحانه: قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لا يَعْلَمُونَ. أي: هل يستوي هذا والذي قبله ممن جعل لله أنداداً ليضل عن سبيله. وقوله: إِنَّمَا يَتَذَكَّرُ أُولُو الْأَلْبَابِ. أي: إنما يعلم الفرق بين هذا، وهذا من له لب وهو
                     And the Almighty said: Say, “Are those who know and those who do not know equal?”  That is: Is this equal to those before him, those who set up rivals to God to stray from His path?  And he said: Only those of understanding remember.  That is: He only knows the difference between this one and this one who has a core and this one</p>
                     <ul className="social-media style-base pt-3">
                        {icons.map((icon, i) => (
                           <li key={i}>
                              <Link href="#"><i className={icon} aria-hidden="true"></i></Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-lg-8 mt-5 mt-lg-0">
                  <ContactForm />
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactFormArea
