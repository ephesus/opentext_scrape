// Scrape data from OpenText summary page for copying and pasting into translations
// by James Rubingh 3/14/2018

$('head').append('<link href="https://fonts.googleapis.com/css?family=Montserrat|Palanquin" rel="stylesheet" />');

$('#SearchForm').after(
  "<div style=\"background-color:#dfe9f0;margin:8px;padding:5px;border:1px solid #B3CBDC;font-family:\'Palanquin\', sans-serif;line-height: 1.5em;font-size:1.3em;\"><b>TITLE</b>:<br/>&nbsp; &nbsp;jp:&nbsp; &nbsp; &nbsp; &nbsp;" +
    $('tr.browseRow1 td:nth-child(29)').text() +
  "<br/>&nbsp; &nbsp;en:&nbsp; &nbsp; &nbsp; &nbsp; " +
  $('tr.browseRow1 td:nth-child(30)').text() +
  "<br/>&nbsp;<br/><b>OWNER</b>:<br/>&nbsp; &nbsp;jp:&nbsp; &nbsp; &nbsp; &nbsp;" +
  $('tr.browseRow1 td:nth-child(14)').text() +
  "<br/>&nbsp; &nbsp;en:&nbsp; &nbsp; &nbsp; &nbsp; " +
  $('tr.browseRow1 td:nth-child(15)').text() +
  "<br/><p><b>Application No.</b>: &nbsp; " +
  $('tr.browseRow1 td:nth-child(21)').text().replace('特願','') +
  "<br/><p><b>Related Case Numbers</b>:" +
  $('tr.browseRow1 td:nth-child(32)').html() +
  "</p></div>"
);
