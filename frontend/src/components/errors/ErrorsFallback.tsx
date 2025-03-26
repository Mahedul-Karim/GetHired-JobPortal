import React from "react";
import Container from "../layout/Container";
import Error from "../ui/Error";

interface Props {
  error: string | null;
  errorFor?: "default";
}

const ErrorsFallback: React.FC<Props> = ({ error, errorFor = "default" }) => {
  if (errorFor === "default") {
    return (
      <Container>
        <Error text={error!} />
      </Container>
    );
  }
};

export default ErrorsFallback;
