// pages/index.tsx

import DashboardPage from "@/pages/dashboardpage";
import RootLayout from "./layout";

const HomePage = () => {
  return (
    <RootLayout>
      <DashboardPage/>
    </RootLayout>
  );
};

export default HomePage;
