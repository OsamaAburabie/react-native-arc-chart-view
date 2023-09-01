import { ViewProps } from "react-native";

export type ChangeEventPayload = {
  value: string;
};

export type SettingSectionValue = {
  sectionPos: number;
  sectionValue: number;
};

export type RefMethods = {};

export type ReactNativeArcChartViewProps = {
  ref?: React.Ref<RefMethods>;
  sectionsCount: number;
  iconSize?: number;
  linesCount?: number;
  linesSpace?: number;
  linesWidth?: number;
  midStartExtraOffset?: number;
  sectionsSpace?: number;
  sectionsIcons?: string[];
  sectionsValues?: number[];
  onStartSettingSectionValue?: (event: {
    nativeEvent: SettingSectionValue;
  }) => void;
  onContinueSettingSectionValue?: (event: {
    nativeEvent: SettingSectionValue;
  }) => void;
  onFinishedSettingSectionValue?: (event: {
    nativeEvent: SettingSectionValue;
  }) => void;
} & ViewProps;
