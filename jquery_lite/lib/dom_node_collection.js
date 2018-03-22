class DOMNodeCollection {

  constructor(elements) {
    this.elements = elements;
  }

  html(text) {
    if (typeof text === 'undefined') {
      return this.elements[0].innerHTML;
    } else {
      this.elements.forEach((el) => {
        el.innerHTML = text;
      });
    }
  }

  empty() {
    this.html('');
  }

  append(element) {
    let text = element.outerHTML;
    if (typeof element === 'string') {
      text = element;
    }
    if (typeof element === 'object') {
      text = this.appendDOMNodeElements(element.elements);
    }
    this.elements.forEach(el => {
      el.innerHTML += text;
    });
  }

  appendDOMNodeElements(elements) {
    let text = "";
    elements.forEach(el => {
      text += el.outerHTML;
    });

    return text;
  }
}

module.exports = DOMNodeCollection;

// const d = $l('.nav-list')
// d.html('str')
// d.empty()
