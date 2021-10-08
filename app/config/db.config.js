module.exports = {
    HOST: "localhost",
    USER: "challenger",
    PASSWORD: "password",
    DB: "eldorado_challenge",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};