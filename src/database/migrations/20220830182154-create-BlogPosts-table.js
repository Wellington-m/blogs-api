'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `CREATE TABLE BlogPosts (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL,
        published DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      );`
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `DROP TABLE BlogPosts;`
    );
  }
};
