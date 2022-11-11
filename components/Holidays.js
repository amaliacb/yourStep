import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";

export default function Holidays() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetching the data from the API
  //data Hook will hold fetched data
  //loading hook will tell the user if the data is on its way
  //"https://calendarific.com/api/v2/holidays?&api_key=0959f66552d21255bee68846611d1aecca99d7c8"

  const fetchData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        {item.title}
      </Box>
    );

};


useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <NativeBaseProvider>
      <Center flex={1}>
      <Box> Fetch API</Box>
        {loading && <Box>Loading..</Box>}
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </Center>
    </NativeBaseProvider>
  );
  }
