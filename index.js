const express = require('express');
const app = express();
const requestIp = require('request-ip');

app.use(requestIp.mw());

app.get('/', (req, res) => {
  const clientIP = req.clientIp.replace('::ffff:', ''); // นำออกเพื่อให้เหลือแค่ IPv4 address

  res.send(`Your IP address is: ${clientIP}`);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
