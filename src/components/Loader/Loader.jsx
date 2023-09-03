import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#fff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // marginTop: '170px',
      }}
      visible
    />
    </LoaderContainer>

  );
};

export default Loader;
