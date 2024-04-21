function capitalizeFirstWord(text) {
  const words = text.match(/[A-Z]?[a-z]+/g) || [];

  const transformedWords = words.map((word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  });

  return transformedWords.join(" ");
}

export default capitalizeFirstWord;
