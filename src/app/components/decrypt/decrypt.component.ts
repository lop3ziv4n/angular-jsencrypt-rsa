import {Component, OnInit} from '@angular/core';
import {JSEncrypt} from 'jsencrypt';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.scss']
})
export class DecryptComponent implements OnInit {

  value: string;
  valueHexadecimal: string;
  key: string;
  keySize = '256';
  textDecrypt: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  run(): void {
    const decrypt = new JSEncrypt({default_key_size: this.keySize});
    decrypt.setPrivateKey(this.key);
    const decrypted = decrypt.decrypt(this.value);
    if (typeof decrypted === 'string') {
      this.textDecrypt = atob(decrypted);
    }
  }

  clear(): void {
    this.textDecrypt = null;
    this.valueHexadecimal = '';
    this.value = '';
    this.key = '';
    this.keySize = '256';
  }

  hexadecimalToASCII(value: string): string {
    const hexadecimal = value.toString();
    let ascii = '';
    for (let n = 0; n < hexadecimal.length; n += 2) {
      ascii += String.fromCharCode(parseInt(hexadecimal.substr(n, 2), 16));
    }
    return ascii;
  }

  convertTextHexadecimal(): void {
    this.value = this.hexadecimalToASCII(this.valueHexadecimal);
  }
}
