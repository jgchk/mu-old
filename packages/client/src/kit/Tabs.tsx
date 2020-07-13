import * as React from 'react'
import { FC, useState } from 'react'
import Tab, { TabProps } from './Tab'
import TabPanel, { TabPanelProps } from './TabPanel'
import TabsContext from './TabsContext'

interface TabsComposition {
  Tab: FC<TabProps>
  Panel: FC<TabPanelProps>
}

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
