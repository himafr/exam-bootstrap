var degree = 0;
arr.forEach((element, index) => {
  var carry = arr[0];
  arr.shift();
  arr.splice(rand(), 0, carry);
});
arr.forEach((element, index) => {
  if (element.a3) {
    document.getElementById("root").innerHTML += `
        <div class="card border-info mb-3 " >
                <div class="card-header">${element.q}</div>
                <div class="card-body">
                    <div class="row">
                        <label for="a${index}" an="${
      element.a1 == element.an
    }" class="col-12 col-md">
                            <input id="a${index}" name="${index}" type="radio" class="card-text "/> ${
      element.a1
    }
                        </label>
                        <label for="b${index}" an="${
      element.a2 == element.an
    }" class="col-12 col-md">
                            <input id="b${index}" name="${index}" type="radio" class="card-text "/> ${
      element.a2
    }
                        </label>
                        <label for="c${index}" an="${
      element.a3 == element.an
    }" class="col-12 col-md">
                            <input id="c${index}" name="${index}" type="radio" class="card-text "/> ${
      element.a3
    }
                        </label>
                        <label for="d${index}" an="${
      element.a4 == element.an
    }" class="col-12 col-md">
                            <input id="d${index}" name="${index}" type="radio" class="card-text "/> ${
      element.a4
    }
                        </label>
                    </div>
                </div>
        </div> `;
  } else {
    document.getElementById("root").innerHTML += `
    <div class="card border-info mb-3 " >
            <div class="card-header">${element.q}</div>
            <div class="card-body">
                <div class="row">
                    <label for="a${index}" an="${
      element.a1 == element.an
    }"  class="col-12 col-md ">
                        <input id="a${index}"  name="${
      element.an
    }" type="radio" class="card-text "/> ${element.a1}
                    </label>
                    <label for="b${index}" an="${
      element.a2 == element.an
    }" class="col-12 col-md">
                        <input id="b${index}" name="${index}"  type="radio" class="card-text "/> ${
      element.a2
    }
                    </label>
                </div>
            </div>
    </div> `;
  }
});

var all = document.querySelectorAll("label");
all.forEach((element, index) => {
  element.addEventListener(
    "click",
    () => {
      if (element.getAttribute("an") == "true") {
        element.setAttribute("class", "alert alert-success col-12 col-md");
      } else {
        element.setAttribute("class", "alert alert-danger col-12 col-md");
      }
    },
    { once: true }
  );
});

function rest(){
}

function rand() {
  return Math.floor(Math.random() * arr.length);
}
