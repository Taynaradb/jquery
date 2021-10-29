
$('#btn1').click(function(){
  var jan = parseInt($('#jan').text());
  var fev = parseInt($('#fev').text());
  var mar = parseInt($('#mar').text());

  var total = jan + fev + mar;
  
  $('#total').html('<span class="fw-bold">'+ total +'</span>');
});

$('#btn2').click(function(){
  var his = parseFloat($('#his').text());
  var math = parseFloat($('#math').text());
  var sci = parseFloat($('#sci').text());
  var geo = parseFloat($('#geo').text());

  var median = (his + math + sci + geo)/4;
  
  $('#median').html('<span class="fw-bold">'+ median.toPrecision(1) +'</span>');
});

$('#btn3').click(function(){
  var first = $('#first').val();
  var last = $('#last').val();
  var profession = $('#profession').val();
  var bg = $("input[type=radio][name=bg]:checked").val();

  $('#fristname').html('<span style="font-size:25px" class="fw-bold">'+ first +'</span>');
  $('#lastname').html('<span style="font-size:25px" class="fw-bold">'+ last +'</span>');
  $('#prof').html('<span style="font-size:20px" class="fw-bold">'+ profession +'</span>');
  $(".card").css("background-color",bg);
});

$('#btn3').click(function(){
  var first = $('#first').val();
  var last = $('#last').val();
  var profession = $('#profession').val();
  var bg = $("input[type=radio][name=bg]:checked").val();

  $('#fristname').html('<span style="font-size:25px" class="fw-bold">'+ first +'</span>');
  $('#lastname').html('<span style="font-size:25px" class="fw-bold">'+ last +'</span>');
  $('#prof').html('<span style="font-size:20px" class="fw-bold">'+ profession +'</span>');
  $(".card").css("background-color",bg);
});


var firstn = parseFloat($('#first').text());
var secondn = parseFloat($('#second').text());

$('#add, #sub, #mul, #div').click(function () {
  var firstn = parseInt($('input[name=first]').val());
  var secondn = parseInt($('input[name=second]').val());

  if (this.id == 'add') {
    var resultado = firstn + secondn;
  }else if (this.id == 'sub') {
    var resultado = firstn - secondn;
  }else if (this.id == 'mul') {
    var resultado = firstn * secondn;
  }else if (this.id == 'div') {
    var resultado = firstn / secondn;
  }

  $('#resultado').html('<div class="mt-5 alert alert-success" role="alert">'+ resultado +'</div>');
});

$('#btn5').click(function(){
  var age = $('input[name=age]').val()
  
  if(age >= 65){
    var resultado = "Você já pode se aposentar!&#128516"
    var alert = '<div class="mt-5 alert alert-success" role="alert">'+ resultado +'</div>';

  }else{
    var resultado = "Você ainda não pode se aposentar &#128549";
    var alert = '<div class="mt-5 alert alert-danger" role="alert">'+ resultado +'</div>';
  }

  $('#aposenta').html(alert);

});