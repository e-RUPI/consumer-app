import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const dummyData = [
  // Your temp2 data here
];

const temp2 = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [activeFilter, setActiveFilter] = useState(null); // Store the active filter

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    // Reset the active filter when changing voucher types
    setActiveFilter(null);
  };

  const handleFilterPress = (filterName) => {
    setActiveFilter(filterName);
  };

  const numColumns = 2;
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 20) / numColumns - 20;

  if (dummyData.length % numColumns === 1) {
    dummyData.push({ id: "empty", empty: true });
  }

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            style={styles.userImage}
            source={{
              uri: "https://imgs.search.brave.com/3Ek8ZJ3v25qa9CrYaE8DbwG4V78Tp51V2U9nzESHKNc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNjk5/OTI5Ny5qcGc",
            }}
          />
          <Text style={styles.userName}>Username</Text>
        </View>

        <View style={styles.searchBar}>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            placeholder="Search"
            placeholderTextColor={"black"}
            style={{ fontWeight: "500", color: "black" }}
          />
        </View>
      </View>

      <View style={{ height: 20 }}></View>

      <View style={styles.voucherTabs}>
        <Pressable
          style={[
            styles.voucherTab,
            activeTab === "Active" && styles.activeVoucherTab,
          ]}
          onPress={() => handleTabPress("Active")}
        >
          <Text
            style={[
              styles.voucherTabText,
              activeTab === "Active" && styles.activeVoucherTabText,
            ]}
          >
            Active
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.voucherTab,
            activeTab === "Redeemed" && styles.activeVoucherTab,
          ]}
          onPress={() => handleTabPress("Redeemed")}
        >
          <Text
            style={[
              styles.voucherTabText,
              activeTab === "Redeemed" && styles.activeVoucherTabText,
            ]}
          >
            Redeemed
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.voucherTab,
            activeTab === "Expired" && styles.activeVoucherTab,
          ]}
          onPress={() => handleTabPress("Expired")}
        >
          <Text
            style={[
              styles.voucherTabText,
              activeTab === "Expired" && styles.activeVoucherTabText,
            ]}
          >
            Expired
          </Text>
        </Pressable>
      </View>

      <View style={{ height: 25 }}></View>

      <View style={styles.filtersContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersScrollView}
        >
          <Pressable
            style={[
              styles.filterOption,
              activeFilter === "Agriculture" && styles.activeFilterOption,
            ]}
            onPress={() => handleFilterPress("Agriculture")}
          >
            <Text
              style={[
                styles.filterOptionText,
                activeFilter === "Agriculture" && styles.activeFilterOptionText,
              ]}
            >
              Agriculture
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.filterOption,
              activeFilter === "Health" && styles.activeFilterOption,
            ]}
            onPress={() => handleFilterPress("Health")}
          >
            <Text
              style={[
                styles.filterOptionText,
                activeFilter === "Health" && styles.activeFilterOptionText,
              ]}
            >
              Health Care
            </Text>
          </Pressable>

          {/* Add more filter options here */}
        </ScrollView>
      </View>

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 9,
    gap: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "cover",
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 20,
    height: 42,
    width: 300,
  },
  voucherTabs: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
  },
  voucherTab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
    borderRadius: 15,
    height: 55,
    width: 100,
  },
  activeVoucherTab: {
    backgroundColor: "black",
  },
  voucherTabText: {
    alignSelf: "center",
  },
  activeVoucherTabText: {
    color: "white",
  },
  filtersContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
    height: 55,
    width: "100%",
  },
  filtersScrollView: {
    paddingHorizontal: 10,
  },
  filterOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 4,
    borderRadius: 10,
    marginRight: 10,
    flex: 1,
  },
  activeFilterOption: {
    backgroundColor: "black",
  },
  filterOptionText: {
    marginLeft: 5,
    fontSize: 10,
  },
  activeFilterOptionText: {
    color: "white",
  },
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

export default temp2;
