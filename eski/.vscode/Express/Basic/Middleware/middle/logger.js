const fs = require("fs");
const path = require("path");
const fsPromises = require("fs/promises");

const logger = async (message, logName) => {
    const currentDate = new Date().toUTCString();
    const logMessage = `${currentDate}\T${message}`
    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs')); //mkdir yeni dosya açar. dirname olduğumuz yeri verir (logger.js). '..' bir üste çıkmaya yarar (middle). 
        }

        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logMessage);

    } catch (error) {
        console.log(error);
    }
}
module.exports = logger;