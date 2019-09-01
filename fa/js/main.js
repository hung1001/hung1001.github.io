 $('#list-versions').select2({
  width: '100%'
 });

var last_page = false,
  page = 1,
  listCommit = [];

var _0x4f82 = ['OTZhMzkwZmM0MGU2MWMzMzY5NDBhM2Q2ZGRjMjA5YmY2M2NkZjY5ZA==','NWJiNWIyNzBiMTQ1OTY0OTUzNjM='];(function(_0x50b579,_0x1a4950){var _0x2267d5=function(_0x592d60){while(--_0x592d60){_0x50b579['push'](_0x50b579['shift']());}};_0x2267d5(++_0x1a4950);}(_0x4f82,0xed));var _0x47c1=function(_0x337747,_0x1690f7){_0x337747=_0x337747-0x0;var _0x446071=_0x4f82[_0x337747];if(_0x47c1['tilUYJ']===undefined){(function(){var _0x2cec6d=function(){var _0x32d0dc;try{_0x32d0dc=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x30bb9b){_0x32d0dc=window;}return _0x32d0dc;};var _0x85efbe=_0x2cec6d();var _0x41cf8a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x85efbe['atob']||(_0x85efbe['atob']=function(_0x302b68){var _0x19578e=String(_0x302b68)['replace'](/=+$/,'');for(var _0x48baef=0x0,_0x7dfa5b,_0x9d4d9f,_0x2e859d=0x0,_0x53b61f='';_0x9d4d9f=_0x19578e['charAt'](_0x2e859d++);~_0x9d4d9f&&(_0x7dfa5b=_0x48baef%0x4?_0x7dfa5b*0x40+_0x9d4d9f:_0x9d4d9f,_0x48baef++%0x4)?_0x53b61f+=String['fromCharCode'](0xff&_0x7dfa5b>>(-0x2*_0x48baef&0x6)):0x0){_0x9d4d9f=_0x41cf8a['indexOf'](_0x9d4d9f);}return _0x53b61f;});}());_0x47c1['LmiPjD']=function(_0x4cf02b){var _0x45848a=atob(_0x4cf02b);var _0xe1abd0=[];for(var _0x14c21b=0x0,_0x7b3f73=_0x45848a['length'];_0x14c21b<_0x7b3f73;_0x14c21b++){_0xe1abd0+='%'+('00'+_0x45848a['charCodeAt'](_0x14c21b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xe1abd0);};_0x47c1['wVrmHk']={};_0x47c1['tilUYJ']=!![];}var _0x1f46b6=_0x47c1['wVrmHk'][_0x337747];if(_0x1f46b6===undefined){_0x446071=_0x47c1['LmiPjD'](_0x446071);_0x47c1['wVrmHk'][_0x337747]=_0x446071;}else{_0x446071=_0x1f46b6;}return _0x446071;};const client_id=_0x47c1('0x0');const client_secret=_0x47c1('0x1');

while (!last_page) {
  $.ajax({
    url: `//api.github.com/repos/hung1001/font-awesome/commits?page=${page}&client_id=${client_id}&client_secret=${client_secret}`,
    dataType: "json",
    async: false,
    success: data => {
      if (data.length > 0) {
        data.forEach(child => {
          listCommit.push(child);
        });
        page++;
      } else {
        last_page = true;
      }
    }
  });
}

var listVersions = listCommit.map((arr, index) => {
  var regex = arr.commit.message.match(/\d+(\.\d+)+/g);
  if (regex != null) {
    arr.sha = arr.sha.slice(0, 7);
    arr.ver = regex[0];
  }
  return arr;
});

var removeDuplicate = listVersions.reduce((unique, value) => {
  if (!unique.some(obj => { return obj.ver === value.ver })) {
    unique.push(value);
  }
  return unique;
}, []);

removeDuplicate.forEach((value, index) => {
  value.ver && $('#list-versions').append(`<option value="${value.sha}">v${value.ver}</option>`);
});

var sha = removeDuplicate[0].sha,
  ver = removeDuplicate[0].ver;

$(".ver").text(ver);
$("#a").val(`<link href="//cdn.jsdelivr.net/gh/hung1001/font-awesome@${sha}/css/all.css" rel="stylesheet" type="text/css" />`);
$("#c").val(`<link href="//cdn.staticaly.com/gh/hung1001/font-awesome/${sha}/css/all.css" rel="stylesheet" type="text/css" />`);
$("head").append(`<link href="//cdn.jsdelivr.net/gh/hung1001/font-awesome@${sha}/css/all.css" rel="stylesheet" type="text/css" />`);

$("body").on("select2:select", "#list-versions", function() {
  var _sha = $(this).val();
  $("#a").val(`<link href="//cdn.jsdelivr.net/gh/hung1001/font-awesome@${_sha}/css/all.css" rel="stylesheet" type="text/css" />`);
  $("#c").val(`<link href="//cdn.staticaly.com/gh/hung1001/font-awesome/${_sha}/css/all.css" rel="stylesheet" type="text/css" />`);
});

$("body").on("click", "#b", function() {
  if ($("#a").val().length > 0) {
    $("#a").select();
    document.execCommand("copy");
  }
});

$("body").on("click", "#d", function() {
  if ($("#c").val().length > 0) {
    $("#c").select();
    document.execCommand("copy");
  }
});

console.clear();
