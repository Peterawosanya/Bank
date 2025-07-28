import Sidebar from "../components/sidebar";
import DashboardMain from "../components/DashboardMain";
import DashboardRight from "../components/DashboardRight";

export default function DashboardPage() {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#f7f8fa",
        display: "flex",
        justifyContent: "center", // Center the dashboard horizontally
        alignItems: "stretch",     // Make columns stretch vertically
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: 1400, // Set a max width for the dashboard
          minHeight: "100vh",
        }}
          >
        <div style={{ flex: "0 0 220px", minWidth: 220, maxWidth: 260 }}>
          <Sidebar />
        </div>
        <div style={{ flex: 1, minWidth: 0, maxWidth: 900 }}>
          <DashboardMain />
        </div>
        <div style={{ flex: "0 0 300px", minWidth: 260, maxWidth: 340 }}>
          <DashboardRight />
        </div>
      </div>
    </div>
  );
}
