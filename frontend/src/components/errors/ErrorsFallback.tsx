import React from "react";
import Container from "../layout/Container";

interface Props {
  error: string | null;
  errorFor?: "default";
}

const ErrorsFallback: React.FC<Props> = ({ error, errorFor = "default" }) => {
  if (errorFor === "default") {
    return (
      <Container className="mt-60">
        <h1 className="text-4xl text-red-800">{error}</h1>
      </Container>
    );
  }
};

export default ErrorsFallback;
