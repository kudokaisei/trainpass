$(function(){
  $('#price_calc').on('input', function(){   //リアルタイムで表示したいのでinputを使う｡入力の度にイベントが発火するようになる｡
    var data1 = $('.price_box').val(); // val()でフォームのvalueを取得(数値)
    var data2 = $('.price_box2').val(); // val()でフォームのvalueを取得(数値)
    var data3 = (data2 * 2) // val()でフォームのvalueを取得(数値)
    var num = Math.ceil(data1 / data3) // val()でフォームのvalueを取得(数値)
    $('#price').val(num)
  })
  $('#price_calc2').on('input', function(){   //リアルタイムで表示したいのでinputを使う｡入力の度にイベントが発火するようになる｡
    var data1 = $('.price_box').val(); // val()でフォームのvalueを取得(数値)
    var data2 = $('.price_box2').val(); // val()でフォームのvalueを取得(数値)
    var data3 = (data2 * 2) // val()でフォームのvalueを取得(数値)
    var num = Math.ceil(data1 / data3) // val()でフォームのvalueを取得(数値)
    $('#price').val(num)
  })
});