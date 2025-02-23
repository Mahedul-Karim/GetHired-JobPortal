import React from "react";
import { useParams } from "react-router";
import Container from "../../../../components/layout/Container";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

const UserDetails = () => {
  const { userId } = useParams();

  return <Container className="py-36 grid md:grid-cols-[1fr_0.5fr] gap-6">
    <Main />
    <Sidebar />
  </Container>;
};

export default UserDetails;
