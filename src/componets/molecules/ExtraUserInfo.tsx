import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { ExtraUserInfoProps } from "../../../types/MoleculesTypes";
import ItemInfoUser from "../atoms/ItemInfoUser";

const ExtraUserInfo: FC<ExtraUserInfoProps> = ({ user }) => {
  return (
    <View style={styles.container}>
      <ItemInfoUser iconName="user" subtitle={user.gender} title="gender" />
      <ItemInfoUser
        iconName="alert-circle"
        subtitle={user.status}
        title="status"
      />
      <ItemInfoUser
        iconName="map-pin"
        subtitle={user.location.name}
        title="location"
      />
      <ItemInfoUser iconName="activity" subtitle={user.type} title="type" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 12
  }
});

export default ExtraUserInfo;
