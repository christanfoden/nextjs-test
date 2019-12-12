import React, { useEffect } from "react";
import Layout from "../components/Layout";

export default function About() {
  useEffect(() => {
    console.log("Test");
  }, []);

  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  );
}
