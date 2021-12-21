var OUR = artifacts.require("OUR");

module.exports = function (deployer) {
    deployer.deploy(OUR, 'OUR', 'OUR', 1000000000);
};