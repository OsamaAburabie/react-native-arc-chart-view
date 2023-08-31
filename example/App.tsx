import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { ReactNativeArcChartView } from "react-native-arc-chart-view";

const images = [
  require("./assets/fix.png"),
  require("./assets/bin.png"),
  require("./assets/fan.png"),
  require("./assets/fan2.png"),
];

const imagesUrl = images.map((image) => {
  let originalUrl = Image.resolveAssetSource(image).uri;

  // New domain
  let newDomain = "http://192.168.1.95:8081/";

  // Parse the original URL to extract the domain
  let originalDomain = originalUrl?.match(
    /^https?:\/\/([^/?#]+)(?:[/?#]|$)/i
  )?.[0] as string;

  // Replace the domain in the URL with the new domain
  let updatedUrl = originalUrl.replace(originalDomain, newDomain);

  return updatedUrl;
});

export default function App() {
  return (
    <View style={styles.container}>
      <ReactNativeArcChartView
        sectionsCount={7}
        iconSize={60}
        sectionsSpace={5}
        linesCount={10}
        midStartExtraOffset={10}
        sectionsIcons={imagesUrl}
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
