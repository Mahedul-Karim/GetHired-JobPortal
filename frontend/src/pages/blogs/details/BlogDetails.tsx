import React from "react";
import { useParams } from "react-router";
import Container from "../../../components/layout/Container";
import Main from "../../../components/blogs/details/main/Main";
import Sidebar from "../../../components/blogs/details/sidebar/Sidebar";

const BlogDetails = () => {
  const { slug } = useParams();

  console.log(slug);

  return (
    <Container className="py-36 grid md:grid-cols-[1fr_0.5fr] gap-6">
      <Main />
      <Sidebar />
    </Container>
  );
};

export default BlogDetails;
