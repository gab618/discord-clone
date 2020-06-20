import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="regras" />
      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="lol" />
      <ChannelButton channelName="clips" />
      <ChannelButton channelName="copypastas" />

      <Category>
        <span>Canais de Voz</span>
        <AddCategoryIcon />
      </Category>
    </Container>
  )
};

export default ChannelList;
