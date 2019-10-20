import React from 'react'

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import Coach from 'src/components/coach';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[]} />
    <Coach />
  </Layout>
)

export default IndexPage
