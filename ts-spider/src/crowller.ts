// ts -> .d.ts -> js

import superagent from 'superagent'; 

class Crowller {
  private secret = 'secretKey';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

  private rawHtml = '';

  async getRawHtml() {
    const result = await superagent.get(this.url)
    this.rawHtml = result.text;
    console.log(this.rawHtml);
  }

  constructor() {
    this.getRawHtml();
  }

}

const crowller = new Crowller()
