import React, { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { UserItemProps } from "../../../types/MoleculesTypes";
import Avatar from "../atoms/Avatar";

const UserItem: FC<UserItemProps> = ({ user,  showDetailsUser}) => {
  return (
    <TouchableOpacity onPress={()=>showDetailsUser(user)} style={styles.container}>
      <Avatar imageUrl={user.image} size={45} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}> {user.name} </Text>
        <Text style={styles.subtitle}> {user.species} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    marginVertical:8
  },
  infoContainer: {
    marginLeft: 4
  },
  title: {
    fontSize: 18,
    fontWeight: "600"
  },
  subtitle: {
    fontSize: 16,
    color: "#9b9b9b"
  }
});

export default UserItem;
