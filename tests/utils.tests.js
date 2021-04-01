const { expect } = require("chai");
const utils = require("../utils");

describe("test init check", () => {
    it('test check', () => {
        expect(utils.initchecking()).to.be.an("string");
        expect(utils.initchecking()).to.have.string("init utils");
    })
})

// describe("image type check", () => {
//     it('should return positive', () => {
//         const image = "myimage.jpeg";
//         expect(utils.imagetypecheck(image)).to.be.an("string");   
//         expect(utils.imagetypecheck(image)).to.have.string("image type accepted");
//     })

//     it('should return negative', () => {
//         const image = "myfile.txt";
//         expect(utils.imagetypecheck(image)).to.be.an("string"); 
//         expect(utils.imagetypecheck(image)).to.have.string("not a image, loading refused");
//     })
// })

// describe("image file size", () => {
//     it('should return positive integer', () => {
//         const myfile = '../utils.js';
//         expect(utils.imagefilesize(myfile)).to.be.an("integer");
//     })
// })