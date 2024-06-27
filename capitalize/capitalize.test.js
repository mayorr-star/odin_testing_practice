const capitalize = require("./capitalize");
    test ("nana is Nana", () => {
        expect(capitalize("nana")).toBe("Nana")
    }) 
    test ("jack is Jack", () => {
        expect(capitalize("jack")).toBe("Jack")
    }) 
    test ("package is Package", () => {
        expect(capitalize("package")).toBe("Package")
    }) 
    test ("school is School", () => {
        expect(capitalize("school")).toBe("School")
    }) 
    test ("laptop is Laptop", () => {
        expect(capitalize("laptop")).toBe("Laptop")
    }) 
    test ("asdkjabdjkjkadbjkd is Asdkjabdjkjkadbjkd", () => {
        expect(capitalize("asdkjabdjkjkadbjkd")).toBe("Asdkjabdjkjkadbjkd")
    }) 
    test ("this is movie is really great is This is movie is really great", () => {
        expect(capitalize("this is movie is really great")).toBe("This is movie is really great")
    }) 
    test ("can jackson swim faster a shark is can Jackson swim faster a shark", () => {
        expect(capitalize("can jackson swim faster a shark")).toBe("Can jackson swim faster a shark")
    }) 
    test ("test for undefined", () => {
        expect(capitalize(undefined)).toBe("Only strings are accepted")
    }) 
    test ("test for null", () => {
        expect(capitalize(null)).toBe("Only strings are accepted")
    }) 
    test ("test for empty strings", () => {
        expect(capitalize("")).toBe("")
    }) 
    test (" ", () => {
        expect(capitalize(" ")).toBe("")
    }) 