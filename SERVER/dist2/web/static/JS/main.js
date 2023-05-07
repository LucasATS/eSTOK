async function submit(params, Method, url="/") {
    
    let body = null;
    
    if (Method === 'GET') {
        url += '?' + new URLSearchParams(params);
    } else if (Method === 'POST') {
        body = new FormData();
        let keys = Object.keys(params);
        for (let k of keys) body.append(k, params[k]);
    }
    const request = {
        method: Method,
        mode: 'same-origin',
        headers: {'Content-Type': "application/x-www-form-urlencoded"}
    }
    if (body) request['body'] = new URLSearchParams(body);

    return fetch(url, request);
}