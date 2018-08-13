const dev = {
    cdn: '',
    isDev: true
  };
  
  const beta = {
    cdn: '//s.weituibao.com/beta/react-seed',
    isBeta: true
  };
  
  const release = {
    cdn: '//s.weituibao.com/release/react-seed',
    vendorJsVersion: '0.0.2',
    appVersion: '0.0.2',
    isProduction: true
  };
  
  let config = dev;
  if (process.env.NODE_ENV === 'beta') {
    config = beta;
  } else if (process.env.NODE_ENV === 'production') {
    config = release;
  }
  
  console.log(config);
  
  module.exports = config;
  