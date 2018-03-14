// Scrape data from OpenText summary page for copying and pasting into translations

$('head').append('<link href="https://fonts.googleapis.com/css?family=Montserrat|Palanquin" rel="stylesheet" />');

$('#SearchForm').after(
  "<div style=\"font-family:\'Palanquin\', sans-serif;;font-size:1.3em;\">TITLE: " +
    $('tr.browseRow1 td:nth-child(29)').text() +
  "<br/>" +
  $('tr.browseRow1 td:nth-child(30)').text() +
  "<br/>&nbsp;<br/>OWNER: " +
  $('tr.browseRow1 td:nth-child(14)').text() +
  "<br/>" +
  $('tr.browseRow1 td:nth-child(15)').text() +
  "<br/><p>" +
  $('tr.browseRow1 td:nth-child(32)').html() +
  "</p></div>"
);
