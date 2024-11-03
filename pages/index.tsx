import Hero from '@/components/Hero'
import Achievements from '@/components/home/Achievements'
import Location from '@/components/home/Location'
import Stats from '@/components/home/Stats'
import Testimonials from '@/components/home/Testimonials'
import ValueProposition from '@/components/home/ValueProposition'
import WhatMakesUsDifferent from '@/components/home/WhatMakesUsDifferent'
import Layout from '@/pages/layout'
import img from '@/public/assets/office.jpg'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Achievements 
        title="Skylabs wins “Product of the Year”" 
        description="We have successfully transformed multiple businesses through our cutting-edge AI and SaaS solutions. We won the top award at AV-Comparatives, a leading European test lab, after outscoring 14 competitors across a series of rigorous tests.
Our win comes from exceptional results in categories including malware detection, targeted attack prevention, and impact on system performance." 
        imageUrl={img.src} 
      />
      <Stats />
      <ValueProposition />
      <WhatMakesUsDifferent />
      <Testimonials />
      <Location />
    </Layout>
  )
}

export default Home
