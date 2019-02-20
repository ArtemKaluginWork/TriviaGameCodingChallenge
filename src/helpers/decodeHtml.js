export default function decodeHTMLEntities(str) {
  const element = document.createElement('div');
  if (str && typeof str === 'string') {
    element.innerHTML = str
      .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
      .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
    return element.textContent;
  }
  return str;
}
