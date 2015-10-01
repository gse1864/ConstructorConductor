//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
String.prototype.reverseIt = function() {
    var temp = [];
    for (var i = 0; i < this.length + 1; i++) {
        temp.push(this.charAt(this.length - i));
    }
    return temp.join("");
};

var myString = "hello";
myString.reverseIt();