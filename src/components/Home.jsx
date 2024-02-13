import React from 'react'
import ImageDiv from './ImageDiv'
import TextPage from './TextPage'
import InfoPage from './InfoPage'
import Works from './Works'
const Home = () => {
  return (
    <>
        <ImageDiv image='/mainpagePic.jpg' />
        <TextPage heading={"We believe in the power of food to enhance quality of life."} bottomText={"This belief fuels our desire to use our global scale, resources and expertise to contribute to a healthier and sustainable future for people and the planet.<br>Creating Shared Value (CSV) is at the heart of our purpose: to unlock the power of food to enhance quality of life for everyone, today and for generations to come. We have sought to build our business by taking decisions that are not just good for us and our shareholders, but for society and the planet as well.<br>Our work is guided by a desire to contribute to nutritious and sustainable diets, to help protect, renew and restore natural resources, to help strengthen communities and to operate responsibly.<br>Our approach to sustainability is wide-ranging, underpinned by commitments to strive for net-zero emissions and deforestation-free supply chains and to advance regenerative agriculture at scale. Alongside, we are committed to improving water stewardship, developing better packaging with improved circularity, creating opportunities for young people and building a diverse and inclusive workforce."} />
        <InfoPage cardHeading={"Our approach"} cardText={"At Colgate, we are making it our business to advance regenerative food systems at scale - our own resilience and success depend on it. We are playing our part in developing global food systems that put people first and contribute to the resilience and well-being of farming communities where we source raw materials, all while aiming to protect, renew and restore the environment."} cardImage={"/cardImage.jpg"} infoCards={[["6.4","million tonnes","CO2e reductions compared with a business-as-usual scenario"],["129.2","billion","servings of affordable nutrition with micronutrient fortification. The figure rises to 211.4 billion servings for our total product portfolio"],["30.2%","","of our top 200+ senior executive positions are held by women (up from 26.6% in 2020 and achieving our target)"]]} />
        <Works pageHeading={"Sustainability through Colgate"} cardHeadings={{
    "Climate action": [
      "/climateAction.jpg",
      "We have put peak carbon behind us and aim to halve greenhouse gas emissions by 2030.",
      "/climateaction"
    ],
    "Waste Reduction": [
      "/wasteCardwithBg.png",
      "Our ambition is a future where none of our packaging ends up in landfill or as litter.",
      "/wastereduction"
    ],
    "Protecting Nature": [
      "/natureCard.jpg",
      "We remain focused on achieving and maintaining 100% deforestation-free primary supply chains for meat, palm oil, pulp and paper, soy and sugar, and aim to do so by 2025 for coffee and cocoa.",
      "/nature"
    ],
    "Water stewardship": [
      "/watercanalCard.jpg",
      "Colgate aims to reduce water use in our factories by 6 miilion m3 between 2021 and 2023.",
      "/watercanal"
    ],
    "Human rights": [
      "/humanrightsCard.jpg",
      "We have published action plans for each of the salient issues in our Human Rights Framework and Roadmap and aim to report our progress against them by 2025.",
      "/humanrights"
    ],
    "Sustainably sourced raw materials": [
      "/rawmaterialsCard.jpg",
      "We aim for 100% of our key ingredients to be produced sustainable by 2030.",
      "/rawmaterials"
    ],
    "Taking care of people and communities": [
      "/communityCard.jpg",
      "We respect and encourage all our employees and value their potential. At the same time, we are working to boost the well-being of communities and enable a just transition to regenerative practices.",
      "/community"
    ],
    "Ethical and responsible business practices": [
      "/businessforestroadCard.jpg",
      "We continue working to generate trust as an ethical and sustainable business: to inspire industry and collaborate with our peers to make changes that help in the transition toward regenrative food systems.",
      "/businessforestroad"
    ],
    "Performance and reporting": [
      "/reportingcenterfarmCard.jpg",
      "Transparent, public reporting on our activities, commitments and performance is embedded in how we do business at Colgate.",
      "/reportingcenterfarm"
    ],
  }}/>
    </>
  )
}

export default Home