import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Button, ActivityIndicator } from 'react-native'
import { MoviePoster } from '../components/MoviePoster'
import { Movie } from '../interfaces/movieInterface'
import { RouteStackParams } from '../navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'
import { useMovieDetails } from '../hooks/useMovieDetails'
import { MovieDetails } from '../components/MovieDetails'

interface Props extends StackScreenProps<RouteStackParams, 'DetailScreen'> {

}

const DetailScreen = ( { route }:Props ) => {

    const movie = route.params as Movie
    const backdrop = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`
    const poster = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`


    const { width: windowWidth } = Dimensions.get('window')

    const {isLoading, cast, movieFull} = useMovieDetails(movie.id)

    const size = 4
    

    return (
       
            <View style={{
                backgroundColor: '#222',
                flex: 1
            }}>
                <ScrollView>
                    <View style={{
                        width: windowWidth,
                        height: 280,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        {/* Backdrop */}
                        <View
                            style={{
                                width: windowWidth,
                                height: 0.56 * windowWidth,
                            }}
                        >
                            <Image 
                                source={{
                                    uri: backdrop
                                }}
                                style={ styles.image }
                            />
                        </View>

                        {/* Icons */}

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between', 
                                width: windowWidth - (size * 35),

                                // option one
                                position: 'absolute',
                                bottom: 0,
                                right: 12,
                                
                                // option two

                                // alignSelf: 'flex-end',
                                // marginHorizontal: 12,
                            }}
                        >
                            <Icon
                                name='add'
                                size={ 40 }
                                color='white'
                            />
                            <Icon
                                name='heart-outline'
                                size={ 40 }
                                color='white'
                            />
                            <Icon
                                name='share-outline'
                                size={ 40 }
                                color='white'
                            />
                        </View>
                        
                        {/* Poster */}
                            
                        <View style={{
                            shadowColor: '#000',
                            shadowOffset: {width: -4, height: 4},
                            shadowOpacity: 0.2,
                            shadowRadius: 5,
                        }}>
                            <Image 
                                source={{
                                    uri: poster
                                }}
                                style={{
                                    width: 25 * size,
                                    height: 37 * size,
                                    borderRadius: 5,
                                    position: 'absolute',
                                    left: 12,
                                    bottom: 0,
                                }}
                            />
                        </View>

                    </View>

                    <View
                        style={{
                            backgroundColor: '#e50914',
                            borderRadius: 20,
                            padding: 12,
                            marginHorizontal: 12,
                            marginTop: 20,
                            marginBottom: 18,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Icon
                            name='play'
                            size={ 20 }
                            color='white'
                        />
                        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', marginLeft: 3}}>PLAY</Text>
                    </View>
                    <Text style={{ color:'#fff', paddingHorizontal: 12, lineHeight: 20}}>{ movie.overview }</Text>

                    {/* Details */}

                    {
                        isLoading
                            ?   <ActivityIndicator size={40} color='#e50914'/>
                            :  <MovieDetails movieFull={ movieFull! } cast={ cast } /> 
                    }
                </ScrollView>
            </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    image: {
        flex: 1,
        
    },
    
})

