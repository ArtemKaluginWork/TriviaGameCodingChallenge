export default function decodeHTMLEntities(str) {
  let newStr = str
  const element = document.createElement('div');
  if (newStr && typeof newStr === 'string') {
    newStr = newStr.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
    newStr = newStr.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
    element.innerHTML = newStr;
    newStr = element.textContent;
    element.textContent = '';
  }
  return newStr;
}
