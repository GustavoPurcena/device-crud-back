module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define("device", {
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        color: {
            type: Sequelize.STRING(16),
            allowNull: true
        },
        partNumber: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isPositiveInteger(value) {
                    if (parseInt(value) <= parseInt(0)) {
                        throw new Error('partNumber must be a positive integer');
                    }
                }
            }
        },
    });

    return Device;
};