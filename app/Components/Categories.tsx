import{ StyleSheet, Text, View , FlatList, Pressable} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

const Categories = () => {
    const items = [
        {
            id:"1",
            name:"fastest delivery",
        },
        {
            id:"2",
            name:"rating 4.0+"
        },
        {
            id:"3",
            name:"offers",
        },
        {
            id:"4",
            name:"cuisines",
        },
        {
            id:"5",
            name:"MAX Safety",
        },
        {
            id:"6",
            name:"Pro",
        }
    ]

        return (
          <View style={{ marginTop: 6, marginBottom: 5 }}>
            <FlatList showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={items}
              renderItem={({item}) => (
                <Pressable style ={{backgroundColor:"green",margin: 7,padding:5,borderRadius:4}}>
                    <Text style={{color:"#FFF"}}>{item.name}</Text>
                </Pressable>
              )}/>
          </View>
        );
    }

export default Categories

const styles = StyleSheet.create({})
