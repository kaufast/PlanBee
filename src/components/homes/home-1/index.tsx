// import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterOne from "@/layouts/footers/FooterOne"
import Brand from "../home-1/Brand"
import AppIntegration from "./AppIntegration"
import BlockFeature from "./BlockFeature"
git add .
git commit -m "Updated PlanBHome component for deployment"
git push origin main

import BlockFeatureTwo from "./BlockFeatureTwo"
import Contact from "./Contact"
import Counter from "./Counter"
import FancyBanner from "./FancyBanner"
import FAQ from "./FAQ"
import Feedback from "./Feedback"
import Hero from "./Hero"
import HeaderEight from "@/layouts/headers/HeaderEight"

const PlanBHome = () => {
   return (
      <div className="main-page-wrapper">
      <HeaderEight />
         <Hero />
         <Brand />
         <BlockFeature />
         <Counter />
         <BlockFeatureTwo />
         <AppIntegration />
         <Feedback />
         <FAQ />
         <Contact />
         <FancyBanner />
         <FooterOne />
      </div>
   )
}

export default PlanBHome
