import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useState } from "react";
import useResults from "./hooks/useResults";

const HomePage = () => {
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");

  const { data } = useResults();
  //   console.log(data);

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="aside" paddingX={5}>
        <Heading>timezones :{data?.timezone}</Heading>
      </GridItem>
      <GridItem area="main">
        <Heading>current temperature: {data?.current.temp}</Heading>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
