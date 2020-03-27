import withRoot from './modules/withRoot'
import React from 'react'
import AppFooter from './modules/views/AppFooter'
import ProductHero from './modules/views/ProductHero'
import ProductValues from './modules/views/ProductValues'
import ProductCTA from './modules/views/ProductCTA'
import AppAppBar from './modules/views/AppAppBar'
import ProductHowItWorks from './modules/views/ProductHowItWorks'

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductHowItWorks />
      <ProductValues />
      <ProductCTA />
     
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Index)
