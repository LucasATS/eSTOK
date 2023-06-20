async function submit(params, Method, url = "/") {
  let body = null;

  if (Method === "GET") {
    url += "?" + new URLSearchParams(params);
  } else if (Method === "POST") {
    body = new FormData();
    Object.entries(params).map(([key, value]) => {
      if (typeof value !== 'object') {
        body.append(key, value);
      } else {
        Object.entries(value).map(([key_1, value_1]) => {
          if (typeof value_1 !== 'object') {
            body.append(`${key}[${key_1}]`, value_1);
          } else {
            Object.entries(value_1).map(([key_2, value_2]) =>{
              if (typeof value_2 !== 'object') {
                body.append(`${key}[${key_1}][${key_2}]`, value_2);
              } else {
                Object.entries(value_2).map(([key_3, value_3]) =>{
                  body.append(`${key}[${key_1}][${key_2}][${key_3}]`, value_3);
                });
              }
            });
          }
        })
      }
      
    });
  }
  const request = {
    method: Method,
    mode: "cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };
  if (body) request["body"] = new URLSearchParams(body);

  return fetch(url, request);
}
