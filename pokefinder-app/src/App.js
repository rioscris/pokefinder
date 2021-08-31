import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Finder from "./components/finder/Finder";
import Layout from "./components/layout/Layout";
import ResultsList from "./components/resultsList/ResultsList";
import { Provider } from "react-redux";
import store from "./configureStore";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </Provider>
  );
};

function App() {
  return (
    <Providers>
      <Layout>
        <Finder />
        <ResultsList />
      </Layout>
    </Providers>
  );
}

export default App;
