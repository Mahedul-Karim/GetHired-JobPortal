import React from "react";

import ErrorBoundary from "../util/ErrorBoundary";
import ErrorsFallback from "../components/errors/ErrorsFallback";
import { useLocation } from "react-router";

interface Props {
  children: React.ReactNode;
  boundaryFor?: "default";
}

const BoundaryWrapper: React.FC<Props> = ({
  children,
  boundaryFor = "default",
}) => {
  const location = useLocation();
  const routeKey = location.pathname;

  return (
    <ErrorBoundary
      fallback={({ error }) => (
        <ErrorsFallback error={error} errorFor={boundaryFor} />
      )}
      key={routeKey}
    >
      {children}
    </ErrorBoundary>
  );
};

export default BoundaryWrapper;
