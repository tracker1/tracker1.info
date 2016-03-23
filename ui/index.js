
load();

const sleep = (ms) => new Promise(r => setTimeout(r,ms));

async function load() {
  console.log('before');
  await sleep(5000);
  console.log('after');
}