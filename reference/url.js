const url = require('url');

const baseUrl = new URL('https://www.rezasohrabi.com:8080/path/resume.html?page=2&activ=true');

const getSerializedUrl = () => {
    return baseUrl.href;
}

const getRootDomain = () => {
    return baseUrl.hostname;
}

const getDomainAndPort = () => {
    return baseUrl.host;
}

const getRelativePath = () => {
    return baseUrl.pathname;
}

const getSerializedQuery = () => {
    return baseUrl.search;
}

const getParams = () => {
    return baseUrl.searchParams;
}

const appendParams = (name, value) => {
    return baseUrl.searchParams.append(name, value);
}

const logParams = () => {
    const params = getParams()
    params.forEach((value, name) => console.log('param:', name, value));
}

console.log('getSerializedUrl', getSerializedUrl());
console.log('getRootDomain', getRootDomain());
console.log('getDomainAndPort', getDomainAndPort());
console.log('getRelativePath', getRelativePath());
console.log('getSerializedQuery', getSerializedQuery());
console.log('getParams', getParams());
appendParams('users', '2')
console.log('appendParams', getParams());
logParams();
