function addElement(){
    const element = document.createElement("p");
    element.innerText = "JavaScriptはスクリプト言語です";
    const parentElement = document.getElementsByTagName("div")[0];
    const text = document.createTextNode("JavaScriptはスクリプト言語です");
    const target = document.getElementsByTagName("p")[0];
    element.appendChild(text);
    parentElement.appendChild(text);
};

window.onload = addElement;
function removeElement() {
    const parentElement = document.getElementsByTagName("div")[0];
    const target = document.getElementsByTagName("h1")[0];
    parentElement.removeChild(target);
  };
  
  window.onload = removeElement;
  function addLink() {
    const element = document.createElement("a");
    element.setAttribute("href", "https://diveintocode.jp/");
    element.innerText = "DIVE INTO CODE";
    const parentElement = document.getElementsByTagName("div")[0];
    parentElement.appendChild(element);
  };
  
  window.onload = addLink;