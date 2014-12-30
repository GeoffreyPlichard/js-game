define({
  random : function(min, max, rounded) {
    rounded = !! rounded;

    if (rounded) {
      return Math.round(Math.random() * (max - min) + min);
    }
    
    return Math.random() * (max - min) + min;
  },

  //Return the number of properties of a litteral object
  count : function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  }
});