import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
    size?: number;
}

export const MoviePoster = ({movie, size=6}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

    const navigation = useNavigation()

    return (
        <TouchableOpacity
        onPress={ () => navigation.navigate('DetailScreen', movie)}
        activeOpacity={ 0.8 }
            style={{
                width: 25 * size,
                height: 37 * size,
                marginRight: 8,
                
            }}
        >
                <Image 
                    style={ styles.image }
                    source={{ uri }}
                />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 5,
        
    },
    
})


