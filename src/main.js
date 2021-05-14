const div = dom.create("<div>newDiv</div>")
console.log(div)

const tt = dom.after(test,div)

dom.empty(empty)

dom.attr(test,'class','麻辣')
let dc = dom.attr(test,'class')
console.log(dc)

dom.text(divx,'fuck')

dom.style(divx,{border:'1px solid red',color: 'blue'})

dom.class.add(divx,'red')
dom.class.remove(divx,'red')
console.log(dom.class.has(divx,'red'))

const fn = ()=>{
    console.log('点击了')
}
dom.on(divx,'click',fn)

const divx2 = dom.find('#divx2')[0]
console.log(divx2)
const divz3 = dom.find('.red',divx2)[0]
console.log(divz3)

console.log(dom.siblings(dom.find('#s2')[0]))

console.log(dom.index(s2))