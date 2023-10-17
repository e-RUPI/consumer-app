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
  Modal,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const dummyData = [
  {
    id: "1",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Agriculture",
    title: "Amit Seeds and Tools",
    product: "Fertilizers",
    amount: "1000",
    date: "Valid till 29/09/23",
    footerText: "Agriculture insurance company of India",
  },
  {
    id: "2",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Education",
    title: " Merit Scholarship",
    product: "Scholarship",
    amount: "50000",
    date: "Valid till 19/12/24",
    footerText: " National Merit Scholarship of India",
  },
  {
    id: "3",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Health Care",
    title: " Health Care Insurance",
    product: "Kidney",
    amount: "150000",
    date: "Valid till 19/12/24",
    footerText: " National Merit Scholarship of India",
  },
  
];

const Voucher = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null); // Store the active filter

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    // Reset the active filter when changing voucher types
    setActiveFilter(null);
  };
 
  

  const handleFilterPress = (filterName) => {
    setActiveFilter(filterName);
  };


  

  const numColumns = 2; // Number of columns
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const cardWidth = (screenWidth - 20) / numColumns - 20; // Calculate the card width with spacing

  // If there's an odd number of cards, add an empty item
  if (dummyData.length % numColumns === 1) {
    dummyData.push({ id: "empty", empty: true });
  }

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Stack.Screen
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerLeft: () => (
            <Pressable
              style={{
                marginHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 9,
                gap: 12,
              }}
            >
              <Pressable>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      resizeMode: "cover",
                    }}
                    source={{
                      uri: "https://imgs.search.brave.com/3Ek8ZJ3v25qa9CrYaE8DbwG4V78Tp51V2U9nzESHKNc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNjk5/OTI5Ny5qcGc",
                    }}
                  />
                </View>
              </Pressable>

              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  backgroundColor: "white",
                  padding: 9,
                  borderRadius: 20,
                  height: 42,
                  width: 300,
                }}
              >
                <AntDesign name="search1" size={20} color="black" />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={"black"}
                  style={{ fontWeight: "500", color: "white", }}
                />
              </Pressable>
            </Pressable>
          ),

          
        }}
      ></Stack.Screen>
      <View style={{ alignItems: "center" }}>
        

        <View style={{ height: 20 }}></View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 18,
            borderColor: "black",
            borderWidth: 2,
          }}
        >
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

        {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      > */}
        <View
          style={{
            backgroundColor: "gray",
            flexDirection: "row",
            paddingVertical: 10,
            // borderRadius: 15,
            height: 55,
            width: "100%",
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 10 }}
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
                  activeFilter === "Agriculture" &&
                    styles.activeFilterOptionText,
                ]}
              >
                Agriculture
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.filterOption,
                activeFilter === "Travel" && styles.activeFilterOption,
              ]}
              onPress={() => handleFilterPress("Travel")}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  activeFilter === "Travel" && styles.activeFilterOptionText,
                ]}
              >
                Travel
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.filterOption,
                activeFilter === "Health Care" && styles.activeFilterOption,
              ]}
              onPress={() => handleFilterPress("Health Care")}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  activeFilter === "Health Care" &&
                    styles.activeFilterOptionText,
                ]}
              >
                Health Care
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.filterOption,
                activeFilter === "Education" && styles.activeFilterOption,
              ]}
              onPress={() => handleFilterPress("Education")}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  activeFilter === "Education" && styles.activeFilterOptionText,
                ]}
              >
                Education
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.filterOption,
                activeFilter === "Banking" && styles.activeFilterOption,
              ]}
              onPress={() => handleFilterPress("Banking")}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  activeFilter === "Banking" && styles.activeFilterOptionText,
                ]}
              >
                Banking
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View style={{ height: 20 }}></View>
      {/* VOUCHERS */}

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
            <Pressable style={styles.card} onPress={() => openModal(item)}>
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

      {/* Modal */}
      <Modal
  animationType="fade"
  transparent={true}
  visible={isModalVisible}
  onRequestClose={closeModal}
