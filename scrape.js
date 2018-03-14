// Scrape data from OpenText summary page for copying and pasting into translations
// by James Rubingh 3/14/2018

//load Palanquin font from google
$('head').append('<link href="https://fonts.googleapis.com/css?family=Montserrat|Palanquin" rel="stylesheet" />');

function ots_show_text(cell_num, get_html = false) {
  element = $('tr.browseRow1 td:nth-child('+cell_num+')')
  return get_html ? element.html() : element.text();
};

$('#SearchForm').after(
  "<div style=\"background-color:#dfe9f0;margin:8px;padding:5px;border:1px solid #B3CBDC;font-family:\'Palanquin\', sans-serif;line-height: 1.5em;font-size:1.3em;\"><b>TITLE</b>:<br/>&nbsp; &nbsp;jp:&nbsp; &nbsp; &nbsp; &nbsp;" +
    ots_show_text(29) +
  "<br/>&nbsp; &nbsp;en:&nbsp; &nbsp; &nbsp; &nbsp; " +
  ots_show_text(30) +
  "<br/>&nbsp;<br/><b>OWNER</b>:<br/>&nbsp; &nbsp;jp:&nbsp; &nbsp; &nbsp; &nbsp;" +
  ots_show_text(14) +
  "<br/>&nbsp; &nbsp;en:&nbsp; &nbsp; &nbsp; &nbsp; " +
  ots_show_text(15) +
  "<br/><p><b>Application No.</b>: &nbsp; " +
  ots_show_text(21).replace('特願','') +
  "<br/><p><b>Related Case Numbers</b>:" +
  ots_show_text(32, true) +
  "</p></div>"
);
