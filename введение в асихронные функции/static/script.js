let xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3000/", true);
xhr.onload = function (err) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.statusText)
        }
    }
};

xhr.onerror = (e) => console.error(xhr.statusText);

xhr.send(null);