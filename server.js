import server from "./index";
import { config } from "dotenv";

// Environment variable
config();

const PORT = process.env.PORT || 8800;
server.listen(PORT, () => {
  console.log(`Server start on 🚀 http://localhost:${PORT}`);
});
