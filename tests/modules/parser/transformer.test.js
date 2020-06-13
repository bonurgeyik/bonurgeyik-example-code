const transformer = require("../../../src/modules/parser/transformer");
const mockWithMultipleAuthor = require("../../mocks/mock1");
const mockWithSingleAuthor = require("../../mocks/mock2");

const mockEbookStr = require("../../mocks/mockEbook");

describe("transformer", () => {
  describe("transformer.getBookData", () => {
    it("should return book string", () => {
      let bookStr = transformer.getBook(mockWithMultipleAuthor);
      let expected = mockEbookStr;
      expect(bookStr).toEqual(expected);
    });

    it("should return title string", () => {
      let bookStr = transformer.getBook(mockWithMultipleAuthor);
      let title = transformer.getTitle(bookStr);
      let expected =
        "The Declaration of Independence of the United States of America";
      expect(title).toEqual(expected);
    });

    it("should return book data with multiple authors", () => {
      let bookData = transformer.getBookData(mockWithMultipleAuthor);
      let expected = {
        authors: [
          { id: "1639", name: "Jefferson, Thomass" },
          { id: "1638", name: "Jefferson, Thomas" },
        ],
        id: "2",
        language: "en",
        license: "Public domain in the USA.",
        publicationDate: "1971-12-01",
        publisher: "Project Gutenberg",
        title:
          "The Declaration of Independence of the United States of America",
        subjects: [
          "JK",
          "United States. Declaration of Independence",
          "United States -- History -- Revolution, 1775-1783 -- Sources",
          "E201",
        ],
      };
      expect(bookData).toEqual(expected);
    });

    it("should return book data with single author", () => {
      let bookData = transformer.getBookData(mockWithSingleAuthor);
      let expected = {
        authors: [{ id: "1638", name: "Jefferson, Thomas" }],
        id: "2",
        language: "en",
        license: "Public domain in the USA.",
        publicationDate: "1971-12-01",
        publisher: "Project Gutenberg",
        title:
          "The Declaration of Independence of the United States of America",
        subjects: [
          "JK",
          "United States. Declaration of Independence",
          "United States -- History -- Revolution, 1775-1783 -- Sources",
          "E201",
        ]
      };
      expect(bookData).toEqual(expected);
    });
  });
});
