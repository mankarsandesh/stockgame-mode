const config = {
    name: `${process.env.NODE_ENV}`,
    version: '1',
    header: {
      authorization: `${process.env.BASIC_AUTH}`,
    },
    userLogin: {
      url: `${process.env.MAIN_GAME}`,
    },
    getRoadMap: {
      url: `${process.env.BASE_URL}/getRoadMap`
    }
  };
  
  export default config;  