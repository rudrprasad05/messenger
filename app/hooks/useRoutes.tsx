import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";
import {
    HiOutlineChat,
    HiOutlineUser,

} from 'react-icons/hi'

import {
    HiOutlineArrowLeftOnRectangle
} from 'react-icons/hi2'

const useRoutes = () => {
    const pathname = usePathname()
    const conversationId = useConversation()

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiOutlineChat,
            active: pathname === '/conversations' && !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiOutlineUser,
            active: pathname === '/users'
        },
        {
            label: 'Logout',
            href: '#',
            onClick: () => signOut(),
            icon: HiOutlineArrowLeftOnRectangle
        }
    ], [pathname, conversationId])

    return routes
}


export default useRoutes