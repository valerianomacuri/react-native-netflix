import React from 'react'
import { View, ActivityIndicator, Dimensions} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import { BackdropPoster } from '../components/BackdropPoster';



import { HorizontalSlider } from '../components/HorizontalSlider';
import { useMovies } from '../hooks/useMovies'

const HomeScreen = () => {


    const { width: windowWidth } = Dimensions.get('window')
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { top } = useSafeAreaInsets()


    if( isLoading ) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#222'
            }}>
                <ActivityIndicator color='#e50914' size={ 50 } />
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{paddingTop: top + 20, backgroundColor: '#222'}}>
            {/* <MoviePoster movie={estrenos[0]}/> */}
        
            <View>
                <Carousel 
                    data={nowPlaying}
                    renderItem={ ({item}) => <BackdropPoster movie={ item } size={ 13 } />}
                    sliderWidth={ windowWidth }
                    itemWidth={ 25 * 13 }
                />
            </View>

            {/* Peliculas Populares */}

            <HorizontalSlider title='Estrenos' movies={ nowPlaying! } />
            <HorizontalSlider title='Populares' movies={ popular! } />
            <HorizontalSlider title='Rakeados' movies={ topRated! } />
            <HorizontalSlider title='Proximamente' movies={ upcoming! } />


            </View>
        </ScrollView>
    )
}

export default HomeScreen


