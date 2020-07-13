import * as React from 'react'
import { FC, useState, createContext } from 'react'
import Tab, { TabProps } from './Tab'
import TabPanel, { TabPanelProps } from './TabPanel'

interface TabsComposition {
  Tab: FC<TabProps>
  Panel: FC<TabPanelProps>
}

interface TabsContext {
  activeTab: string
  setActiveTab: (label: string) => void
}

// eslint-disable-next-line unicorn/no-useless-undefined
export const TabsContext = createContext<TabsContext | undefined>(undefined)

const Tabs: FC<{ defaultLabel: string }> & TabsComposition = ({
  defaultLabel,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(defaultLabel)
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  )
}

Tabs.Tab = Tab
Tabs.Panel = TabPanel

export default Tabs
