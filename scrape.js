// Scrape data from OpenText summary page for copying and pasting into translations
// by James Rubingh 3/14/2018

//load Palanquin font from google
$('head').append('<link href="https://fonts.googleapis.com/css?family=Montserrat|Palanquin" rel="stylesheet" />');

function repeat(fn, times) {
  var output = '';
      for(var i = 0; i < times; i++) 
        output = fn();
  return output;
}

function spaces() { 
  return "&nbsp "; 
}

function show_related_case_links() {
  var string = "";
  var full = $('tr.browseRow1 td:nth-child(32)');

  $.each($('tr.browseRow1 td:nth-child(32) .simpleResultTabColumn').text().split(/ALP/), function(c, e){
    if (e.length > 1) {
      string += '<p><a style="font-size:1.2em;" href="http://opentext/OTCS/cs.exe?func=search&templateID=1720948&boolean1=or&where1=%28[qlregion+Attr_57105_2]+%22ALP' + e.trim() + '%22%29">ALP' + e.trim() + '</a></p>';
    }
  });

  return string;
}

function ots_show_text(cell_num, get_html = false) {
  element = $('tr.browseRow1 td:nth-child('+cell_num+')')
  return get_html ? element.html() : element.text().trim();
}

$('#SearchForm').after(
  "<div style=\"background-color:#dfe9f0;margin:8px;padding:5px;border:1px solid #B3CBDC;font-family:\'Palanquin\', sans-serif;line-height: 1.5em;font-size:1.3em;\"><b>TITLE</b>:<br/>" + repeat(spaces, 2) + "jp:" + repeat(spaces, 4) + 
    ots_show_text(29) +
  "<br/>" + repeat(spaces, 2) + "en:" + repeat(spaces, 4) +
  ots_show_text(30) +
  "<br/>" + repeat(spaces, 2) + "<br/><b>OWNER</b>:<br/>" + repeat(spaces, 2) + "jp:" + repeat(spaces, 4) + 
  ots_show_text(14) +
  "<br/>" + repeat(spaces, 2) + "en:" + repeat(spaces, 4) + 
  ots_show_text(15) +
  "<br/><p><b>Application No.</b>: &nbsp; " + ots_show_text(21).replace('特願','') + ' | <a href="http://wlang.wrive.com/en/search/'+ ots_show_text(3).replace('ALP','') + '/' + ots_show_text(21).replace('特願','') + '">WLANG Results </a>' +
  "<br/><p><b>Related Case Numbers</b>:" +
  show_related_case_links() +
  "</p></div>"
); //.after

(function() {
    var el = document.createElement("div"),
        b = document.getElementsByTagName("body")[0],
        otherlib = !1,
        msg = "";
    el.style.position = "fixed";

    function showMsg() {
        var txt = document.createTextNode(msg);
        el.appendChild(txt), b.appendChild(el), window.setTimeout(function() {
            txt = null, typeof jQuery == "undefined" ? b.removeChild(el) : (jQuery(el).fadeOut("slow", function() {
                jQuery(this).remove()
            }), otherlib && (window.$jq = jQuery.noConflict()))
        }, 2500)
    }
    if (typeof jQuery != "undefined") return msg = "This page already using jQuery v" + jQuery.fn.jquery, showMsg();
    typeof $ == "function" && (otherlib = !0);

    function getScript(url, success) {
        var script = document.createElement("script");
        script.src = url;
        var head = document.getElementsByTagName("head")[0],
            done = !1;
        script.onload = script.onreadystatechange = function() {
            !done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (done = !0, success(), script.onload = script.onreadystatechange = null, head.removeChild(script))
        }, head.appendChild(script)
    }
    getScript("//code.jquery.com/jquery.min.js", function() {
        return typeof jQuery == "undefined" ? msg = "Sorry, but jQuery was not able to load" : (msg = "This page is now jQuerified with v" + jQuery.fn.jquery, otherlib && (msg += " and noConflict(). Use $jq(), not $().")), showMsg()
    })
})();
$('#gb').remove();
$('#gba').remove();
$('#gt-appbar').remove();
$('#gt-ft').remove();
$('#gt-ft-res').remove();
