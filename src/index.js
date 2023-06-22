const express = require('express');
const { ServerConfig, Logger } = require('./config/index.js');
const apiRoutes = require('./routes/index.js');

const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`successfully server started on port: ${ServerConfig.PORT}`);
    Logger.info("successfully started the server", "root", {});
}); 