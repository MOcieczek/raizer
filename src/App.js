import withRoot from './modules/withRoot'
import React from 'react'
import ProductHero from './modules/views/ProductHero'
import ProductHowItWorks from './modules/views/ProductHowItWorks'
import ProductCTA from './modules/views/ProductCTA'
import AppAppBar from './modules/views/AppAppBar'
import AppFooter from './modules/views/AppFooter'


function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductHowItWorks />
      <ProductCTA />
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Index)
