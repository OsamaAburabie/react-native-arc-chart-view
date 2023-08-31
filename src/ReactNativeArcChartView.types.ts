import { ViewProps } from "react-native";

export type ChangeEventPayload = {
  value: string;
};

export type ReactNativeArcChartViewProps = {
  sectionsCount: number;
  iconSize?: number;
  linesCount?: number;
  linesSpace?: number;
  linesWidth?: number;
  midStartExtraOffset?: number;
  sectionsSpace?: number;
  sectionsIcons?: string[];
} & ViewProps;
