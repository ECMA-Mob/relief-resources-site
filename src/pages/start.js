import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const StartPage = ({
  data: {
    allMarkdownRemark: { edges: entities }
  }
}) => {
  
  const startText = [...new Set(entities.map(entity => entity.node.html))]
  console.log(`WHATEVER: ${startText}`)

  return (
    <Layout>
      <SEO title="Build Your Own Directory" />
      <p className="mb-10">
        <Link
          to="/"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          &larr; View All Resource Directories
        </Link>
      </p>
      <div className="mb-10 border p-4" dangerouslySetInnerHTML={{ __html: startText }}></div> 
    </Layout>
  );
};

export const startQuery = graphql`
  query starterQuery {
    allMarkdownRemark{
      edges {
        node {
          id
          html
        }
      }
    }
  }
`;

export default StartPage;
