class Banner {
  constructor(message) {
    this.message = message;
    this.messageLen = message.length;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }
  horizontalRule() {
    return `+-${'-'.repeat(this.messageLen)}-+`;
  }
  emptyLine() {
    return `| ${' '.repeat(this.messageLen)} |`;
  }
  messageLine() {
    return `| ${this.message} |`;
  }
}


// test cases:
let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

let banner2 = new Banner('');
banner2.displayBanner();

/*
+--+
|  |
|  |
|  |
+--+
*/


The constructor