import Singup from "@/components/inner-pages/signup";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Singup Edumint - Edumint LMS & Online Courses React Next js Template",
};
const page = () => {
   return (
      <Wrapper>
         <Singup />
      </Wrapper>
   )
}

export default page