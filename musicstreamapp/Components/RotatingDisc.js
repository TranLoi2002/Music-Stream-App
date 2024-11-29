import React, { useEffect, useRef } from 'react';
import { Animated, Image, View, StyleSheet, Easing } from 'react-native';

const RotatingDisc = ({ uri }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotate = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 8000, // Tốc độ quay, có thể điều chỉnh theo ý thích
        easing: Easing.linear, // Sử dụng easing linear để quay liên tục mà không bị gián đoạn
        useNativeDriver: true,
      })
    );

    rotate.start();

    // Return a cleanup function to stop the animation when the component unmounts
    return () => rotate.stop();
  }, []);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <View style={styles.discContainer}>
        <Image source={{ uri }} style={styles.disc} />
        <View style={styles.centerCircle} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  discContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disc: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  centerCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
  },
});

export default RotatingDisc;
