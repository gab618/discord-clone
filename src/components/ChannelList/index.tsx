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
      <ChannelButton channelName="League of Legends" />
      <ChannelButton channelName="Clips" />
      <ChannelButton channelName="Copypastas" />
    </Container>
  )
};

export default ChannelList;
