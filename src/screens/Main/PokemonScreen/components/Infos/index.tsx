import React from 'react'
import { View } from 'react-native'

import About from './components/About'
import Evolution from './components/Evolution'
import Status from './components/Status'
import Tabs, { Tab } from './components/Tabs'
import styles from './styles'

type Props = {
  color: string
}

const Infos = (props: Props) => {
  const { color } = props

  const tabs: Tab[] = [
    {
      name: 'Sobre',
      component: About as React.FC,
      props: {
        children: 'Sobre',
      },
    },
    {
      name: 'Status',
      component: Status,
    },
    {
      name: 'Evolução',
      component: Evolution,
    },
  ]

  return (
    <View style={styles.wrapper}>
      <Tabs tabs={tabs} color={color} />
    </View>
  )
}

export default Infos
