const bookService = require("../../../src/modules/book/service");
const models = require("../../../src/models");
global.console = {
  log: jest.fn(), // console.log are ignored in tests
  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};
describe("bookService", () => {
  beforeAll(async () => {
    await models.sequelize.sync();
  });
  let bookData = {
    id: 2,
    title: "The Declaration of Independence of the United States of America",
    publisher: "Project Gutenberg",
    publicationDate: "1971-12-01",
    language: "en",
    license: "Public domain in the USA.",
    subjects: [
      "JK",
      "United States. Declaration of Independence",
      "United States -- History -- Revolution, 1775-1783 -- Sources",
      "E201",
    ],
    authors: [{ id: 1639, name: "Jefferson, Thomass" }],
  };

  it("should create book and author", async () => {
    let book = await bookService.insertBook(bookData);
    expect(book.dataValues.id).toEqual(bookData.id);
  });

  it("should generate create book error", async () => {
    bookData.id = "x";
    let book = await bookService.insertBook(bookData);
    expect(book).toEqual(null);
  });

  it("should generate create author error", async () => {
    bookData.id = 3;
    bookData.authors = [{ id: "x", name: "Jefferson, Thomass" }];

    let book = await bookService.insertBook(bookData);
    expect(book.dataValues.id).toEqual(bookData.id);
  });

  afterAll(async () => {
    await models.sequelize.close();
  });
});
