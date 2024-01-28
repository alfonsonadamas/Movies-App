import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import axios from "axios";

export default function ViewMovies(prop) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "white",
      fontSize: 20,
      padding: 10,
      textAlign: "center",
      width: 200,
      fontWeight: "bold",
    },
    scroll: {
      paddingBottom: 10,
      marginBottom: 30,
      marginHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: "white",
    },
    image: {
      width: 140,
      height: 200,
      borderRadius: 20,
    },
    movie: {
      width: 160,
      marginHorizontal: 10,
    },
  });
  const { filterType } = prop;
  const [movies, setMovies] = useState([]);
  const getApiPopularMovies = async () => {
    try {
      const responsePopularMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=88a340b7e23e03b8bb15889fd7c06d4f?page=2",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGEzNDBiN2UyM2UwM2I4YmIxNTg4OWZkN2MwNmQ0ZiIsInN1YiI6IjY1YjQ0MTA1NmUwZDcyMDE2MzQ2N2MxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4DIuaUcvjlhBq4ffDER9yPe9Kn63ThqkIKeTflJvvy8",
          },
        }
      );
      setMovies(responsePopularMovies.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const getApiUpcomingMovies = async () => {
    try {
      const responseUpcomingMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=88a340b7e23e03b8bb15889fd7c06d4f?page=2",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGEzNDBiN2UyM2UwM2I4YmIxNTg4OWZkN2MwNmQ0ZiIsInN1YiI6IjY1YjQ0MTA1NmUwZDcyMDE2MzQ2N2MxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4DIuaUcvjlhBq4ffDER9yPe9Kn63ThqkIKeTflJvvy8",
          },
        }
      );
      setMovies(responseUpcomingMovies.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (filterType === "popular") {
      getApiPopularMovies();
    } else {
      getApiUpcomingMovies();
    }
  }, []);
  return (
    <View>
      <Text style={styles.text}>
        {filterType === "popular" ? "Popular Movies" : "Upcoming Movies"}
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}
      >
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} style={styles.movie}>
            <View key={movie.id} style={styles.container}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={styles.image}
              ></Image>
              <Text style={styles.text}>{movie.title}</Text>
            </View>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}
