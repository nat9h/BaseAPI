# Base REST API

## Simple REST API Base Using Express.js

This repository provides a simple template for creating a REST API using Express.js support [Vercel.](https://vercel.com "Vercel.") It includes basic setup instructions, configuration options, and licensing information.

## 📮 Terms & Conditions

By using this project, you agree to the terms and conditions outlined in the LICENSE file.

## 📦 Installation
To set up the project on your local machine, follow these steps:

```bash
git clone https://github.com/nat9h/BaseAPI.git
cd BaseAPI
npm install
```

## 🚀 Starting the Server
To start the server, simply run:

```bash
node .
```
This will start the server on the port specified in the configuration file.

## 🔧 Configuration
To customize the API, modify the `schema/config.js` file. Below is an example configuration:
```
const options = {
  name: 'Api_Name',  // Customize your API name
  developer: "@Irull2nd", // Replace with your own name or username
  port: 3000, // Specify the port number
  webname: 'Your Name',  // Name of the website or project
  description: 'Simple Base Rest API', // Brief description of the API
  favicon: '' // URL to your favicon
};

module.exports = {
  options,
  host: {
    BASE_URL: 'https://YOUR_DOMAIN.com'
    /*
    Example: http://localhost:3000
    */
  }
};
```
## 📝 License

This project is licensed under the [MIT License](LICENSE), which means you are free to use, modify, and distribute the code, but you must include the original copyright and license notice in any copy of the project or substantial portion of it.

## 👨‍💻 Original Work
This project is an original creation by [@Irull2nd](https://www.github.com/khrlmstfa "@Irull2nd"). Any contributions or modifications should be properly attributed to the original author.

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are always welcome!