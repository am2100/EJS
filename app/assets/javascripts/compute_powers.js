// A function for computing powers

function power(base, exponent) {

  var result = 1;

  for(var count = 0; count < exponent; count++)
    result *= base;

  return result
}

