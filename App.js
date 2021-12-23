import { SafeAreaView, StatusBar, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import Cesta from "./src/pages/cesta";

import mock from "./src/mocks/cesta";

export default function App() {
  const [fonte] = useFonts({
    fontRegular: Montserrat_400Regular,
    fontBold: Montserrat_700Bold,
  });

  if (!fonte) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
