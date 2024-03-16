function testMatch(input) {
    let pattern = /\b[A-Z][a-z]+[ ]+[A-Z][a-z]+\b/g;
    let validNames = input.match(pattern);
    console.log(validNames.join(', '));
}
testMatch("Ivan Ivanov, Ivan ivanov, Miroslav Tzarev, IVan Ivanov, Test Testov");