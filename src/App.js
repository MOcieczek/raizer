import withRoot from './modules/withRoot'
import React from 'react'
import ProductHero from './modules/views/ProductHero'
import ProductHowItWorks from './modules/views/ProductHowItWorks'
import ProductCTA from './modules/views/ProductCTA'
import AppAppBar from './modules/views/AppAppBar'
import ProductValues from './modules/views/ProductValues'
import AppFooter from './modules/views/AppFooter'


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
