/*
Link - https://exercism.org/tracks/javascript/exercises/word-count
*/

//THIS IS NOT COMPLETED

export const countWords = (phrase) => {
  //Creating the object to save the values
  const wordsCounts = {}

  //Turning the phrase into array
  const wordArr = phrase.split(/,| |\n/)

  //Removing the symbols, spaces, empty values, etc.
  const cleanArr = wordArr.map(word => word.replace(/[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g,"")).filter(word => word)

  //For each word inside the array, compare with another interation of the same array
  for (let words of cleanArr){
    let count = 0; //Init the counter
    for(let compare of cleanArr){
      if(words.toLowerCase() == compare.toLowerCase()){
        count++
      }
    }

    //Saving just the lower case
    wordsCounts[words.toLowerCase()] = count;
  }

  console.log(wordsCounts)

  return wordsCounts
};
