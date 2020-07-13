import * as React from 'react'
import { FC, useState } from 'react'
import Tab, { TabProps } from './Tab'
import TabBar from './TabBar'
import TabContent from './TabContent'
import TabPanel, { TabPanelProps } from './TabPanel'
import TabsContext from './TabsContext'

interface TabsComposition {
  Bar: FC
  Tab: FC<TabProps>
  Content: FC
  Panel: FC<TabPanelProps>
}

const Tabs: FC<{ defaultLabel: string }> & TabsComposition = ({
  defaultLabel,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(defaultLabel)
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div css={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

Tabs.Bar = TabBar
Tabs.Tab = Tab
Tabs.Content = TabContent
Tabs.Panel = TabPanel

export default Tabs
