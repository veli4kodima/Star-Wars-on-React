const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc': 'src/hoc',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@styles': 'src/styles'
    })(config);

    return config;
  }