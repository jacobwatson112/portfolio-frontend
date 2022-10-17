import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";

import HomeView from './views/HomeView';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Container padding={0}>
          <Routes>
            <Route path="/" element={<HomeView />}></Route>
            <Route index element={<HomeView />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
