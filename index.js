class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    debugger
    let uncap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let allWords = string.split(' ')

    let mappedWords = allWords.map (word => {
      if (!uncap.includes(word)) {
      return this.capitalize(word);
      } else {
        return word;
      }
    })

    // console.log(mappedWords.join(' '));
    return this.capitalize(mappedWords.join(' '));
  }
}