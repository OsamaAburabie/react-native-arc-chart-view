import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import {
  ReactNativeArcChartViewProps,
  RefMethods,
} from "./ReactNativeArcChartView.types";
import { Image } from "react-native";

const NativeView: React.ComponentType<ReactNativeArcChartViewProps> =
  requireNativeViewManager("ReactNativeArcChartView");

const ReactNativeArcChartView = React.forwardRef<
  RefMethods,
  ReactNativeArcChartViewProps
>((props, ref) => {
  let { sectionsIcons } = props;

  const formattedImages = sectionsIcons?.map((image) => {
    if (typeof image === "string") {
      return image;
    }

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

  return <NativeView ref={ref} {...props} sectionsIcons={formattedImages} />;
});

export default ReactNativeArcChartView;
