import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'

const _layout = () => {
  return (
    <Tabs
        tabBar={props=> <TabBar {...props} />}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "Home"
            }}
        />
        <Tabs.Screen
            name="explore"
            options={{
                title: "Chat"
            }}
        />
        
        <Tabs.Screen
            name="create"
            options={{
                title: "Encontrar"
            }}
        />
         <Tabs.Screen
            name="exercises"
            options={{
                title: "Explorar"
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: "Configuração"
            }}
        />
    </Tabs>
  )
}

export default _layout