function makeKyary() {
  var orgName = document.getElementById('name').value;
  
  if(orgName.length < 4) {
    var msg = '・お名前が4文字を満たしておりません';
    document.getElementById('msg').innerHTML = msg;
  } else {
    var devName = orgName.split('');
    var kyaryName = '';
    for (var i = 0; i < 4; i++) {
      if (i == 0) {
        kyaryName += devName[i] + 'ゃ';
      } else if (i == 1) {
        kyaryName += devName[i] + '-';
      } else if (i == 2) {
        kyaryName += devName[i] + devName[i + 1] + 'ゅ';
      } else {
        kyaryName += devName[i - 1] + devName[i] + 'ゅ';
      }
    }
    var msg = '・あなたの新しいお名前は 「' + kyaryName + '」';
    document.getElementById('msg').innerHTML = msg;
  }
}