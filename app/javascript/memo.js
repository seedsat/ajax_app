function post() {
  const submit = document.getElementById('submit');

  submit.addEventListener('click', () => {
    const form = document.getElementById("form");
    const fromData = new fromData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", '/posts', true);
    XHR.responseType = "json";
    XHR.send(FormData)
  });
}

window.addEventListener('load', post);