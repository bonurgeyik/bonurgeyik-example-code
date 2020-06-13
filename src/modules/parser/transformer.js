const _ = require('lodash');

module.exports = {
    getId,
    getBook,
    getIdAsString,
    getTitle,
    getPublisher,
    getPublicationDate,
    getLanguage,
    getLicense,
    getAuthors,
    getAuthor,
    getBookData
}

function getBook(xmlStr) {
    return _.get(xmlStr, "rdf:RDF.pgterms:ebook");
}
function getId(book){
    return getIdAsString(book).substr(7);
} 
function getIdAsString(book) {
    return _.get(book, "$.rdf:about");
}
function getTitle(book) {
    return _.get(book, "dcterms:title");
}
function getPublisher(book) {
    return _.get(book, "dcterms:publisher");
}
function getPublicationDate(book) {
    return _.get(book, "dcterms:issued._")
}
function getLanguage(book) {
    return _.get(book, "dcterms:language.rdf:Description.rdf:value._")
}
function getLicense(book) {
    return _.get(book, "dcterms:rights");
}
function getSubjects(book) {
    let subjectArray = [];
    let subjects = _.get(book, "dcterms:subject", [])
    subjects.forEach(rawSubject => {
        let subject =  _.get(rawSubject, "rdf:Description.rdf:value");
        subjectArray.push(subject);
    });
    return subjectArray;
}
function getAuthorId(author) {
    return _.get(author, "$.rdf:about", "").substr(12);
}

function getAuthorName(author) {
    return _.get(author, "pgterms:name", "")

}

function getAgent(creator) {
    return _.get(creator, "pgterms:agent", "");
}

function getCreator(book) {
    return _.get(book, "dcterms:creator");
}

function getAuthor(author) {
    return {
        id: getAuthorId(author),
        name: getAuthorName(author)
    }
}

function getAuthors(book) {
    let authorsArray = [];
    let creators = getCreator(book);
    if(!getAgent(creators)) {
        if(creators) {
            creators.forEach(creator => {
                authorsArray.push(getAuthor(getAgent(creator)));
            });
        }
        
    }
    else {
        authorsArray.push(getAuthor(getAgent(creators)));
    }
    return authorsArray;
}

function getBookData(xmlStr) {
    let book = getBook(xmlStr);
    let bookData = {};
    bookData.id = getId(book);
    bookData.title = getTitle(book);
    bookData.publisher = getPublisher(book);
    bookData.publicationDate = getPublicationDate(book);
    bookData.language = getLanguage(book);
    bookData.license = getLicense(book);
    bookData.authors = getAuthors(book);
    bookData.subjects = getSubjects(book);
    return bookData;
}
