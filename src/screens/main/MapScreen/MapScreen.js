import MainView from "../../../module/MainView/MainView";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route, navigation }) => {
  const coordinates = route.params;

  return (
    <MainView route={route} navigation={navigation}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            ...coordinates,
          }}
        />
      </MapView>
    </MainView>
  );
};

export default MapScreen;
