import React, { useEffect, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Dimensions,
  type ViewStyle,
} from 'react-native';

interface Snowflake {
  id: number;
  x: Animated.Value;
  y: Animated.Value;
  opacity: Animated.Value;
  rotation: Animated.Value;
  size: number;
  speed: number;
  drift: number;
  initialX: number;
}

export interface SnowFXProps {
  /**
   * Number of snowflakes to render
   * @default 50
   */
  snowflakesCount?: number;

  /**
   * Minimum size of snowflakes in pixels
   * @default 5
   */
  minSize?: number;

  /**
   * Maximum size of snowflakes in pixels
   * @default 15
   */
  maxSize?: number;

  /**
   * Minimum falling speed (duration in ms)
   * @default 8000
   */
  minSpeed?: number;

  /**
   * Maximum falling speed (duration in ms)
   * @default 15000
   */
  maxSpeed?: number;

  /**
   * Color of the snowflakes
   * @default '#FFFFFF'
   */
  color?: string;

  /**
   * Custom snowflake character or emoji
   * @default '❄'
   */
  snowflakeCharacter?: string;

  /**
   * Container style
   */
  style?: ViewStyle;

  /**
   * Z-index of the snow layer
   * @default 1000
   */
  zIndex?: number;
}

export const SnowFX: React.FC<SnowFXProps> = ({
  snowflakesCount = 50,
  minSize = 5,
  maxSize = 15,
  minSpeed = 8000,
  maxSpeed = 15000,
  color = '#FFFFFF',
  snowflakeCharacter = '❄',
  style,
  zIndex = 1000,
}) => {
  const { width, height } = Dimensions.get('window');
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationsRef = useRef<any[]>([]);

  // Initialize snowflakes
  useEffect(() => {
    // Stop previous animations
    animationsRef.current.forEach((anim) => anim.stop());
    animationsRef.current = [];

    // Initialize snowflakes
    snowflakesRef.current = Array.from({ length: snowflakesCount }, (_, i) => {
      const size = Math.random() * (maxSize - minSize) + minSize;
      const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      const drift = (Math.random() - 0.5) * 100;
      const initialX = Math.random() * width;

      return {
        id: i,
        x: new Animated.Value(initialX),
        y: new Animated.Value(-(Math.random() * 100 + 50)),
        opacity: new Animated.Value(Math.random() * 0.5 + 0.5),
        rotation: new Animated.Value(0),
        size,
        speed,
        drift,
        initialX,
      };
    });
  }, [snowflakesCount, minSize, maxSize, minSpeed, maxSpeed, width, height]);

  // Start animations
  useEffect(() => {
    // Stop previous animations
    animationsRef.current.forEach((anim) => anim.stop());
    animationsRef.current = [];

    animationsRef.current = snowflakesRef.current.map((snowflake) => {
      const fall = Animated.sequence([
        Animated.timing(snowflake.y, {
          toValue: height + 50,
          duration: snowflake.speed,
          useNativeDriver: true,
        }),
        Animated.timing(snowflake.y, {
          toValue: -(Math.random() * 100 + 50),
          duration: 0,
          useNativeDriver: true,
        }),
      ]);

      const drift = Animated.sequence([
        Animated.timing(snowflake.x, {
          toValue: snowflake.initialX + snowflake.drift,
          duration: snowflake.speed / 2,
          useNativeDriver: true,
        }),
        Animated.timing(snowflake.x, {
          toValue: snowflake.initialX,
          duration: snowflake.speed / 2,
          useNativeDriver: true,
        }),
      ]);

      const rotate = Animated.sequence([
        Animated.timing(snowflake.rotation, {
          toValue: 360,
          duration: snowflake.speed,
          useNativeDriver: true,
        }),
        Animated.timing(snowflake.rotation, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]);

      // 🔥 ALL animations wrapped into one loop
      const loopedAnimation = Animated.loop(
        Animated.parallel([fall, drift, rotate])
      );
      loopedAnimation.start();
      return loopedAnimation;
    });

    // Cleanup function to stop animations when component unmounts
    return () => {
      animationsRef.current.forEach((anim) => anim.stop());
    };
  }, [snowflakesCount, minSize, maxSize, minSpeed, maxSpeed, width, height]);

  return (
    <View style={[styles.container, { zIndex }, style]} pointerEvents="none">
      {snowflakesRef.current.map((snowflake) => (
        <Animated.Text
          key={snowflake.id}
          style={[
            styles.snowflake,
            {
              color,
              fontSize: snowflake.size,
              opacity: snowflake.opacity,
              transform: [
                { translateX: snowflake.x },
                { translateY: snowflake.y },
                {
                  rotate: snowflake.rotation.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        >
          {snowflakeCharacter}
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  snowflake: {
    position: 'absolute',
    top: 0,
    left: 0,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

// Export types
export type { Snowflake };
