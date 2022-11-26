import { observer } from 'mobx-react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'

import { useStore } from '../stores'

export const ThemeToggle = observer(() => {
  const store = useStore()
  return (
    <button
      onClick={() => store.theme.toggle()}
      className={`
            flex
            items-center
            text-[18px]
            bg-primary dark:bg-primary-dark
            text-light
            rounded-full
            py-[3px]
            px-[6px]
            gap-[3px]
            relative
            after:content-['']
            after:absolute
            after:bg-light
            after:rounded-full
            after:w-[18px]
            after:h-[18px]
            after:ease-in-out
            after:duration-300
            ${store.theme.mode(
              'after:left-[6px]',
              'after:left-[calc(18px+6px+3px)]'
            )}
        `}
    >
      <IoIosMoon></IoIosMoon>
      <IoIosSunny></IoIosSunny>
    </button>
  )
})
