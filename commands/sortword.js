module.exports = {
  name: 'sortword',
  description: 'Sort the characters in a word in alphabetical order',
  execute(message, args) {
    const alphabet = createAlphabetArray();
    const word = args[0].split('');
    let rearrangedWord = [];

    alphabet.forEach(character => {
      word.forEach(letter => {
        if(character === letter) {
          rearrangedWord.push(letter);
        }
      });
    });

    message.channel.send(rearrangedWord.join(""));

    function createAlphabetArray() {
      return 'abcdefghijklmnopqrstuvwxyzåäö'.split('');
    }
  },
};