// Sort the letters in the string s by the order they occur in the string t.You can assume t will not have repetitive characters.For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

function sortByStrings (str1, str2) {
  const sortByIdx = (a, b) => str2.indexOf(a) - str2.indexOf(b)
  //compare function that sorts in ascending str2.indexOf value
  return str1.split('').sort(sortByIdx).join('');
  //split str1 into an array of letters, run the sort, and re-join
}
