import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary flex flex-col items-center justify-center p-8 bg-red-900/20 rounded-xl border border-red-500/30">
          <h2 className="text-xl font-bold text-red-400 mb-2">Oops, something went wrong</h2>
          <p className="text-secondary mb-4">Failed to load 3D component. Don't worry, the rest of the portfolio works fine!</p>
          <button 
            className="px-4 py-2 bg-tertiary rounded-lg text-white hover:bg-red-500 transition"
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
          >
            Try Again
          </button>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 text-secondary text-sm max-w-md">
              <summary>Details</summary>
              <pre className="mt-2 p-2 bg-black/30 rounded overflow-auto">
                {this.state.error && this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;