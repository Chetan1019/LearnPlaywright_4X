let enviroment = "staging";
let baseURL = enviroment === "prod"
     ? "https://api.example.com"
     :  "https://staging-api.example.com";

console.log(baseURL);
    