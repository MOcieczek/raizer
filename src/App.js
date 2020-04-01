import withRoot from './modules/withRoot'
import React from 'react'
import ProductHero from './modules/views/ProductHero'
import ProductValues from './modules/views/ProductValues'
import ProductHowItWorks from './modules/views/ProductHowItWorks'
import ProductCTA from './modules/views/ProductCTA'
import AppAppBar from './modules/views/AppAppBar'
import AppFooter from './modules/views/AppFooter'
import ProductSmokingHero from './modules/views/ProductSmokingHero'


function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues/>
      <ProductSmokingHero/>
      <ProductHowItWorks />
      <ProductCTA />
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Index)
