import React from 'react';
import styled, {keyframes} from 'react-emotion';
import Avatar from './avatar';
import Issue from './issue';

const SuggestedAssignees = ({priority, ...props}) => (
  <Container {...props}>
    <StyledIssue description="E3fc2x" priority="error" triangleUp={true}/>
    <Avatars>
      <AvatarPackage top left src="https://sentry.io/_assets/people/matte-noble-98626d554cd2dcc6fbf5fba79428eb810c8ed7cb75da65baab550cb7d0d32061.jpg" />
      <AvatarPackage end top middle src="https://sentry.io/_assets/people/meredith-9530c4a02bc5e6135f3eb4c731f704ae9456637fb98452d1c8b10a1f91f02014.jpg" />
      <AvatarPackage top right src="https://sentry.io/_assets/people/denamwangi-e522c9cae55e1a226b03e57bed5a27a44a92fe870fe2de0a6559a8fb4bdaece5.jpg" />
      <AvatarPackage bottom left src="https://sentry.io/_assets/people/colleenorourke-8b97c40b41b68e31097b8d3dbe21cbb53dd09d7b0034ef5c92c8b951ea6adfc5.jpg" />
      <AvatarPackage start bottom middle src="https://sentry.io/_assets/people/benvinegar-28a3febe24d6cdac0ea9d896e3c16570b1c7b31083f08fa5d54f46e8df0e2bda.jpg" />
      <AvatarPackage bottom right src="https://sentry.io/_assets/people/adhiraj-5faa25498fde92382792066aa195c48ec5b4e2f7530ba4bcada1fd332bb86e98.jpg" />
    </Avatars>
  </Container>
)

const rotation = (operator = 1) => keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(${180 * operator}deg);
  }
  50% {
    transform: rotate(${180 * operator}deg);
  }
  70% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const getAnimation = (p) => {
  const startColor = p.start ? p.theme.green : p.theme.gray1;
  const endColor = p.start ? p.theme.gray1 : p.theme.green;
  const startSize = p.start ? 1.1 : 1;
  const endSize = p.start ? 1 : 1.1;

  return keyframes`
    0% {
      border-color: ${startColor};
      transform: scale(${startSize}) rotate(0deg);
    }
    20% {
      border-color: ${endColor};
      transform: scale(${startSize}) rotate(-180deg);
    }
    25% {
      transform: scale(${endSize}) rotate(-180deg);
    }
    50% {
      border-color: ${endColor};
      transform: scale(${endSize}) rotate(-180deg);
    }
    70% {
      border-color: ${startColor};
      transform: scale(${endSize}) rotate(0deg);
    }
    75% {
      transform: scale(${startSize}) rotate(0deg);
    }
    100% {
      border-color: ${startColor};
      transform: scale(${startSize}) rotate(0deg);
    }
  `
}

const Container = styled('div')`
  width: 70px;
  height: 70px;
  left: 50%;
  transform: translateX(-100%);
  position: relative;
  transform-origin: center center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Avatars = styled('div')`
  width: 70px;
  height: 70px;
  position: relative;
  animation: 5s ${rotation()} infinite;
`;

const StyledIssue = styled(Issue)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.875em;
`;

const getTransforms = p => {
  if (p.bottom && p.middle) return `0, -150%`;
  if (p.top && p.middle) return `0, 150%`
  if (p.top && p.right) return `-150%, 75%`
  if (p.top && p.left) return `-150%, -75%`
  if (p.bottom && p.right) return `150%, 75%`
  if (p.bottom && p.left) return `150%, -75%`
}

const StyledAvatar = styled(Avatar)`
  position: absolute;
  animation: 5s ${rotation(-1)} infinite${p => (p.start || p.end) && `, 5s ${getAnimation(p)} infinite`};
  width: 70px;
  height: 70px;
`;

const AvatarWrapper = styled('div')`
  transform: translate(${getTransforms});
  width: 70px;
  height: 70px;
  position: absolute;
`;

const AvatarPackage = ({src, start, end, ...props}) => (
  <AvatarWrapper {...props}>
    <StyledAvatar start={start} end={end} src={src}/>
  </AvatarWrapper>
)

export default SuggestedAssignees;
