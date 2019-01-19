import React from 'react';
import Layout from '../components/layout';
import App from '../components/App';
import SEO from '../components/seo';

export default class IndexPage extends React.Component {

  render () {
    return (
      <Layout>
        <SEO 
          title="Brendan Walker" 
          description="Full Stack Web Developer for the modern age"
          keywords={["brendan", "walker", "web", "developer", "victoria", "bc", "best", "web developer", "full stack" ]} 
        />
        <App />
      </Layout>
      
    )
  }
}
  


