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



const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const clientIP = req.connection.remoteAddress; // ดึง IP address ของเครื่อง client จาก req

  // กรองเพื่อให้ได้เฉพาะ IPv4 address
  const ipv4Address = clientIP.includes(':') ? clientIP.split(':').pop() : clientIP;

  res.send(`Your IPv4 address is: ${ipv4Address}`);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
