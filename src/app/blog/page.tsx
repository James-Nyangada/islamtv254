import Blog from "@/components/blogs/blog";
import Wrapper from "@/layouts/Wrapper";


export const revalidate =  10 //resreshes after every 10 seconds

export const metadata = {
   title: "Blog Islamtv-254 - Islamtv-254 LMS & Online Courses React Next js Template",
};
const page = () => {
   return (
      <Wrapper>
         <Blog />
      </Wrapper>
   )
}

export default page