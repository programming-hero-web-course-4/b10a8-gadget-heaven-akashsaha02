import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const StatisticsPage = () => {
  const location = useLocation();
  useEffect(() => {
    const pageTitle = "Zenin Tech | Stats";
    document.title = pageTitle;
  }, [location]);

  return (
    <div>
      <h1 className="text-4xl">Statistics</h1>
    </div>
  );
};

export default StatisticsPage;