let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let newIndex = document.getElementById("new-index").value;
  let newReadIndex = document.getElementById("new-read-index").value;

  let monthlyIntake = (document.getElementById("monthly-intake").value =
    newReadIndex - newIndex); //
  let amount = monthlyIntake * 10.846; //
  let billValueWithoutTaxes = amount * 0.18713; //
  let taxes = billValueWithoutTaxes * 0.19; //

  document.getElementById("total-amount").value =
    parseFloat(billValueWithoutTaxes) + parseFloat(taxes);
});
