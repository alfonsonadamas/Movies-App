import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useParams } from "react-router-native";
import axios from "axios";

export default function Movie() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      width: 200,
    },
    plainText: {
      color: "white",
      fontSize: 16,
      marginVertical: 10,
      textAlign: "justify",
      marginTop: 20,
    },
    containerPoster: {
      flexDirection: "row",
    },
    back: {
      color: "gray",
      fontSize: 20,
      fontWeight: "bold",
      fontStyle: "italic",
      marginVertical: 10,
      marginHorizontal: 20,
    },
    data: {
      color: "white",
      fontSize: 15,
    },
    actor: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 90,
      marginHorizontal: 15,
    },
    actorImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    actorName: {
      color: "white",
      fontSize: 15,
      textAlign: "center",
      width: 100,
    },
  });

  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  const searchMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=88a340b7e23e03b8bb15889fd7c06d4f`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGEzNDBiN2UyM2UwM2I4YmIxNTg4OWZkN2MwNmQ0ZiIsInN1YiI6IjY1YjQ0MTA1NmUwZDcyMDE2MzQ2N2MxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4DIuaUcvjlhBq4ffDER9yPe9Kn63ThqkIKeTflJvvy8",
          },
        }
      );
      setMovie(response.data);
      setGenres(response.data.genres);
    } catch (error) {
      console.log(error);
    }
    try {
      const responseCredits = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=88a340b7e23e03b8bb15889fd7c06d4f`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGEzNDBiN2UyM2UwM2I4YmIxNTg4OWZkN2MwNmQ0ZiIsInN1YiI6IjY1YjQ0MTA1NmUwZDcyMDE2MzQ2N2MxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4DIuaUcvjlhBq4ffDER9yPe9Kn63ThqkIKeTflJvvy8",
          },
        }
      );

      setActors(responseCredits.data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <ScrollView>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        }}
        style={{ width: "100%", height: 200 }}
      ></Image>
      <Link to="/">
        <Text style={styles.back}>{"< "}Back Home</Text>
      </Link>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.containerPoster}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            }}
            style={{ width: 150, height: 200 }}
          ></Image>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.data}>{movie.release_date}</Text>
            <View style={styles.container}>
              {genres.map((genre) => (
                <Text key={genre.id} style={styles.data}>
                  {genre.name}{" "}
                </Text>
              ))}
            </View>
            <Text style={styles.data}>{movie.vote_average}</Text>
            <Text style={styles.data}>{movie.runtime} min</Text>
          </View>
        </View>

        <Text style={styles.plainText}>{movie.overview}</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {actors.map((actor) => (
            <View key={actor.id} style={styles.actor}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`,
                }}
                style={styles.actorImage}
              ></Image>
              <Text key={actor.id} numberOfLines={1} style={styles.actorName}>
                {actor.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
