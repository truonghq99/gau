import * as React from 'react'
import styled from 'styled-components'
import {View, Text, TouchableOpacity } from 'react-native'
import { Button, Header,Input } from 'react-native-elements'
import _default from 'react-native-elements/dist/helpers/getIconType'

const Page = styled(View)`
  padding: 40px 30px 0 30px;
`

const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Heading = styled(Text)`
    text-align: center;
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: bold;
`

const SummonButton = styled(TouchableOpacity)<{color?:string}>`
  background-color: ${p => p.color || "red"};
  flex: 48% 0 0;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
  color: white;
`
const SummonButtonText = styled(Text)`
    color: white;
    font-size:18px;
`
const GirlScreen: React.FC = () => {
    return(
        <View>
            <Header centerComponent={{text: 'For gir', style: {color: 'white'}}}></Header>
            <Page>
                <View>
                    <Input label="Our ID" placeholder="Fill out our ID number here!!"/>
                    <Button title="Connect"></Button>
                </View>

                <View style={{marginTop:20}}>
                    <Heading>Calling you baeeee</Heading>
                    <ButtonContainer>
                        <SummonButton color="red">
                            <SummonButtonText>I'm starving :(</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="blue">
                            <SummonButtonText>I miss you :(</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="yellow">
                            <SummonButtonText>I love you :(</SummonButtonText>
                        </SummonButton>
                        <SummonButton color="green">
                            <SummonButtonText>Calling meeeee :(</SummonButtonText>
                        </SummonButton>
                    </ButtonContainer>
                </View>
            </Page>
        </View>
    )
}

export default GirlScreen