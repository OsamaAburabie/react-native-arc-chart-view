import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { ReactNativeArcChartView } from "react-native-arc-chart-view";
//@ts-ignore
import ImgToBase64 from "react-native-image-base64";

const images = [
  "https://cdn-icons-png.flaticon.com/512/5496/5496335.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-tools.svg/1200px-Circle-icons-tools.svg.png",
];

const convertImageToBase64 = async (url: string) => {
  const base64 = await ImgToBase64.getBase64String(url);
  return base64;
};

export default function App() {
  const [base64, setBase64] = useState<string[]>([]);

  useEffect(() => {
    const fetchBase64 = async () => {
      const base64 = await Promise.all(
        images.map(async (url) => {
          const base64 = await convertImageToBase64(url);
          return base64;
        })
      );
      setBase64(base64);
    };

    fetchBase64();
  }, []);

  return (
    <View style={styles.container}>
      <ReactNativeArcChartView
        sectionsCount={7}
        iconSize={60}
        sectionsSpace={5}
        linesCount={10}
        midStartExtraOffset={10}
        sectionsIcons={base64}
        style={{
          height: 300,
          aspectRatio: 1,
        }}
      />
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
