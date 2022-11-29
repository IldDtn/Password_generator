// Array of special characters to be included in password
var arr4 = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var arr3 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var arr2 = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  
  // Function to prompt user for password options
  var passwordLength = 0
  var lowercaseChar = false
  var uppercaseChar = false
  var numericChar = false
  var specialChar = false
  
  function getPasswordOptions() {
     passwordLength = prompt('Please confirm number of characters - must be at least 10 characters but no more than 64');
     while (passwordLength < 10 || passwordLength > 64) {
      alert('Password must be between 10 and 64 characters ');
      passwordLength = prompt('Please confirm number of characters - must be at least 10 characters but no more than 64');
    }
     lowercaseChar = confirm('Click Ok if you would you like to have lowercase characters?');
     uppercaseChar = confirm('Click Ok if youWould you like to have uppercase characters?');
     numericChar = confirm('Click Ok if youWould you like to have numeric characters?');
     specialChar = confirm('Click Ok if youWould you like to have special characters?');
     
  
     while (lowercaseChar === false && uppercaseChar === false && numericChar === false && specialChar === false) {
         alert('you need to pick at least one category');
         lowercaseChar = confirm('Click Ok if you would you like to have lowercase characters?');
         uppercaseChar = confirm('Click Ok if youWould you like to have uppercase characters?');
         numericChar = confirm('Click Ok if youWould you like to have numeric characters?');
         specialChar = confirm('Click Ok if youWould you like to have special characters?');
    }
    return passwordLength, lowercaseChar, uppercaseChar, numericChar, specialChar;
  }
  getPasswordOptions();
  // passwordLength needs to be converted into number 
  plength = Number(passwordLength);
  // create user choice as an array - need to know what is what
  var Userchoice = [plength,lowercaseChar, uppercaseChar, numericChar, specialChar];
  console.log(Userchoice);
  var UserchoiceObject = { 
  passLength: `${plength}`,
  lowercaseChara: `${lowercaseChar}`,
  uppercaseChara: `${uppercaseChar}`,
  numericChara: `${numericChar}`,
  specialChara: `${specialChar}`
  };
  console.log(UserchoiceObject);
  
  
  var randominputlower = []
  if (UserchoiceObject.lowercaseChara === "true") {
    randominputlower.push(lowerCasedCharacters)
  };
  console.log(randominputlower);
  
  var randominputupper = []
  if (UserchoiceObject.uppercaseChara === "true") {
    randominputupper.push(arr2)
  };
  console.log(randominputupper);
  
  var randominputnum = []
  if (UserchoiceObject.numericChara === "true") {
    randominputnum.push(arr3)
  };
  console.log(randominputnum);
  
  var randominputspecial = []
  if (UserchoiceObject.specialChara === "true") {
    randominputspecial.push(arr4)
  };
  console.log(randominputspecial);
  
  // I will end up with array from which below function will pull
  //create an array that includes chosen options // if concat does not guarantee it will pick one from each
  
  //function getRandom(list1, list2, list3, list4) {
  
    // if list empty continue, create a loop that loops through 4 lists and pick number from each upto plengths
     var finalpassword = ''
    for (var j = 0; j < plength; j++ ) {}
    randomoutput1 = randominputlower[Math.floor(Math.random() * randominputlower.length)];
    finalpassword.push(randomoutput1);
    randomoutput2 =randominputupper[Math.floor(Math.random() * randominputupper.length)];
    finalpassword.push(randomoutput2);
    randomoutput3 =randominputnum[Math.floor(Math.random() * randominputnum.length)];
    finalpassword.push(randomoutput3);
    randomoutput4 =randominputspecial[Math.floor(Math.random() * randominputspecial.length)];
    finalpassword.push(randomoutput4);
  
  
    console.log(finalpassword);
    //repeat result as many times as required.
  
  // getRandom (randominputlower, randominputupper, randominputnum, randominputspecial);
  // // console.log(getRandom(randominputlower, randominputupper, randominputnum, randominputspecial))
  // function generatePassword(Userchoice) {
  //   var myPassword = ''
  //   //filter out false values - not going to need to pull data from them 
  //   var filteredResult = Userchoice.filter(item => !!item);
  //   for (var i = 0; i < plength; i++) {
  //       getRandom (filteredResult)
  //   }
    //llop over plength
    // call generator function for each type (previous)
  //   // add final pw and return 
  // }
  // generatePassword(Userchoice);
  // // gonna need length pLength plus values for 4 categories true or false
  
  //   // run loop x amount of times returning random
  //   // llop over the array we pass in, which comes from user input as many times as password length
  // // return password up 
  // // Get references to the #generate element
  // var generateBtn = document.querySelector('#generate');
  
  // // Write password to the #password input
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector('#password');
  
  //   passwordText.value = password;
  // }
  
  // // Add event listener to generate button
  // generateBtn.addEventListener('click', writePassword);