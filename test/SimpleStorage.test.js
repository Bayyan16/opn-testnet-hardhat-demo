const { expect } = require("chai");

describe("SimpleStorage", function () {
  it("Should deploy with the initial value", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy(100);

    expect(await simpleStorage.getValue()).to.equal(100);
  });

  it("Should update stored value", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy(100);

    await simpleStorage.setValue(250);

    expect(await simpleStorage.getValue()).to.equal(250);
  });
});
