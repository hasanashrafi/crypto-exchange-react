const api_key = "CG-JbJLb9BfQY1ZGzBHXgjzsnuk"


const getCoinList = () => {
    return ` https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${api_key}`
}

export { api_key, getCoinList }