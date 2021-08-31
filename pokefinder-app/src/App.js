import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Finder from "./components/finder/Finder";
import Layout from "./components/layout/Layout";
import ResultsList from "./components/resultsList/ResultsList";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Finder />
        <ResultsList />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
