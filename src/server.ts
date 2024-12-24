import { Server } from "http";
import app from "./app";
import config from "./config";

async function main() {
  const server: Server = app.listen(config.port, () => {
    console.log(
      `Mohammad Riaz Uddin Portfolio Server Is Running Port: ${config.port} 🌐`
    );
  });
}

main();
