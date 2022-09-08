import {Routes, Route} from "react-router-dom";
import {Container} from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import HouseProvider from "./context/HouseContext";

const App = () => {
  return (
    <HouseProvider>
      <Container maxW="container.lg" px="1">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{padding: "1rem"}}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Container>
      <Footer />
    </HouseProvider>
  );
};

export default App;
