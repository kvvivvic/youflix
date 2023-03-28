import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
