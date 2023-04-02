function convertText(text: string): string {
  // Removing spaces
  text = text.replace(/\s/g, "");

  // Removing any non-numeric characters
  text = text.replace(/\D/g, "");

  // Returning the converted string
  return text;
}

export { convertText };
