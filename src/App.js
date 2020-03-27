import withRoot from './modules/withRoot'
import React from 'react'
import AppAppBar from './modules/views/AppAppBar'
import ProductHero from './modules/views/ProductHero'
import ProductHowItWorks from './modules/views/ProductHowItWorks'
import ProductCTA from './modules/views/ProductCTA'
import ProductValues from './modules/views/ProductValues'
import AppFooter from './modules/views/AppFooter'


function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductValues />     
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Index)
