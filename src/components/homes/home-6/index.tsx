import FooterFive from "@/layouts/footers/FooterFive"
import BlockFeature from "./BlockFeature"
import BlockFeatureTwo from "./BlockFeatureTwo"
import FancyBanner from "./FancyBanner"
import FancyBannerTwo from "./FancyBannerTwo"
import Feedback from "./Feedback"
import Hero from "./Hero"
import Pricing from "./Pricing"
import HeaderSix from "@/layouts/headers/HeaderSix"

const HomeSix = () => {
  return (
    <div className="main-page-wrapper home-six-bg">
      <HeaderSix />
      <Hero />
      <FancyBanner />
      <BlockFeature />
      <BlockFeatureTwo />
      <Feedback />
      <Pricing />
      <FancyBannerTwo />
      <FooterFive />
    </div>
  )
}

export default HomeSix
