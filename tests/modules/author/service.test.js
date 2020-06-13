const authorService = require("../../../src/modules/author/service");
const models = require("../../../src/models");
global.console = {
  log: jest.fn(), // console.log are ignored in tests
  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};
describe("authorService", () => {
  beforeAll(async () => {
    await models.sequelize.sync();
  });
  let authorData = {
      id: 1,
      name: "Onur Geyik"
  }
  let options = {
    where: {
        id: authorData.id,
        name: authorData.name
    }
  }
  

  it("should create author", async() => {
    
    let [author, created] = await authorService.insertAuthor(options);
    expect(author.dataValues).toEqual(authorData);
    expect(created).toEqual(true);

  });
  it("should return author", async() => {
    
    
    let [author, created] = await authorService.insertAuthor(options);
    expect(author.dataValues).toEqual(authorData);
    expect(created).toEqual(false);
  });
  it("should generate error", async() => {
    options.where.id = "x";
    let [author, created] = await authorService.insertAuthor(options);
    expect(author).toEqual(null);
  });

  afterAll(async () => {
    await models.sequelize.close();
  });
});
