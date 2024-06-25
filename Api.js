const fs = require('fs').promises;
const { User, Post } = require('./db/models');

//* Сам классовый подход и статик методы помогут подсветить пробелы в знаниях
class Api {
  //* Метод на fs, асинхронность и парсинг JSON
  static async loadDataFromFile() {}

  //* Метод на деструктуризацию из объекта (если пишут дольше и сложнее - предложить сразу деструктурировать)
  static sanitizeData(data) {}

  //* Метод на логику использования методов внутри класса, работу с map и иммутабельностью и методом Sequelize
  static async createDataDB(data, firstName) {}

  static async getUserByFirstName(first_name) {
    const user = await User.findOne({ where: { first_name } });
    return user ? user.get({ plain: true, nested: true }) : null;
  }

  static async getPostDataFromDB() {
    const posts = await Post.findAll();
    console.dir(
      posts.map((item) => item.get({ plain: true, nested: true })),
      { depth: null }
    );
  }
}

module.exports = Api;
