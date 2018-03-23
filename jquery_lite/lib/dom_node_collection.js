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

  attr(attrName) {
    return this.elements[0][attrName];
  }

  setAttr(attrName, val) {
    this.elements.forEach(el => {
      if (typeof el[attrName] === 'undefined') {
        el[attrName] = val;
        el.setAttribute(attrName, val);
      } else {
        const newval = el[attrName] + ` ${val}`;
        el[attrName] = newval;
        el.setAttribute(attrName, newval);
      }
    });
  }

  addClass(name) {
    this.setAttr('class', name);
  }

  removeClass(name) {
    let classNames = this.attr('class');
    let arr = classNames.split(" ");
    if (arr.includes(name)) {
      const idx = arr.indexOf(name);
      arr.splice(idx, 1);
    } else {
      console.log(`${name} doesn't exist!`);
      return;
    }

    classNames = arr.join(" ");
    this.elements.forEach(el => {
      el['class'] = classNames;
      if (classNames === "") {
        el.removeAttribute('class');
        el['class'] = undefined;
      } else {
      el.setAttribute('class', classNames);
    }
    });
  }

  children() {
    const arr = this.elements;
    let result = [];

    arr.forEach(el => {
      result = result.concat(el.children);
    });

    return new DOMNodeCollection(result);
  }

  parent() {
    return this.elements[0].parentNode;
  }

  find(selector) {
    let result = [];
    this.elements.forEach(el => {
      const list = el.querySelectorAll(selector);
      const arr = Array.prototype.slice.call(list);
      result = result.concat(arr);
    });
    return new DOMNodeCollection(result);
  }

  // remove() {
  //   let arr = this.elements.slice();
  //   arr.forEach(el => {
  //     const temp = new DOMNodeCollection(el);
  //     temp.empty();
  //   });
  //   this.elements = [];
  // }
}

module.exports = DOMNodeCollection;

// const d = $l('.nav-list')
// d.html('str')
// d.empty()
