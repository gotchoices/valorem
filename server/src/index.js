/**
 * IMPORTANT:
 * ---------
 * Do not manually edit this file if you'd like to host your server on Colyseus Cloud
 *
 * If you're self-hosting (without Colyseus Cloud), you can manually
 * instantiate a Colyseus Server as documented here:
 *
 * See: https://docs.colyseus.io/server/api/#constructor-options
 */
// const { listen } = require("@colyseus/tools");
//
// // Import arena config
// const app = require("./app.config");
//
// // Create and listen on 2567 (or PORT environment variable.)
// listen(app);

// Self Host
// Colyseus + Express
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const colyseus = require("colyseus");
const express = require("express");
const cors = require("cors");
const port = process.env.TV_PORT || 8000;
const host = process.env.TV_HOST || "localhost";

const { MyRoom } = require("./rooms/MyRoom");

const app = express();
app.use(cors());
app.use(express.json());

var gameServer;
var wsProto = "ws";

if (Boolean(process.env.TV_SSL)) {
  wsProto = "wss";
  let certFile = process.env.TV_CERT || "/etc/letsencrypt/live/cert.pem";
  let keyFile = process.env.TV_KEY || "/etc/letsencrypt/live/privkey.pem";
  let serverOptions = {
    cert: fs.readFileSync(certFile),
    key: fs.readFileSync(keyFile),
  };

  gameServer = new colyseus.Server({
    server: https.createServer(serverOptions, app),
  });
} else {
  gameServer = new colyseus.Server({
    server: http.createServer(app),
  });
}

// Register MyRoom as "my_room"
gameServer.define("my_room", MyRoom);

gameServer.listen(port, { hostname: "localhost" });

console.log(`Listening on ${wsProto}://${host}:${port}`);
