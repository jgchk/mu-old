import { createContext } from 'react'

export interface ITabsContext {
  activeTab: string
  setActiveTab: (label: string) => void
}

// eslint-disable-next-line unicorn/no-useless-undefined
const TabsContext = createContext<ITabsContext | undefined>(undefined)

export default TabsContext
