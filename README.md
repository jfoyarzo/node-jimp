<a name="readme-top"></a>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Black and White Server ](#-black-and-white-server-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [👥 Authors ](#-authors-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [📝 License ](#-license-)



# 📖 Black and White Server <a name="about-project"></a>


**Black and White Server** is a Node.js app for processing images and converting them to grayscale. The backend is built with Node.js and uses the `http` and `fs` modules. Also uses the `jimp` package to process the image and `yargs` to create a command that includes a key for executing the server.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Client/Server</summary>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>


- **Convert to grayscale** any image you want, as long as you have the URL.
- **Jimp** package is used for image processing.
- **Yargs** command is used to pass the correct key to the server so it can run.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>


- [Live Demo Link](https://node-jimp.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites
To run this project you need:

- Node.js

### Setup

Clone this repository to your desired folder:

```
git clone git@github.com:jfoyarzo/node-jimp.git
```

### Install

Install this project with:

```
npm install
```

### Usage

To run the project, execute the following command:

```
node index.js server --key yourSecretKey
```
You must also provide the key in a `.env` file as illustrated in the `.env.example` file. 
This will start the server in the port provided using an environment variable or 3000 if no environment variable was configured.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 **Felipe Oyarzo**

- GitHub: [@jfoyarzo](https://github.com/jfoyarzo)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jorge-felipe-oyarzo-contreras/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jfoyarzo/node-jimp/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>


If you like this project, please give it a star ⭐

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>