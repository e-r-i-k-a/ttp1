// Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"

// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s){
  const detectPattern = /(\d+)\[(\w+)\]/;
  //detect pattern of (num)+openBracket+(str)+closeBracket via regEx statement
  let repeated = s.replace(detectPattern, (match, num, str) => {
    //replace detected pattern with str repeated num times
    return str.repeat(num);
  });
  if (!detectPattern.test(repeated)) {
    //base case - if the string doesn't have any more bracket statements in it, we're done
    return repeated;
  } else {
    //recursively run this function until there are no more bracket statements in the string
    return decodeString(repeated);
  }
}
