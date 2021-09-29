const envChecker = {
  isProduction: () => process.env.REACT_APP_IS_PRODUCTION === 'true',
};

export default envChecker;
