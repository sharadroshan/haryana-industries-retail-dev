// const BASE_URL = "http://3.27.215.138:8080";
const BASE_URL = "http://13.201.35.244:8080/";

const UA_PRODUCT_ID = "1";
let basicAuth = { ClientId: "mobile", Secret: "India@1947" };
let accessToken = "";

export function clearAccessToken() {
    localStorage.clear();
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

export function getToken() {
    if (typeof window !== "undefined") {
        accessToken = window.localStorage.getItem("token");
    } else {
        console.log("Oops, `window` is not defined")
    }
};

export async function apiCall(url, method = 'GET', body) {
    getToken();
    let completeUrl = BASE_URL + url;
    if (accessToken && !url.includes("oauth")) {
        completeUrl = completeUrl + "?access_token=" + accessToken
    }
    const headers = {
        "content-type": "application/json",
        "product_id": UA_PRODUCT_ID,
        "Accept": "*/*",
        "Authorization": 'Basic ' + btoa(basicAuth.ClientId + ":" + basicAuth.Secret)
    }
    let response = '';
    try {
        if (method === 'GET' || method === 'HEAD') {
            response = await fetch(completeUrl, { method, headers })
        } else {
            response = await fetch(completeUrl, { method, body: JSON.stringify(body), headers })
        }
        if (response.status === 401) {
            clearAccessToken();
            window.location.replace("/login");
        }
    } catch (e) {
        console.log("Catch Errors ==> ", e)
    }
    return response
}

export async function apiCall2(url, method = 'GET', body) {
    getToken();
    let completeUrl = BASE_URL + url;
    if (accessToken && !url.includes("oauth")) {
        completeUrl = completeUrl + "&access_token=" + accessToken
    }
    const headers = {
        "content-type": "application/json",
        "product_id": UA_PRODUCT_ID,
        "Accept": "*/*",
        "Authorization": 'Basic ' + btoa(basicAuth.ClientId + ":" + basicAuth.Secret)
    }
    let response = '';
    try {
        if (method === 'GET' || method === 'HEAD') {
            response = await fetch(completeUrl, { method, headers })
        } else {
            response = await fetch(completeUrl, { method, body: JSON.stringify(body), headers })
        }
        if (response.status === 401) {
            clearAccessToken();
            window.location.replace("/login");
        }
    } catch (e) {
        console.log("Catch Errors ==> ", e)
    }
    return response
}
