const envChecker = {
  isProduction: () =>
    process.env.REACT_APP_NODE_ENV?.toLocaleLowerCase() === 'production',
};

export default envChecker;
