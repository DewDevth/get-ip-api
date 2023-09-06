// const express = require('express');
// const app = express();
// const os = require('os'); // เพิ่มโมดูล os

// // ฟังก์ชันเพื่อดึง IPv4 address ของเครื่อง
// function getLocalIPv4Address() {
//   const interfaces = os.networkInterfaces();

//   for (const key in interfaces) {
//     for (const iface of interfaces[key]) {
//       if (iface.family === 'IPv4' && !iface.internal) {
//         return iface.address;
//       }
//     }
//   }

//   return 'IPv4 address not found';
// }

// app.get('/', (req, res) => {
//   const clientIP = getLocalIPv4Address();

//   res.send(`Your IPv4 address is: ${clientIP}`);
// });

// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });

const express = require("express");
const app = express();

app.set("trust proxy", true); // สำคัญ: เปิดใช้งานการเชื่อถือ proxy

app.get("/", (req, res) => {
  // const clientIP = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  const clientIP = req.header("x-forwarded-for") || req.socket.remoteAddress;

  res.send(`Your IPv4 address is: ${clientIP}`);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
