import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Movie } from '../interfaces/movieInterface'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?: string;
    movies: Movie[] 

}

export const HorizontalSlider = ({title, movies}: Props) => {
    return (
        <View style={{
            paddingBottom: 10,
            paddingLeft: 12,
        }}>

        {
            title && <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#fff', marginVertical: 5}}>{ title }</Text> 
        }

        <FlatList 
            data={ movies }
            renderItem={ ({ item }:any) => (
                <MoviePoster movie={ item } size={ 3.2 } />
            )}
            keyExtractor={ (item) => item.id.toString() }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
        />
        </View>
    )
}

