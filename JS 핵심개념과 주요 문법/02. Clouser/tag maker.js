const tagMaker = tag => content => `<${tag}>${textContent}</${tag}>`
const divMaker = tagMaker('div');
divMaker('hello') // <div>hello</div>
divMaker('chan-min') // <div>chan-min</div>

const anchorMaker = tagMaker('a');
anchorMaker('Bye') // <a>Bye</a>
anchorMaker('chan-wook') // <a>chan-wook</a>