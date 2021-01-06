import { createContext } from "react"

const SnackbarContext = createContext({
  showNotification: () => {}
});
SnackbarContext.displayName = "SnackbarContext";

export default SnackbarContext;
