import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { ItemInfoUserProps } from "../../../types/AtomsTypes";

const ItemInfoUser: FC<ItemInfoUserProps> = ({ title, subtitle, iconName }) => {
  return (
    <View style={styles.container}>
      {iconName && <Feather name={iconName} size={25} />}
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 12
  },
  descriptionContainer: {
    marginLeft: 8
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: "#9b9b9b"
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#505050"
  }
});

export default ItemInfoUser;
