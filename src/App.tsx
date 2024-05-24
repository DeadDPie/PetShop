import { Router } from "./modules/Router/Router";
import { QueryProvider } from "./shared/contexts";

export const App = () => {
  return (
    <QueryProvider>
      <Router />
    </QueryProvider>
  );
};
