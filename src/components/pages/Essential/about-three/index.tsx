import BlockFeature from "./BlockFeature"
import BreadCrumb from "./BreadCrumb"
import Brand from "@/components/homes/home-3/Brand"
import FancyBanner from "@/components/homes/home-10/FancyBanner"
import Feedback from "./Feedback"
import FooterSeven from "@/layouts/footers/FooterSeven"
import HeaderTen from "@/layouts/headers/HeaderTen"

const AboutThree = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTen />
      <BreadCrumb />
      <BlockFeature />
      <Feedback />
      <Brand />
      <FancyBanner />
      <FooterSeven />
    </div>
  )
}

export default AboutThree
