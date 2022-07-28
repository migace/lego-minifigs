import { extendTheme } from "@chakra-ui/react";
import backgroundImage from "assets/images/background.jpg";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        h: "100%",
      },
      body: {
        bg: `url(${backgroundImage})`,
        bgSize: "cover",
      },
      "#root": {
        h: "100%",
      },
    },
  },
});
