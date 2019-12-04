var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

<script> //I found this pop-up example on https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert //
function myFunction() {
  alert("Buenos días — Good morning");
  alert("¿Cómo estás? — How are you?");
}
</script>
