import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Статистика загрузки серверов" subtitle="Демо версия линейного графика" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;