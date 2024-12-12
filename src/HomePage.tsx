import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="aside" paddingX={5}>
        <Heading>Cities</Heading>
      </GridItem>
      <GridItem area="main">
        <Heading>Weather data</Heading>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
