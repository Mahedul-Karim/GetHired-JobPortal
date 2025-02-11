import React from "react";
import Container from "../../components/layout/Container";
import Sidebar from "../../components/blogs/all-blogs/sidebar/Sidebar";
import Main from "../../components/blogs/all-blogs/main/Main";

const Blog = () => {
  return (
    <Container as="div" className="grid lg:grid-cols-[1fr_0.5fr] gap-6 py-36">
      <Main />
      <Sidebar />
    </Container>
  );
};

export default Blog;
