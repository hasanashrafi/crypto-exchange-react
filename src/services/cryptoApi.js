const api_key = "CG-JbJLb9BfQY1ZGzBHXgjzsnuk"
const BASE_URL = "https://api.coingecko.com/api/v3"

const getCoinList = (page,currency) => {
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${api_key}`
}

export { getCoinList }