const {response} = require("../middleware/response");
const db = require("../newsAggDb/newsAggDb");
const {Keys} = require("../util/constants");
const UserAuthService = require("../service/userAuthService");

const register = async (req, res) => {
    try {
        const userBody = req.body;
        const existingUser = await UserAuthService.checkAndValidateExistingUser(userBody);

        if(existingUser){
            return response(res, messages.userExists, 400);
        }

        const registerUser = await UserAuthService.registerUser(userBody);
        return response(res, messages.registrationSuccess, 201);
    } catch (err) {
        console.log("Error while registering user :: ", err);
        respond(res, messages.unexpectedError, 500);
    }
};

const login = async (req, res) => {
    const { body } = req;
    const user = await UserAuthService.login(body);
    if (!user) {
        return response(res, messages.userNotFound, 404);
    }
};

module.exports = users