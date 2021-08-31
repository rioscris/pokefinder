import "./App.css";
import Finder from "./components/finder/Finder";
import Layout from "./components/layout/Layout";
import ResultsList from "./components/resultsList/ResultsList";

function App() {
  return (
    <Layout>
      <Finder />
      <ResultsList />
    </Layout>
  );
}

export default App;
