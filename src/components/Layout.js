import React from "react"

import SEO from "./Layout/SEO"
import NavBar from "./Layout/NavBar"
import MediaFooter from "./Layout/MediaFooter"

const Layout = ({ pageTitle, mediaFooter = true, children }) => (
  <div class="layout">
    <SEO title={pageTitle} />
    <NavBar siteTitle="Off the Dial" />
    <div class="content layout-content">{children}</div>
    {mediaFooter && <MediaFooter />}
  </div>
)

export default Layout
