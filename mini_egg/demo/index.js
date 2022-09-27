const {MiniEgg} = require("../src/index");
const config = require("./config");
const miniegg = new MiniEgg(config);
miniegg.start(3000);

