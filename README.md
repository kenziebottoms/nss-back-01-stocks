# HTTP Client

![](https://img.shields.io/badge/mvp-working-green.svg)
![](https://img.shields.io/badge/data-iex_api-yellow.svg)
![](https://img.shields.io/badge/bonus-wip-yellow.svg)

## Run locally

```bash
git clone git@github.com:kenziebottoms/nss-back-01-stocks.git
cd nss-back-01-stocks
npm install
sudo chmod +x stocks.js
./stocks.js AAPL
```

## Usage

```bash
./stocks.js [stock symbol]
```

Write a program that performs an HTTP GET request to get the average stock
price. Use the first argument for a ticker symbol. Use the `get()` method in the
`http` module with the API provided by [IEX API](https://iextrading.com/developer/).

It would certainly be easier to test if you can grab the latest stock price, but
because the response is so small, there may not be an opportunity to demonstrate
chunking. On the API docs you will see an example request for data to create a
chart. This will give 365 of daily prices. Use these prices to get an average.

Expected:

```bash
$ ./stocks.js AAPL
$123.45
```

## Bonus

- [x] Avoid using encoded characters in your url: %22%3A%5B%22c%22%5D%7D%5D%7D
- [x] Full Destructuring
    - [x] on the API response object
    - [x] and `http` module
- [x] Abstract a getJSON function. (This is good practice for when we write our own APIs):
    ```js
    const getJSON = (url, cb) => { ... }
    getJSON('http://example.com', data => { ... })
    ```
    - [ ] Promisify the getJSON function:

    ```js
    const getJSON = url => { ... }
    getJSON('http://example.com').then(data => { ... })
    ```