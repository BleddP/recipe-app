import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Animated } from "react-native";
import Slide from "./Slide";

// Styles
import styles from './caroussel.styles'


interface SlideProp {
    id: any,
    image: string
}


const Caroussel: React.FC = () => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const slides: SlideProp[] = [

        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1508083460982-28b3207400d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhYnklMjBnaXJsJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1503463168353-9d883c7f5255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhYnklMjBnaXJsJTIwZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGdpcmwlMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1506804880640-f3205deb1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFieSUyMGdpcmwlMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1551463855-8695fbe95094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFieSUyMGdpcmwlMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        },
    ]

    return (
        <View style={styles.caroussel}>
            <Animated.FlatList
                data={slides}
                keyExtractor={(item: SlideProp) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({ item, index }) => {
                    return <Slide slide={item} index={index} scrollX={scrollX} />;
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default Caroussel