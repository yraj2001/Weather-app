import { Heading } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Heading size="xl" color="red">
        Testings
      </Heading>
    </>
  );
}

export default App;
