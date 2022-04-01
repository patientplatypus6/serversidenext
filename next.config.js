
/**
 * @type {import('next').NextConfig}
 */
//  @amcharts
//  const withTM = require('next-transpile-modules')(['somemodule', 'and-another']); // pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules')(['react-syntax-highlighter'])
const nextConfig = {
  /* config options here */
}

module.exports = withTM(nextConfig)