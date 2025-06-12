const form = document.forms[0];
let errors = document.querySelectorAll(".error");
let success = document.querySelector(".success");
const dataInputs = [
  form["first-name"],
  form["last-name"],
  form["email"],
  form["message"],
];
form.onsubmit = function (e) {
  // Text Conditions
  let txt = "";
  dataInputs.forEach(function (inp, i) {
    if (inp.value === "") {
      inp.style.borderColor = "red";
      e.preventDefault();
      errors[i].style.visibility = "visible";
    } else {
      errors[i].style.visibility = "hidden";
      inp.style.borderColor = "#d1d5db";
    }

    inp.onfocus = function () {
      inp.style.borderColor = "#d1d5db";
      errors[i].style.visibility = "hidden";
    };
    inp.onblur = function () {
      if (inp.value.trim() === "") {
        errors[i].style.visibility = "visible";
        inp.style.borderColor = "#d1d5db";
      } else {
        errors[i].style.visibility = "hidden";
      }
    };
    // Check Boxes Conditions
    let checkbox = document.querySelector(".check-error");
    if (!form["check"].checked) {
      e.preventDefault();
      checkbox.style.visibility = "visible";
    } else {
      checkbox.style.visibility = "hidden";
    }

    form["check"].onclick = function () {
      if (!form["check"].checked) {
        checkbox.style.visibility = "visible";
      } else {
        checkbox.style.visibility = "hidden";
      }
    };

    let radios = document.querySelectorAll(".rad");
    // Radios Conditions
    radios.forEach(function (radio) {
      let queryError = document.querySelector(".query-error");

      radio.onclick = function () {
        if (txt === "") {
          queryError.style.visibility = "hidden";
        } else {
          queryError.style.visibility = "visible";
        }
      };

      if (radio.checked) {
        txt = radio.value;
      }
      if (txt !== "") {
        queryError.style.visibility = "hidden";
      } else {
        queryError.style.visibility = "visible";
        e.preventDefault();
      }
    });
    if (inp.value !== "" && txt !== "" && form["check"].checked) {
      success.style.animation = "success 0.3s ease-out forwards";
      e.preventDefault();

      setTimeout(() => {
        form.submit();
      }, 1600);
      setTimeout(() => {
        success.style.animation = "rev-success 0.5s ease-out forwards";
      }, 1000);
    }
  });
};
