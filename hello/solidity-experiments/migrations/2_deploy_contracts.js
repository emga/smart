/*
 * migrations/2_deploy_contracts.js:
 */
module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.autolink();
  deployer.deploy(MetaCoin);
  // add this line
  deployer.deploy(ProofOfExistence1);
};
