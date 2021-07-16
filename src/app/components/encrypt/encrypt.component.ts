import {Component, OnInit} from '@angular/core';
import {JSEncrypt} from 'jsencrypt';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {

  value: string;
  key: string;
  keySize = '256';
  textEncrypt: any;
  textEncryptHex: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  run(): void {
    const encrypt = new JSEncrypt({default_key_size: this.keySize});
    encrypt.setPublicKey(this.key);
    this.textEncrypt = encrypt.encrypt(btoa(this.value));
    this.textEncryptHex = this.asciiToHexadecimal(this.textEncrypt);
  }

  clear(): void {
    this.textEncrypt = null;
    this.textEncryptHex = null;
    this.value = '';
    this.key = '';
    this.keySize = '256';
  }

  asciiToHexadecimal(value: string): string {
    const hexadecimal = [];
    for (let n = 0, l = value.length; n < l; n++) {
      const hex = Number(value.charCodeAt(n)).toString(16);
      hexadecimal.push(hex);
    }
    return hexadecimal.join('');
  }

}
