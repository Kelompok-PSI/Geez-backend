import { web } from "./app/web.js";
import * as dotenv from "dotenv";
dotenv.config();

web.listen(3000, () => {
  console.log("BACKEND SERVER IS RUNNING ON PORT 3000");
});
