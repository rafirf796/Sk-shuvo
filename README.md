--------

###  —͟͟͞ 𝐉𝐎𝐘-𝐁𝐎𝐓
❖ **`𝐀𝐒𝐢𝐦𝐩𝐥𝐞 𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐞𝐫 𝐁𝐨𝐭 𝐌𝐚𝐝𝐞 𝐁𝐲 𝐉𝐨𝐲 𝐀𝐡𝐦𝐞𝐝 !`** ❖

----------
## CLICK <a href="https://github.com/JOY-AHMED-88/JOY-BOT/issues">HERE IF YOU ARE NEW TO BOTS</a>


<img src='https://i.imgur.com/FJpu40m.jpeg'/>

-------

 

### <br>   ❖ DEPLOY_WORKFLOWS ❖
```
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    # Step to check out the repository code
    - uses: actions/checkout@v2

    # Step to set up the specified Node.js version
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}

    # Step to install dependencies
    - name: Install dependencies
      run: npm install

    # Step to run the bot with the correct port
    - name: Start the bot
      env:
        PORT: 8080
      run: npm start
```