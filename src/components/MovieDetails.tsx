import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import { CastItem } from './CastItem'

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 12,
                    marginVertical: 18,
                }}
            >
                
                <Text
                    style={ styles.text }
                >
                    { movieFull.genres.map( g => g.name ).join(', ')}
                </Text>
                <Text
                    style={
                        styles.text
                    }
                >{ movieFull.vote_average }</Text>
                <Text
                    style={ styles.text }
                >{ movieFull.release_date.substring(0,4) }</Text>
                
            </View>

            {/* Cast */}

            <FlatList 
                data={ cast }
                keyExtractor={ item => item.id.toString()}
                renderItem={ ({ item }) => <CastItem actor={ item } /> }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                style={{
                    marginLeft: 12,
                    marginBottom: 18,
                }}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})