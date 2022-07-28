import { Container } from "@chakra-ui/react";
import { PAGES } from "config";
import { ChooseMinigs } from "pages/ChooseMinifig";
import { Main } from "pages/Main";
import { ShippingDetails } from "pages/ShippingDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container maxW="6xl" h="100%">
      <Routes>
        <Route path={PAGES.MAIN} element={<Main />} />
        <Route path={PAGES.CHOOSE_MINIGS} element={<ChooseMinigs />} />
        <Route path={PAGES.SHIPPING_DETAILS} element={<ShippingDetails />} />
      </Routes>
    </Container>
  );
}

export default App;
