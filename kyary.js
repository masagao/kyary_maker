function makeKyary() {
  var orgName = document.getElementById('name').value;
  
  if(orgName.length < 4) {
    var msg = '・お名前が4文字を満たしておりません';
    document.getElementById('msg').innerHTML = msg;
  } else {
    var devName = orgName.split('');
    var kyaryName = devName[0] + 'ゃ' + devName[1] + '-' + devName[2] + devName[3] + 'ゅ' + devName[2] + devName[3] + 'ゅ';
    var msg = '・あなたの新しいお名前は 「' + kyaryName + '」';
    document.getElementById('msg').innerHTML = msg;
  }
}