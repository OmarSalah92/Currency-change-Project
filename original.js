let mySelect1 = document.querySelector(".select1");
let mySelect2 = document.querySelector(".select2");
let myDiv1 = document.querySelector(".firstHalf");
let myBtn = document.querySelector(".btn");

let myInput1 = document.querySelector(".input1");

fetch(`currency.json`)
  .then((e) => {
    return e.json();
  })
  .then((res) => {
    let x = Object.keys(res);

    x.map((e) => {
      let myResult = ` <option class="option1" selected>${e}</option>`;
      mySelect1.innerHTML += myResult;
      mySelect2.innerHTML += myResult;
    });
    mySelect1.addEventListener("change", () => {
      fetch(
        `https://v6.exchangerate-api.com/v6/3de26270bde642c2c4e03869/latest/${mySelect1.value}`
      )
        .then((e) => e.json())
        .then((res) => {
          let myInput1 = document.querySelector(".input1");
          console.log(res.conversion_rates);

          let p = res.conversion_rates[mySelect2.value] * myInput1.value;

          console.log(p);
          myBtn.addEventListener("click", (n) => {
            n.preventDefault();

            let myDiv2 = document.querySelector(".result");
            myDiv2.innerHTML = `<h4> ${
              myInput1.value * res.conversion_rates[mySelect1.value]
            } ${mySelect1.value}=${(
              res.conversion_rates[mySelect2.value] * myInput1.value
            ).toFixed(2)} ${mySelect2.value}</h4>`;
          });
        });

      mySelect2.addEventListener("change", () => {
        fetch(
          `https://v6.exchangerate-api.com/v6/3de26270bde642c2c4e03869/latest/${mySelect2.value} `
        )
          .then((e) => e.json())
          .then((res) => {
            console.log(mySelect1.value);
            console.log(mySelect2.value);
            console.log(myInput1.value);

            // let myTest = `<h4>${myInput1.value} * ${mySelect1.value[conversion_rates]} = ${mySelect2.value[conversion_rates]} </h4>`
            // myDiv2.innerHTML = myTest
          });
      });
    });
  });

fetch(`data.json`)
  .then((e) => e.json())
  .then((res) => {});
