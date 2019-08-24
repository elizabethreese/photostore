'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ImagesAndAlbums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ImageId: {
        type: Sequelize.INTEGER,
        references: {    // Album has many images n:n
          model: "Images",
          key: 'id'
        }
      },
      AlbumId: {
        type: Sequelize.INTEGER,
        references: {    // Image has many albums n:n
          model: "Albums",
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ImagesAndAlbums');
  }
};