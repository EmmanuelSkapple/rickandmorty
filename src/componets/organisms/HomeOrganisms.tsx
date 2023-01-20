import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { UserDataTypes } from "../../../types/DataTypes";
import { HomeOrganismsProps } from "../../../types/OrganismsTypes";
import SearchBar from "../atoms/SearchBar";
import UserList from "../molecules/UserList";

const HomeOrganisms = ({ userList, showDetailsUser }: HomeOrganismsProps) => {
  const [userListFilter, setUserListFilter] = useState<UserDataTypes[]>([]);
  const [nameToSearch, setNameToSearch] = useState("");
  useEffect(() => {
    setUserListFilter(userList ? userList : []);
  }, []);

  const searchUserForName = (name: string) => {
    setNameToSearch(name);
    const newListOfUsers = userList.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setUserListFilter(newListOfUsers);
  };

  return (
    <View style={styles.container}>
      <SearchBar value={nameToSearch} callBackChange={searchUserForName} />
      <UserList userList={userListFilter} showDetailsUser={showDetailsUser}  />
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex:1
 },
});

export default HomeOrganisms;
