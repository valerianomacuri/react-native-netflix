import { TabActions } from '@react-navigation/routers'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
    actor: Cast;
}

export const CastItem = ({actor}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`
    return (
        <View>
            {
                actor.profile_path &&
                <Image 
                source={{ uri }}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    marginRight: 8,
                }}
                />
            }
        </View>
    )          
}

