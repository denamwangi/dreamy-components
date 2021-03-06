import React from 'react';
import styled, {keyframes} from 'react-emotion';
import Issue from './issue';
import CommitLine from './commit-line';
import theme from './theme';

const IssuesCard = props => (
  <Container {...props}>
    <StyledIssue
      fadeIn
      name="DoesNotExist"
      description="/api/0/projects/"
      priority="error"
    />
    <StyledIssue name="DoesNotExist" description="/api/0/projects/" priority="error" />
    <CommitLine>9956ddd</CommitLine>
    <StyledIssue
      startAsError
      name="DoesNotExist"
      description="/api/0/projects/"
      priority="success"
    />
    <StyledIssue
      fadeOut
      name="DoesNotExist"
      description="/api/0/projects/"
      priority="success"
    />
  </Container>
);

const Container = styled('div')`
  max-width: 500px;
`;

const makeAnimation = p => keyframes`
  0% {
    ${(p.fadeIn || p.fadeOut) && `opacity: ${p.fadeIn ? 0 : 1}`};
    ${!p.fadeOut && `transform: translateY(${p.startAsError ? '-200%' : '-167%'});`}
    background: ${p.startAsError && theme.red};
  }
  ${p.startAsError &&
    `
    15% {
      transform: scale(1.01);
    }
  `}
  20% {
    ${(p.fadeIn || p.fadeOut) && `opacity: ${p.fadeIn ? 1 : 0}`};
    transform: translateY(0) scale(1);
    background: ${p.startAsError && theme.green};
  }
`;

const StyledIssue = styled(Issue)`
  font-size: 0.875em;
  margin: 1em 0;
  width: 100%;
  animation: 5s ${makeAnimation} ease-out infinite;
  transform: ${p => p.fadeOut && 'translateY(-167%)'};
  opacity: ${p => p.fadeOut && 0};
`;

export default IssuesCard;
