import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { ReactNativeArcChartView } from "react-native-arc-chart-view";
import Slider from "@react-native-community/slider";

const images = [
  require("./assets/fix.png"),
  require("./assets/bin.png"),
  require("./assets/fan.png"),
  require("./assets/fan2.png"),
];
const initial = [10, 10, 10, 3, 10, 4, 6];

export default function App() {
  const [sectionValues, setSectionValues] = useState<number[]>([]);

  useEffect(() => {
    setSectionValues(initial);
  }, []);

  return (
    <View style={styles.container}>
      <ReactNativeArcChartView
        sectionsCount={7}
        iconSize={60}
        sectionsSpace={5}
        linesCount={10}
        midStartExtraOffset={10}
        sectionsIcons={images}
        sectionsValues={sectionValues}
        onContinueSettingSectionValue={({
          nativeEvent: { sectionPos, sectionValue },
        }) => {
          setSectionValues((prev) => {
            return prev.map((value, index) => {
              if (index === sectionPos) {
                return sectionValue;
              }
              return value;
            });
          });
        }}
        onFinishedSettingSectionValue={({
          nativeEvent: { sectionPos, sectionValue },
        }) => {
          setSectionValues((prev) => {
            return prev.map((value, index) => {
              if (index === sectionPos) {
                return sectionValue;
              }
              return value;
            });
          });
        }}
      />

      {/* <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={10}
        value={sectionValues[0]}
        onValueChange={(sliderValue) => {
          setSectionValues((prev) => {
            return prev.map((value, index) => {
              if (index === 0) {
                return Math.round(sliderValue);
              }
              return value;
            });
          });
        }}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
