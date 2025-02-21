import { Send } from 'lucide-react'
import React from 'react'

const MessageInput = () => {
  return (
    <div className="h-[50px] px-1 xs:px-4 bg-[#d4e6ff]/[0.4] grid content-center">
        <div className= "bg-white rounded-full flex items-center py-1 px-4">
          <div className="w-full">
            <input type="text" placeholder="Your Message...." className="w-full focus:outline-none text-dark-3 placeholder:text-sm"/>
          </div>
          <div className="flex items-center">
            <button>
              <Send className="size-5 text-primary"/>
            </button>
          </div>
        </div>
      </div>
  )
}

export default MessageInput