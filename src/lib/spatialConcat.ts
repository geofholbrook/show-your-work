export function spatialConcat(...strings: string[]): string {
  function pairwise(str1: string, str2: string) {
    const lastLine1 = str1.split("\n").pop()!;
    const firstLine2 = str2.split("\n").shift();
    const linesToIndent = str2.split("\n").slice(1);
    const spaces = " ".repeat(lastLine1.length);

    return (
      str1 +
      [firstLine2, ...linesToIndent.map((line) => spaces + line)].join("\n")
    );
  }

  return strings.reduce(pairwise);
}
