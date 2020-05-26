module.exports = {
  name: "sortwords",
  description: "Sort words in alphabetical order",
  execute(message, args) {
    const alphabet = createAlphabetArray();
    let orderedArgs = [];

    alphabet.forEach(character => {
      args.forEach(argument => {
        if(argument.substring(0, 1) === character) {
          orderedArgs.push(argument);
        }
      });
    });

    message.channel.send(orderedArgs.join(" "));

    function createAlphabetArray() {
      return 'abcdefghijklmnopqrstuvwxyzåäö'.split('');
    }
  },
};