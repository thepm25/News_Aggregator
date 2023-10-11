const {nanoid} = require("nanoid");
const axios = require('axios');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../db/userDatabse");
const {messages} = require("./../util/constant")
const validator = require("../middleware/validator/userValidation");

function generateAccessToken(id) {
    return jwt.sign({id}, Keys.secretAccessKey, {expiresIn: 900});//Session id expires after 5 minutes
}

class UserAuthService {
    async checkAndValidateExistingUser(userObject) {
      validator.validateUserBody(userObject);
      const existingUser = this.getExistingUser(userObject);
      if (existingUser) {
        console.log("[Internal] User already exists. User details:", existingUser);
        return true;
      }
      console.log("[Internal] User does not exist");
      return false;
    }


  async registerUser(user) {
    try {
        const id = nanoid(5);
        const passHash = bcrypt.hashSync(user.password, 8);

        const newUser = {
            id: id,
            emailId: user.emailId,
            password: passHash,
            preferences: user.preferences
        };

        const users = await db.getUsers();
        users.push(newUser);
        await db.writeUsers(users);

      console.log("[Internal] User registered successfully. User details:", newUser);
      return response(res, messages.registrationSuccess, 201);
    } catch (err) {
        console.log("Error while registering user :: ", err);
        return reponse(res, messages.unexpectedError, 500);
    }
  }

  async login(userObject) {
    try {
      if (!this.existingUser(userObject)) {
        return null;
      }

        const user = this.getExistingUser(userObject);

        // Comparing passwords
        const passwordIsValid = bcrypt.compareSync(
        userObject.password,
        user.password
        );

      // Checking if the password was valid and send a response accordingly
        if (!passwordIsValid) {
            return{
                status: 401, message: messages.incorrectPassword
            };
        }

        const accessToken = generateAccessToken(existingUser.id);
        return{
            status: 200, message: messages.loginSuccess, accessToken
        };
    } 
    catch (err) {
        console.log("Error while logging user :: ", err);
        respond(res, messages.unexpectedError, 500);
    }
  }

  async getExistingUser(userObject) {
    const existingUser = await db.getUsers().findOne({ email: userObject.email });
    return existingUser || null;
  }
}

module.exports = UserAuthService;
