$(document).ready(function(){
  var number = "";
  var newnumber = "";
  var operator = "";
  var totaldiv = $("#total");
  totaldiv.text("0");
  $("#numbers a").not("#clear,#clearall").click(function(){
    number += $(this).text();
    totaldiv.text(number);
    testNumLength(number);
  });
  $("#operators a").not("#equals").click(function(){
    operator = $(this).text();
    newnumber = number;
    number = "";
    totaldiv.text("0");
  });
  $("#clear,#clearall").click(function(){
    number = "";
    totaldiv.text("0");
    if ($(this).attr("id") === "clearall") {
      newnumber = "";
    }
  });
  $("#equals").click(function(){
    if (operator === "+"){
      number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
    } else if (operator === "-"){
      number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
    } else if (operator === "÷"){
      number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
    } else if (operator === "×"){
      number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
    }
    totaldiv.text(number);
    testNumLength(number);
    number = "";
    newnumber = "";
  });
});
