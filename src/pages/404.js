import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="Oups, something went wrong...">
    <SEO title="404: Not found" />
    <Link to={'/'} className="btn btn-primary">
      Go Home
    </Link>
  </Layout>
)

export default NotFoundPage
