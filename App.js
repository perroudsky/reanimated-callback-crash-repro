import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Animated, {
  useSharedValue,
  SlideInLeft,
  withTiming,
  SlideInDown,
  reduceMotion,
  ReduceMotion,
} from "react-native-reanimated";

export default function App() {
  const width = useSharedValue(100);

  const handlePress = () => {
    (width.value = withTiming(width.value + 50)),
      () => {
        console.log("done");
      };
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Animated.View
        style={styles.box}
        entering={SlideInDown.delay(500).withCallback((finished) => {
          console.log(`finished without interruptions: ${finished}`);
        })}
      >
        <Text>Hello</Text>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
});
