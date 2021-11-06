var ERC721MintableComplete = artifacts.require("LiveSpaceERC721Token");

contract("TestERC721Mintable", (accounts) => {
  const account_one = "0x5Ec1D52240D43D182F197d0C59DC8863210Ff953";
  const account_two = accounts[1];
  const account_three = accounts[2];

  describe("match erc721 spec", function () {
    beforeEach(async function () {
      this.contract = await ERC721MintableComplete.new({ from: account_one });

      // mint multiple tokens
      await this.contract.mint(account_one, 21);
      await this.contract.mint(account_one, 22);
      await this.contract.mint(account_one, 23);
      await this.contract.mint(account_one, 24);
      await this.contract.mint(account_one, 25);
      await this.contract.mint(account_one, 26);
      await this.contract.mint(account_one, 27);
      await this.contract.mint(account_one, 28);
      await this.contract.mint(account_one, 29);
      await this.contract.mint(account_one, 30);
    });
  });
});
