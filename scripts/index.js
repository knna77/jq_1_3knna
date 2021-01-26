//Práctica 2
//----------

$(document).ready(function () {
  $('#selected-plays').css({ display: 'flex', 'flex-flow': 'row' });
  $('#selected-plays ul').css('background-color', 'grey');

  $('ul#selected-plays > li').addClass('may');
  // console.log($('.may::first-letter').css('background-color', 'blue'));

  $('.may::first-letter').css('font-size', '200%');

  $("a[href^='mailto']").append("<img src='images/email.png' />");
  $("a[href$='pdf']").append("<img src='images/pdf.png' />");

  $("a[href^='http']")
    .add("a[href*='http']")
    .append("<img src='images/external.png' />");

  $('#container table:nth-child(4) tr:even').css('background-color', 'grey');
  $('#container table:last-child tr:even').css('background-color', 'grey');

  $("ul li ul li:contains('Henry'),td:contains('Henry')").addClass('highlight');
  $('.highlight').css('font-weight', 'bold');
  //Práctica 3
  //----------

  $('.highlight').next('td').css('font-weight', 'bold');

  $("#container table:nth-child(4) tr td:contains('et')")
    .next('td')
    .css('font-weight', 'bold');
  $("#container table:nth-child(4) tr td:contains('et') ~ td").css(
    'font-weight',
    'bold'
  );
});
