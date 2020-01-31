import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-boundary">
          <img
            className="error-boundary__image"
            src="https://i.imgur.com/yW2W9SC.png"
            alt="Error"
          />
          <p className="error-boundary__text">Sorry this page is broken</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
