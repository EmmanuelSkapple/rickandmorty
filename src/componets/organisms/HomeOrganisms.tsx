import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { UserDataTypes } from "../../../types/DataTypes";
import { HomeOrganismsProps } from "../../../types/OrganismsTypes";
import SearchBar from "../atoms/SearchBar";

const HomeOrganisms = ({ userList, showDetailsUser }: HomeOrganismsProps) => {
  const [userListFilter, setUserListFilter] = useState<UserDataTypes[]>([]);
  const [nameToSearch, setNameToSearch] = useState("");
  useEffect(() => {
    setUserListFilter(userList ? userList : []);
  }, []);

  const searchUserForName = (name: string) => {
    setNameToSearch(name);
    const newListOfUsers = userListFilter.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setUserListFilter(newListOfUsers);
  };

  return (
    <View>
      <SearchBar value={nameToSearch} callBackChange={searchUserForName} />
    </View>
  );
};

export default HomeOrganisms;
