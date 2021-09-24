import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

const SignIn = () => {
  return (
    <Layout style={styles.view}>
      <Text>Hello darkness my old friend!</Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SignIn
