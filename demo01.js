function takeLongTime() {
  return new Promise(resolve => {
    setTimeout(() => resolve('LongTimeValue'), 4000)
  })
}

async function test(){
 const v = await takeLongTime();
 console.log(v);
}

test();
