import { StyleSheet, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import React, { useState } from "react";

const Search = () => {
  const [searchText, setSearch] = useState("");

  const updateSearch = (text) => {
    setSearch(text);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={searchText}
        platform="android"
        inputContainerStyle={styles.inputContainer}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: '50%',
        maxHeight: '80%',
        marginVertical:'1.5%'

    },
    containerStyle: {
        backgroundColor: '#262626',
        paddingHorizontal:'5%',
    },
    view:{
        width:'80%',
    }
})
export default Search;
