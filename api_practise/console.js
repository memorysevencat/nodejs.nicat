//console.log('hello world');
//console.log('hello %s','world');
//console.error(new Error('Whoops,something bad happend'));
//const name='nicat';
//console.warn(`Danger ${name}!`);

const crypto=require('crypto');
const secret='abcdefg';
const hash=crypto.createHmac('sha256',secret).update('nicat').digest('hex');
console.log(hash);
