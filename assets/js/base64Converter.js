//took from stackpost
//https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript

function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      document.getElementById("result").innerHTML = reader.result
    }
    reader.readAsDataURL(file);
  }