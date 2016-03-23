import ReactDOM from 'react-dom'

const sleep = (ms) => new Promise(r => setTimeout(r,ms));

async function start() {
  console.log('before');
  await sleep(5000);
  console.log('after');
  
  ReactDOM.render(
    <div>There can be only one!!</div>,
    document.getElementById('app')
  )
}

document.addEventListener("DOMContentLoaded", start);
