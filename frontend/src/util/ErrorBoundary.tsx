import React, { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (props: { error: string | null }) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error:", error.message);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ? (
        this.props.fallback({ error: this.state.message })
      ) : (
        <h1>{this.state.message}</h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
