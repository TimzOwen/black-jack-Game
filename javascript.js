console.log("amin No.")
alert("i the file attached?")

function promptUser()
{
  var texty;
  var userName = window.prompt("nter user name");
  if(userName != null || userName !="")
  {
    document.getElementById("userName").innerHTML = userName;
  }
  texty = "hello" + userName;
}
