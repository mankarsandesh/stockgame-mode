const config = {
    name: `${process.env.NODE_ENV}`,
    version: "1",
    authUser: `${process.env.AUTH_USER}`,
    authPassword: `${process.env.AUTH_PASS}`,
    apiDomain: process.env.API_DOMAIN,
    socketUrl: process.env.SOCKET_URL,
    baseUrl:  `${process.env.NODE_ENV}`,
    secureStorageSecretKey: process.env.SECURE_STORAGE_SECRET_KEY,
    isMaintenance: process.env.MAINTENANCE_MODE,
    header: {
      authorization: `${process.env.BASIC_AUTH}`
    },
    mainServer: {
      url: `${process.env.MAIN_GAME}`
    }
  };
  
  export default config;
  