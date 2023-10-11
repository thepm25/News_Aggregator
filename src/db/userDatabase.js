const fs = require("fs");
const path = require("path");


let filePath = path.join(__dirname, 'data.json');

const Data = {
    getUsers() {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    },
    writeUsers(user) {
        const data = JSON.stringify(user);
        return fs.writeFileSync(filePath, data);
    }
}

module.exports = Data