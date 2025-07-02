import React, { ErrorInfo, ReactNode } from 'react';
import { CommonError } from './../template/CommonError';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  isOnline: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, isOnline: navigator.onLine };

    this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
  }

  updateOnlineStatus() {
    this.setState({ isOnline: navigator.onLine });
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true, isOnline: navigator.onLine };
  }

  componentDidMount() {
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { isOnline } = this.state;
    const { children } = this.props;

    if (!isOnline) {
      return <CommonError description="Check your internet connection" />;
    }

    if (hasError) {
      return <CommonError />;
    }

    return children;
  }
}

export default ErrorBoundary;
