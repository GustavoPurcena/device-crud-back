module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        name: {
            type: Sequelize.STRING(128),
            allowNull: false,
            notEmpty: true
        }
    });

    return Category;
};