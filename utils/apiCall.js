// const BASE_URL = "http://3.111.218.43:8080/"
const BASE_URL = "http://13.201.35.244:8080/"


// get data from url
const UA_PRODUCT_ID = "1";
let ACCESS_TOKEN = "";
let CHANGE_PASSWORD_REDIRECT = "";
// let basicAuth = { ClientId: "mobile", Secret: "abc" };
let basicAuth = { ClientId: "mobile", Secret: "India@1947" };


// async function apiCall(url, method = 'GET', body, token) {
//     let completeUrl = BASE_URL + url;
//     if (token && !url.includes("oauth")) {
//         completeUrl = completeUrl + "?access_token=" + token
//     }
//     const headers = {
//         "content-type": "application/json",
//         "product_id": UA_PRODUCT_ID,
//         "Accept": "*/*",
//         "Authorization": 'Basic ' + btoa(basicAuth.ClientId + ":" + basicAuth.Secret)
//     }
//     let response = '';
//     try {
//         if (method == 'GET' || method == 'HEAD') {
//             response = await fetch(completeUrl, { method, headers })
//         } else {
//             response = await fetch(completeUrl, { method, body: JSON.stringify(body), headers })
//         }
//         if (response.status == 401) {
//             clearAccessToken()
//         }
//     } catch (e) {
//         console.log("Catch Errors ==> ", e)
//     }

//     // try {
//     //     if (CHANGE_PASSWORD_REDIRECT != undefined || CHANGE_PASSWORD_REDIRECT != null) {
//     //         history.push("/resetpassword");
//     //     }
//     // } catch (e) {
//     //     console.log("Catch Errors ==> " + e)
//     // }
//     return response
// }
async function apiCall(url, method = 'GET', body, token) {
    let completeUrl = BASE_URL + url;
    if (token && !url.includes("oauth")) {
        completeUrl = completeUrl + "?access_token=" + token
    }
    const headers = {
        "content-type": "application/json",
        "product_id": UA_PRODUCT_ID,
        "Accept": "*/*",
        "Authorization": 'Basic ' + btoa(basicAuth.ClientId + ":" + basicAuth.Secret)
    }
    let response = '';
    try {
        if (method == 'GET' || method == 'HEAD') {
            response = await fetch(completeUrl, { method, headers })
        } else {
            response = await fetch(completeUrl, { method, body: JSON.stringify(body), headers })
        }
        if (response.status == 401) {
            clearAccessToken()
        }
    } catch (e) {
        console.log("Catch Errors ==> ", e)
    }
    return response
}

async function apiCall2(url, method = 'GET', body, token) {
    console.log("==>", body, token)
    let completeUrl = BASE_URL + url
    if (token && !url.includes("oauth")) {
        completeUrl = completeUrl + "?access_token=" + token
    }
    const headers = {
        "content-type": "application/json",
        "product_id": UA_PRODUCT_ID,
        "Accept": "*/*",
        "Authorization": 'Bearer ' + token
    }
    let response = '';
    try {
        if (method == 'GET' || method == 'HEAD') {
            response = await fetch(completeUrl, { method, headers })
        } else {
            response = await fetch(completeUrl, { method, body: JSON.stringify(body), headers })
        }
        if (response.status == 401) {
            clearAccessToken()
        }
    } catch (e) {
        console.log("Catch Errors ==> ", e)
    }
    return response
}



function isLoggedIn() {
    if (ACCESS_TOKEN) {
        return true;
    }
    return false
}

function setAccessToken(token) {
    ACCESS_TOKEN = token
    window.localStorage.setItem("token", token);
}

function clearAccessToken(token) {
    ACCESS_TOKEN = null
    localStorage.clear();
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}


export { apiCall, apiCall2, setAccessToken, clearAccessToken, isLoggedIn }