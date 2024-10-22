const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan" ]
    // Your code here

    const isNamesGreaterThan8 =names=> names.find(str=>str.length>8)
    console.log(isNamesGreaterThan8(names));
    // Output: "Geetanjali"