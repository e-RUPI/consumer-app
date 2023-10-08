import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";

// Dummy data for the cards
const dummyData = [
  {
    id: "1",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Some Text Goes Here 1",
  },
  {
    id: "2",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Some Text Goes Here 2",
  },
  {
    id: "3",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Some Text Goes Here 3",
  },
  //   {
  //     id: "4",
  //     imageUrl:
  //       "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
  //     text: "Some Text Goes Here 4",
  //   },
  // Add more data as needed
];

const temp = () => {
  const numColumns = 2; // Number of columns
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const cardWidth = (screenWidth - 20) / numColumns - 20; // Calculate the card width with spacing

  // If there's an odd number of cards, add an empty item
  if (dummyData.length % numColumns === 1) {
    dummyData.push({ id: "empty", empty: true });
  }

  return (
    <FlatList
      data={dummyData}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => {
        // Render an empty view for the added empty item
        if (item.empty) {
          return (
            <View style={[styles.card, { backgroundColor: "transparent" }]} />
          );
        }

        return (
          <Pressable style={styles.card}>
            {/* Image Portion */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            {/* Text Portion */}
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </Pressable>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    height: 200,
    aspectRatio: 1,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 10,
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});

export default temp;
