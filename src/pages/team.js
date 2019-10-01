import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import { Button, Card, CardText, CardBody, CardTitle, Row } from "reactstrap"
import MatueszPhoto from "../images/javascript-code.jpg"
import JanPhoto from "../images/javascript-code-2.jpg"
import { slugify } from "../util/utilityFunctions"

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" />
    <Row className="mb-4">
      <div className="col-md-4">
        <img
          src={MatueszPhoto}
          style={{ maxWidth: "100%" }}
          alt="Mateusz Profile"
        />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>
              {authors[0].bio}
            </CardText>
            <Button
                color="primary"
                href={`/author/${slugify(authors[0].name)}`}
              >
                View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-4">
        <img src={JanPhoto} style={{ maxWidth: "100%" }} alt="Jan Profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>
              {authors[1].bio}
            </CardText>
            <Button
                color="primary"
                href={`/author/${slugify(authors[1].name)}`}
              >
                View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
