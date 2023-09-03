import React from 'react'
import myImage from 'images/pngwing.com.png';
import { SectionContainer, NoFollowImg,NoFollowText } from './NoFollowers.styled';

const NoFollowers = () => {
  return (
    <SectionContainer>
    <NoFollowText>No followed users</NoFollowText>
      <NoFollowImg src={myImage} alt="Моя картинка" />

    </SectionContainer>
  )
}

export default NoFollowers
