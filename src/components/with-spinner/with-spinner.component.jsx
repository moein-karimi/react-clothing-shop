import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

/* const WithSpinner = WrappedComponnent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponnent {...otherProps} />
  );
}; */

const WithSpinner = WrappedComponnent => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponnent {...otherProps} />
    );
  };
  return spinner;
};

export default WithSpinner;
