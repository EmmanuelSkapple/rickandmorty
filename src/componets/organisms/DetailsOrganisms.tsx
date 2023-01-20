import React, { FC } from "react";
import { Text, StyleSheet, View } from "react-native";
import { DetailsOrganismsProps } from "../../../types/OrganismsTypes";
import Avatar from "../atoms/Avatar";
import ExtraUserInfo from "../molecules/ExtraUserInfo";

const DetailsOrganisms: FC<DetailsOrganismsProps> = ({ user }) => {
  if (!user) {
    return (
      <View>
        <Text>user not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.paperContainer}>
        <Avatar imageUrl={user.image} size={120} border />
        <Text style={styles.title}> {user.name} </Text>
        <Text style={styles.subtitle}> {user.species} </Text>
      </View>
      <ExtraUserInfo user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  paperContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#503B93"
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginTop: 8
  },
  subtitle: {
    fontSize: 16,
    color: "#efefef"
  }
});
export default DetailsOrganisms;
