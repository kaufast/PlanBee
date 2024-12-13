import Hero from "./Hero"
import BlockFeature from "./BlockFeature"
import BlockFeatureTwo from "./BlockFeatureTwo"
import Feedback from "./Feedback"
import FancyBanner from "./FancyBanner"
import Pricing from "./Pricing"
import FooterSeven from "@/layouts/footers/FooterSeven"
import HeaderTen from "@/layouts/headers/HeaderTen"

const HomeTen = () => {
  return (
    <div className="main-page-wrapper">
      <HeaderTen />
      <Hero />
      <BlockFeature />
      <Pricing />
      <BlockFeatureTwo />
      <Feedback />

      <FancyBanner />
      <FooterSeven />
    </div>
  )
}

export default HomeTen
