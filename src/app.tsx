import { observer } from "mobx-react";
import { useEffect } from "react";
import { ThemeToggle } from "./components/theme-toggle";
import { useStore } from "./stores";

export const App = observer(() => {
  const store = useStore();

  useEffect(() => {
    document.body.setAttribute("data-mode", store.theme.themeMode);
  }, [store.theme.themeMode]);

  return (
    <div className="flex min-h-full items-center justify-center flex-col py-3">
      <div>
        <ThemeToggle></ThemeToggle>
      </div>
      <div className="text-2xl py-3 text-dark dark:text-light">
        I <span className="text-dark">don't</span> miss you
      </div>
    </div>
  );
});
