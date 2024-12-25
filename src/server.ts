import { Server } from "http";
import app from "./app";
import config from "./config";
import superAdmin from "./app/modules/SuperAdmin/superAdmin";

async function main() {
  await superAdmin();
  const server: Server = app.listen(config.port, () => {
    console.log(
      `Mohammad Riaz Uddin Portfolio Server Is Running Port: ${config.port} 🌐`
    );
  });
}

main();
