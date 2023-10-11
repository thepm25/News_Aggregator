const jwt = require("jsonwebtoken");
const Joi = require("joi");
const db = require("./../database/database");
const { messages, Keys } = require("../util/constants");
const { resonse } = require("./../middleware/response");

class UserValidator {
  static validateUserBody() {
    return (req, res, next) => {
      const userSchema = Joi.object({
        id: Joi.string().min(5).required(),
        username: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        preferences: Joi.object({
          sources: Joi.array().items(Joi.string()).optional(),
          categories: Joi.array().items(Joi.string()).optional(),
        }).optional(),
      });

      const result = userSchema.validate(req.body);
    if (result.error) {
      return res.status(400).json({ errors: result.error.details });
      next();
    };
  }
}

  static verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.log("Auth header not present");
      respond(res, messages.missingAuth, 401);
    }
    console.log("Auth Header :: ", authHeader);
    const accessToken = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(accessToken, Keys.secretAccessKey);
      const users = db.getUsers();
      req.user = users.find((user) => user.id === decoded.id);
      if (!req.user) {
        return res.status(401).json({ error: messages.invalidToken });
      }
      next();
    } catch (err) {
      console.error("err :: ", err);
      return res.status(500).json({ error: messages.unexpectedError });
    }
  }
}

module.exports = UserValidator;
