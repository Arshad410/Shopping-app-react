export default {
    titlecase: (str: string) =>
      str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.replace(word[0], word[0].toUpperCase());
        })
        .join(" "),
    price: (value: number, code = "INR") =>
      `${code} ${Number(value).toFixed(2)}`,
    discount: (current: number, last: number, decimal = 1) =>
      Math.abs(((Number(current) - Number(last)) / Number(last)) * 100).toFixed(
        decimal
      ) + "%",
  };
  