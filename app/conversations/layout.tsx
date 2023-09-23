import React from "react";
import getConversations from "../actions/getConversation";
import getUsers from "../actions/getUsers";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";



export default async function ConversationsLayout({ children } : { children: React.ReactNode }) {
  
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <SideBar>
      <div className="h-full">
        <ConversationList 
          users={users} 
          title="Messages" 
          initialItems={conversations}
        />
        {children}
      </div>
    </SideBar>
  );
}