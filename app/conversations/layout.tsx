import React from "react";
import getConversations from "../actions/getConversation";
import SideBar from "../components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({ children } : {children : React.ReactNode}) {

    const converstaions = await getConversations()
    return(
    // @ts-expect-error Server Component
    <SideBar>
        <div className="h-full">
            <ConversationList
                initialItems = {converstaions}
            />
            {children}
        </div>
    </SideBar>
    )
}