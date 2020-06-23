import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(25).keys()).map((n) => (
          <ChannelMessage
          author="Alan Turing"
          date="09/07/2020"
          content="Lorem ipsum dolor"
        />
        ))

        }
        <ChannelMessage
          author="Gabriel Rocha"
          date="10/07/2020"
          content="Hoje é meu aniversário"
        />

        <ChannelMessage
          author="Gothic Graves"
          date="10/07/2020"
          content={
            <>
              <Mention>@Ezreal Blindado</Mention> iai?
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="Dyno"
          date="10/07/2020"
          content={
            <>
              <Mention>@Ezreal Blindado</Mention> Parabéns! Tudo de melhor sempre :D
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Panela Craft"
          date="10/07/2020"
          content="#ACasaCaiu"
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;
