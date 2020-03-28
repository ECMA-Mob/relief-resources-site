import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Description from "../components/description";
import Directory from "../components/directory"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Description />
      <Directory />
    </Layout>
  );
};    

export default IndexPage;