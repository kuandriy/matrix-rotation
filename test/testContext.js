const setup = async () => {
  console.log("Setting up test environment...");
};

const teardown = async () => {
  console.log("Tearing down test environment...");
};

const testContext = () => {
  return {
    setup,
    teardown,
  };
};

module.exports = { testContext };
