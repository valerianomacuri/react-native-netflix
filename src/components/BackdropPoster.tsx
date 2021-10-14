import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
    size: number;
}

export const BackdropPoster = ({ movie, size }:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`

    return (
        <View
            style={{
                width: 25 * size,
                height: 14 * size,
            }}
        >
                <Image
                    style={ styles.image }
                    source={{ uri }}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 5,
        
    },
    
})