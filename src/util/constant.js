module.exports.messages = {
    userExists : "User already exists",
    registrationSuccess: "User registered successfully",
    unexpectedError: "An Application Error has occurred",
    missingAuth: "Auth header is missing",
    userNotFound: "User not found",
    incorrectPassword: "Password is incorrect",
    loginSuccess: "Login successful",
    invalidToken: "malformed or invalid token"
}

module.exports.apis = {
    newsApi: "https://newsapi.org/v2/"
}

module.exports.Keys = {
    secretAccessKey: "new-aggregator-api-v2",
    newsApiKey: "5987efef7b6b4281a70ba3e63d5ba8ac"
}

module.exports.baseUrls = {
    source: "https://newsapi.org/v2/top-headlines/sources?apiKey=",
    everything: "https://newsapi.org/v2/everything?q="
}