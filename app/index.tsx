import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InitialRoute = () => {
  return (
    <SafeAreaView>
    <View>
      <Text>Initial route - redirects based on auth state</Text>
    </View>
    </SafeAreaView>
  )
}

export default InitialRoute

const styles = StyleSheet.create({})