module.exports = {
  contracts_build_directory: './client/src/artifacts/',
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.21",      // We stick to the version you have
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "paris"  // <--- THIS IS THE MAGIC FIX. It disables the problematic PUSH0 opcode.
      }
    }
  }
};