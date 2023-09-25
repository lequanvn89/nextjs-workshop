import { NextPage } from 'next';
import { ChatRow } from '@stn-ui/chat-row';
import { ChatListLayout } from '@stn-ui/layout';
import { Table, TBody, THead, Td } from '@stn-ui/table';

const Home: NextPage = async () => {
  const chats = await fetch('http://localhost:3000/api/chats').then((res) => res.json());

  return (
    <ChatListLayout>
      <Table>
        <THead>
          <Td colSpan={6}>Chat</Td>
          <Td colSpan={2} hidden="tablet">
            Created at
          </Td>
          <Td colSpan={2} hidden="tablet">
            Category
          </Td>
          <Td colSpan={2} hidden="tablet">
            Messages
          </Td>
        </THead>
        <TBody>
          {chats.map((chat) => (
            <ChatRow key={chat.id} href="#" {...chat} />
          ))}
        </TBody>
      </Table>
    </ChatListLayout>
  );
};

export default Home;
