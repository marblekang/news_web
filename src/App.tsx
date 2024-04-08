import { Reset } from "styled-reset";
import News from "./components/news/News";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({ defaultOptions: {} });
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Reset />
      <News />
    </QueryClientProvider>
  );
}

export default App;
