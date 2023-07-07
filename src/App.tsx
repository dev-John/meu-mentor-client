import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";
import NavBar from "./components/NavBar/NavBar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <NavBar />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
