import {
    View,
    Dimensions,
    Animated,
} from "react-native";

// Styles
import styles from './slide.styles'

const Slide = ({ slide, index, scrollX }) => {
    const { width } = Dimensions.get("screen");
    const SLIDE_WIDTH = width * 1;

    // Animations
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0, 1, 0],
    });

    return (
        <View
            style={{
                width: SLIDE_WIDTH,
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Animated.Image
                source={{ uri: slide.image }}
                style={[styles.image, { transform: [{ scale }] }]}
            />
        </View>
    );
};

export default Slide;