>
  <View style={styles.modalContainer}>
    <LinearGradient
      colors={activeTab === "Expired"
      ? ["#000000", "white"] : activeFilter === "Agriculture"
      ? ["#10C71C", "white"] : activeFilter === "Travel"
      ? ["#39E4F4", "white"] : activeFilter === "Health Care"
      ? ["#F02B24", "white"]  : activeFilter === "Education"
      ? ["#B842F4", "white"]
      : ["#FAF462", "white"]} //default
      style={styles.modalContent}
    >
      <TouchableOpacity
        style={styles.closeButton}
        onPress={closeModal}
      >
        <AntDesign name="closecircleo" size={24} color={activeTab==="Expired"?"red":"black"} />
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.modalHeader}>
        <Text style={styles.modalHeaderText}>{selectedItem?.text}</Text>
      </View>

      {/* QR Code */}
      <View style={styles.qrCodeContainer}>
        {/* You can place your QR code component here */}
        {/* Example: <Image source={qrCodeImage} style={styles.qrCode} /> */}
        <Image
          source={{
            uri: "https://imgs.search.brave.com/tRpS-KeocWolddcsJM6nQKGT1akkCXOvxtg25TYK8FE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/ODE1MjIwMy9waG90/by9kYXRhLWxhYmVs/aW5nLXF1aWNrLXJl/c3BvbnNlLWNvZGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW9DeWhSYU9oYUpH/ZVJXeFJIblBvWm9Z/RVhkYzBaVGpaZk1U/aTRpMEJoN2c9",
          }}
          style={styles.qrCode}
        />
      </View>

      {/* Title */}
      <Text style={styles.titleText}>
              {selectedItem?.title || "Title Not Available"}
            </Text>

      {/* Additional Text */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 5,
        }}
      >
        {selectedItem?.product || "Product Not Available"}
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 5,
        }}
      >
        ₹{selectedItem?.amount || "Amount Not Available"}
      </Text>
      <Text
        style={{
          fontSize: activeTab === "Expired" ? 25 : 15,
          // fontWeight: "bold",
          textAlign: activeTab === "Redeemed" ? "left" : "center",
          marginBottom: 5,
          color: activeTab === "Expired" ? "red" : activeTab === "Redeemed" ? "red" : "black",
        }}
      >
        {activeTab === "Expired" ? "Expired" : activeTab === "Redeemed" ? "Transacton id: 1234567" : selectedItem?.date || "Title Not Available"}
      </Text>

      {/* Footer Text */}
      <Text style={styles.footerText}>
              {selectedItem?.footerText || "Footer Not Available"}
            </Text>
    </LinearGradient>
  </View>
</Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFF",
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
    borderColor: "black",
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
    justifyContent: "center",
    backgroundColor: "white",
    padding: 4,
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
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
    // borderColor: "black",
    // borderWidth: 1,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal:24,
    alignItems: "center",

    // width: "100%"
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    paddingHorizontal:20,
  },
  modalText: {
    fontSize: 18,
    paddingHorizontal:20,
    marginVertical: 16,
  },
  modalHeader: {
    backgroundColor: "grey",
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 40,
  },

  modalHeaderText: {
    color: "white",
    // width:300,
    fontSize: 20,
    paddingHorizontal:20,
    fontWeight: "bold",
    backgroundColor: "grey",
  },
  qrCodeContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:20,
    marginVertical: 0,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal:20,
    marginBottom: 40,
  },
  additionalText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal:20,
    marginTop: 30,
    // marginBottom: 10,
  },
  qrCode: {
    // Style the QR code image here
    width: 250, // Set the width and height as needed
    height: 250,
    // Add any additional styles you require for the QR code
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1, // To ensure the button appears above other content
    padding: 10,
  },
  
});

export default Voucher;
