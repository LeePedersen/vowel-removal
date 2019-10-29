$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var vowels = ["a","e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var sentence = $("#input").val().split("");

    for (var i = 0; i < sentence.length; i ++) {
      var found = vowels.find(function(element) {
        return element === sentence[i];
      });
      if (found) {
        $("#output").append("-").val();
      } else {
        $("#output").append(sentence[i]).val();
      }
    }
  });
});
