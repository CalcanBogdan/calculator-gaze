let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let indexNou = document.getElementById("index-nou").value;
  let indexNouCitit = document.getElementById("index-nou-citit").value;

  let consumLunar = (document.getElementById("consum-lunar").value =
    indexNouCitit - indexNou); //
  let unu = consumLunar * 10.846; //parseFloat(doi) + parseFloat(tva);
  let doi = unu * 0.18713; //241,52382561999997
  let tva = doi * 0.19; //

  document.getElementById("total-suma").value = parseFloat(doi) + parseFloat(tva);
});
