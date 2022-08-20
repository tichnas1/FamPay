export default function openLink(url, newTab) {
  window.open(url, newTab ? '_blank' : '_self');
}
