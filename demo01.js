function getSomething () {
  return 'something'
}

// async异步的方法
async function testAsync() {
  return 'hello, wikiHong:testAsync'
}

async function textAwait() {
  const v1 = await getSomething()
  const v2 = await testAsync()
  console.log(v1, v2)
}

const result = testAsync();
console.log(result);
const result2 = textAwait();
console.log(result2);