import * as React from 'react'

import * as Notifications from 'expo-notifications'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
import { Heading, Page } from '../components'

async function getNotificationToken(){
    const {status} = await Notifications.getPermissionsAsync()
    if(status != 'granted'){
        const {status} = await Notifications.requestPermissionsAsync()
        if(status !='granted'){
            alert("failed to get Notifications token")
            return
        }
    }
    const tokenData = await Notifications.getExpoPushTokenAsync()
    const token = tokenData.data
    console.log({token})
    return token
}

const BoyScreen: React.FC = () => {
    return (
        <View>
            <Header centerComponent={{ text: 'For gir', style: { color: 'white' } }}></Header>
            <Page>
                <Heading>You dont have any ID, Check it now</Heading>
                <Button title="Get ID now" onPress={getNotificationToken}></Button>
            </Page>
        </View>
    )
}

export default BoyScreen