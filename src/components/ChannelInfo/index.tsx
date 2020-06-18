import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>chat-livre</Title>
      <Separator />
      <Description>Chat livre para qualquer conversa :)</Description>
    </Container>
  )
};

export default ChannelInfo;
