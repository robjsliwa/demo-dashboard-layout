import { createContext, useContext, ReactNode, useState } from "react";

export interface TabType {
  name: string;
  href: string;
  current: boolean;
}

export interface DashboardContextType {
  tabs: TabType[];
  tabTitle: string;
  updateDashboard: (data: { tabs: TabType[]; tabTitle: string }) => void;
}

interface DashboardProviderProps {
  children: ReactNode;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({
  children,
}) => {
  const [tabs, setTabs] = useState<TabType[]>([]);
  const [tabTitle, setTabTitle] = useState<string>("");

  const updateDashboard = ({
    tabs,
    tabTitle,
  }: {
    tabs: TabType[];
    tabTitle: string;
  }) => {
    setTabs(tabs);
    setTabTitle(tabTitle);
  };

  return (
    <DashboardContext.Provider value={{ tabs, tabTitle, updateDashboard }}>
      {children}
    </DashboardContext.Provider>
  );
};
