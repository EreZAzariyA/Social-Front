class Config {
  urls = {
    socket:"",
    auth: {
      login: "",
      register: ""
    },
    admin: {
      users: {
        allUsersUrl: "",
      }
    },
    home: {
      searchUser: "",
    },
    user:{
      getOneUserUrl: ""
    }
  };

  constructor(baseUrl, socketUrl) {
    this.urls = {
      socket: socketUrl,
      auth: {
        login: baseUrl + "auth/login/",
        register: baseUrl + "auth/register/"
      },
      admin: {
        users: {
          allUsersUrl: baseUrl + "users/",
        }
      },
      home:{
        searchUser: baseUrl + "search-user/",
      },
      user:{
        getOneUserUrl: baseUrl + "users/user/"
      }
    };
  };
};

class DevelopmentConfig extends Config {
  constructor() {
    super("http://127.0.0.1:5002/api/", "http://127.0.0.1:5002");
  };
};

class ProductionConfig extends Config {
  constructor() {
    super("https://6gigtxchxl.execute-api.eu-central-1.amazonaws.com/api/","https://6gigtxchxl.execute-api.eu-central-1.amazonaws.com");
  };
};

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;