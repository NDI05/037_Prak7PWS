"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Komiks",
      [
        {
          title: "One Piece",
          description: "Petualangan Luffy mencari harta karun",
          author: "Eiichiro Oda",
          imageType: null,
          imageName: null,
          imageData: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Naruto",
          description: "Perjalanan seorang ninja muda",
          author: "Masashi Kishimoto",
          imageType: null,
          imageName: null,
          imageData: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Detective Conan",
          description: "Detektif remaja memecahkan kasus",
          author: "Gosho Aoyama",
          imageType: null,
          imageName: null,
          imageData: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Komiks", null, {});
  },
};
