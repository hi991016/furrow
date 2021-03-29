import React from "react"
import Layout from "../components/layout"

// components 
import HomeBanner from '../components/homePage/homeBanner'
import HomeContent from '../components/homePage/homeContent'
import HomeFeatured from "../components/homePage/homeFeatured"
import HomeAbout from "../components/homePage/homeAbout"

// context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

const IndexPage = props => {

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
