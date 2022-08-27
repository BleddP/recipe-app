import { useState, useEffect, useRef } from "react"
import { View, TouchableOpacity, Animated } from "react-native"

// Typography
import { H4 } from "../../typography"

// Styles
import styles from './styles'


const Tooltip = ({ text, show }) => {

    // Animations
    const scrollY = useRef(new Animated.Value(-48)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (show) {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start()
            Animated.timing(scrollY, {
                toValue: -60,
                duration: 200,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }).start()
            Animated.timing(scrollY, {
                toValue: -48,
                duration: 350,
                useNativeDriver: true
            }).start()
        }
    }, [show])

    return (
        <View pointerEvents="none" style={styles.tooltipWrapper}>
            <Animated.View style={[
                styles.tooltip,
                {
                    opacity,
                    transform: [{ translateY: scrollY }]
                }
            ]}>
                <H4 style={styles.text}>{text}</H4>
            </Animated.View>
        </View>
    )
}


const IconTooltip = ({ icon, tooltip }) => {

    const [show, setShow] = useState(false)

    const showTooltip = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000);
    }

    return (
        <TouchableOpacity onPress={showTooltip} style={styles.button}>
            {icon}
            <Tooltip text={tooltip} show={show} />
        </TouchableOpacity>
    )
}

export default IconTooltip