import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => (
  <div className='md:grid block md:grid-cols-[280px_1fr] px-2 md:px-4 py-4'>
    <HeroLeft />
    <HeroRight/>
  </div>
)

export default Hero
