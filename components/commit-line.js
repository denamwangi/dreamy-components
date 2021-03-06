import React from 'react';
import styled from 'react-emotion';
import theme from './theme';

const CommitLine = ({children, ...props}) => {
  return (
    <CommitLineContainer {...props}>
      <Line />
      <div>{children}</div>
      <Line />
    </CommitLineContainer>
  );
};

const CommitLineContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr auto 10%;
  grid-column-gap: 1em;
  align-items: center;
  color: ${theme.purple};
  font-family: sans-serif;
  font-size: 0.75em;
`;

const Line = styled('div')`
  height: 1px;
  background-image: linear-gradient(
    90deg,
    ${theme.purple},
    ${theme.purple} 50%,
    transparent 50%,
    transparent 100%
  );
  background-size: 3px 1px;
  border: none;
`;

export default CommitLine;
