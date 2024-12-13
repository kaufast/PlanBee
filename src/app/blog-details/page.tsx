import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Blog Details PlanBee - Creative Saas & Software React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}

export default page