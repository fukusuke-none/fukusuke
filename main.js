'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () =>{
    // const results = ['うんこ', 'ちんこ', 'まんこ', 'gato'];
    // const results = ['うんこ', 'ちんこ', 'まんこ', 'gato'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05){
      btn.textContent = 'unko';
    } else if (n < 0.2) {
      btn.textContent = 'tinko';
    } else {
      btn.textContent = 'manko';
    }
  });
}