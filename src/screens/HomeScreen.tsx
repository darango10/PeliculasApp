import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MoviePoster from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";
import Carousel from "react-native-snap-carousel";
const windowWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const { movies, loading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20}}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={movies}
          renderItem={({ item }) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
