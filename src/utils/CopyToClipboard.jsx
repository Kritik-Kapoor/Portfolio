export const CopyToClipboard = (text) => {
  return navigator.clipboard.writeText(text);
};
