module.exports = {
  name: 'sortword',
  description: 'Sort the characters in a word in alphabetical order',
  execute(message, args) {
    console.log('arrival');
    alphabet = createAlphabetArray();
    word = args[0].split('');
    rearrangedWord = [];

    alphabet.forEach(character => {
      word.forEach(letter => {
        if(character === letter) {
          rearrangedWord.push(letter);
        }
      });
    });

    message.channel.send(rearrangedWord.join(""));

    function createAlphabetArray() {
      return 'abcdefghijklmnopqrstuvwxyz'.split('');
    }
  },
};