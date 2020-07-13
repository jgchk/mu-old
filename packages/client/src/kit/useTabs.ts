import { useContext } from 'react'
import TabsContext, { ITabsContext } from './TabsContext'

const useTabs = (): ITabsContext => {
  const context = useContext(TabsContext)
  if (!context)
    throw new Error('This component must be used within a <Tabs> component')
  return context
}

export default useTabs
