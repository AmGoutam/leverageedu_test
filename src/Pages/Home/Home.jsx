import React from 'react'
import Banner from '../../components/Banner/Banner'
import Faq from '../../components/Faq/Faq'
import EveryDreamHasAStory from '../../components/EveryDreamHasAStory/EveryDreamHasAStory'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import FeaturedAcross from '../../components/slider/FeaturedAcross/FeaturedAcross'

const Home = () => {
  return (
    <>
     <Banner/> 
     <EveryDreamHasAStory/>
     <FeaturedAcross/>
     <Faq/>
     <WhatsAppButton/>
    </>
  )
}

export default Home
