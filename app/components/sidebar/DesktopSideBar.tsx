'use client'

import useRoutes from "@/app/hooks/useRoutes"
import { User } from "@prisma/client"
import { useState } from "react"
import Avatar from "../Avatar"
import DesktopItem from "./DesktopItem"
import SettingsModal from "./SettingsModal"

interface DesktopSideBarProps{
   currentUser : User 
}

const DesktopSideBar : React.FC<DesktopSideBarProps> = ({
  currentUser
}) => {
  const routes = useRoutes()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SettingsModal 
        isOpen={isOpen}
        currentUser={currentUser}
        onClose={() => setIsOpen(false)}
      />
      <div className="hidden lg:flex md:fixed px-5 py-2 border h-screen relative flex-col justify-between">
        <nav>
          <ul className="flex flex-col gap-5 z-50">
            {routes?.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                onClick={item.onClick}
                icon={item.icon}
                active={item.active}

              />
            ))}
          </ul>
        </nav>
        <nav className="mt-auto">
          <div onClick={() => setIsOpen(true)} className={'cursor-pointer'}>
              <Avatar user={currentUser} />
          </div>
        </nav>
      </div>

    </>
    
  )
}

export default DesktopSideBar