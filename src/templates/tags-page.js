import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Badge, Button } from 'reactstrap'
import { slugify } from '../util/utilityFunctions'

const tagsPage = ({pageContext}) => {
    const { tags, tagPostCounts } = pageContext
    return (
        <Layout pageTitle="All tags">
            <SEO title="All tags" />
            <ul className="d-flex flex-column align-items-center">
                {tags.map(tag =>(
                    <li key={tag} style={{marginBottom: '10px'}}>
                        <Button color="primary" href={`/tag/${slugify(tag)}`}>
                            {tag}
                            <Badge className="ml-2" color="light">
                                {tagPostCounts[tag]}
                            </Badge>
                        </Button>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default tagsPage