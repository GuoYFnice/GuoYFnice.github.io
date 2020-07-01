(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{510:function(t,v,_){"use strict";_.r(v);var a=_(4),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"知识整理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#知识整理"}},[t._v("#")]),t._v(" 知识整理")]),t._v(" "),_("blockquote",[_("p",[t._v("对自己的前端知识进行一个梳理")])]),t._v(" "),_("h2",{attrs:{id:"javascript"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),_("h3",{attrs:{id:"数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),_("h4",{attrs:{id:"_7种简单的数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7种简单的数据类型"}},[t._v("#")]),t._v(" 7种简单的数据类型")]),t._v(" "),_("ul",[_("li",[t._v("Undefined")]),t._v(" "),_("li",[t._v("Null")]),t._v(" "),_("li",[t._v("Boolean")]),t._v(" "),_("li",[t._v("Number")]),t._v(" "),_("li",[t._v("String")]),t._v(" "),_("li",[t._v("Symbol")]),t._v(" "),_("li",[t._v("BigInt (ES10 草案)")])]),t._v(" "),_("h4",{attrs:{id:"_1种复杂数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1种复杂数据类型"}},[t._v("#")]),t._v(" 1种复杂数据类型")]),t._v(" "),_("ul",[_("li",[t._v("Object（Function 是 Object 的子类，即继承于 Object）")])]),t._v(" "),_("h4",{attrs:{id:"判断数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#判断数据类型"}},[t._v("#")]),t._v(" 判断数据类型")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("Object.prototype.toString.call()可以鉴别所有的类型  结果为[object ,object ],[object Undefined]")])]),t._v(" "),_("li",[_("p",[t._v("instanceof")]),t._v(" "),_("p",[_("code",[t._v("instanceof")]),t._v("  的内部机制是通过判断对象的原型链中是不是能找到类型的 "),_("code",[t._v("prototype")]),t._v("。")]),t._v(" "),_("p",[t._v("使用 "),_("code",[t._v("instanceof")]),t._v("判断一个对象是否为数组，"),_("code",[t._v("instanceof")]),t._v(" 会判断这个对象的原型链上是否会找到对应的 "),_("code",[t._v("Array")]),t._v(" 的原型，找到返回 "),_("code",[t._v("true")]),t._v("，否则返回 "),_("code",[t._v("false")]),t._v("。")]),t._v(" "),_("p",[t._v("但 "),_("code",[t._v("instanceof")]),t._v(" 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true")])]),t._v(" "),_("li",[_("p",[t._v("typeof")]),t._v(" "),_("p",[t._v("只对基本类型有用。但不包括null（因为js的所有对象在底层都是二进制的，js把前三位为0的表示为object，null全为0）")]),t._v(" "),_("ul",[_("li",[t._v("对于基本类型，除 null 以外，均可以返回正确的结果。")]),t._v(" "),_("li",[t._v("对于引用类型，除 function 以外，一律返回 object 类型。")]),t._v(" "),_("li",[t._v("对于 null ，返回 object 类型。")]),t._v(" "),_("li",[t._v("对于 function 返回  function 类型。")])])])]),t._v(" "),_("p",[t._v("基本类型存放在栈中。对象数据类型存放在堆中。")]),t._v(" "),_("p",[t._v("对于"),_("code",[t._v("赋值")]),t._v("操作，原始类型的数据直接完整地复制变量值，对象数据类型的数据则是复制引用地址。")]),t._v(" "),_("h4",{attrs:{id:"深拷贝-浅拷贝"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝-浅拷贝"}},[t._v("#")]),t._v(" 深拷贝|浅拷贝")]),t._v(" "),_("p",[t._v("当变量复制引用类型值的时候，同样和基本类型值一样会将变量的值复制到新变量上，不同的是对于变量的值，它是一个指针，指向存储在堆内存中的对象（JS规定放在堆内存中的对象无法直接访问，必须要访问这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，所以引用类型的值是按引用访问）")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("浅拷贝")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("Object.assign")]),t._v(" "),_("p",[t._v("ES6中拷贝对象的方法，接受的第一个参数是拷贝的目标，剩下的参数是拷贝的源对象（可以是多个）")])]),t._v(" "),_("li",[_("p",[t._v("拓展运算符")])]),t._v(" "),_("li",[_("p",[t._v("Array.prototype.slice")])]),t._v(" "),_("li",[_("p",[t._v("Array.prototype.concat")])])])]),t._v(" "),_("li",[_("p",[t._v("深拷贝")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("JSON.parse（JSON.stringify）")]),t._v(" "),_("p",[t._v("如果obj里面有时间对象，时间将只是字符串的形式。而不是时间对象；")]),t._v(" "),_("p",[t._v("如果obj里有RegExp、Error对象，则序列化的结果将只得到空对象；")]),t._v(" "),_("p",[t._v("如果obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失；")]),t._v(" "),_("p",[t._v("如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null")])]),t._v(" "),_("li",[_("p",[t._v("递归")]),t._v(" "),_("p",[t._v("递归地狱回调可以通过return的方法解决")])])])])]),t._v(" "),_("h4",{attrs:{id:"undefined与null的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#undefined与null的区别"}},[t._v("#")]),t._v(" undefined与null的区别")]),t._v(" "),_("p",[_("code",[t._v("undefined")]),t._v(" 是 "),_("code",[t._v("Undefined")]),t._v(" 类型的值，表示未定义。任何变量在赋值前都是 "),_("code",[t._v("Undefined")]),t._v(" 类型，值为 "),_("code",[t._v("undefined")]),t._v(" 。由于"),_("code",[t._v("undefined")]),t._v(" 只是全局作用域下的一个属性（变量），并非关键字。"),_("code",[t._v("undefined")]),t._v(" "),_("strong",[t._v("属性的属性特性")]),t._v(" ,而在函数作用域内是可以随意改写 "),_("code",[t._v("undefined")]),t._v(" 的。这也是建议使用 "),_("strong",[_("code",[t._v("void 0")]),t._v(" 来表示 "),_("code",[t._v("undefined")]),t._v(" 的来源")])]),t._v(" "),_("p",[_("code",[t._v("Null")]),t._v(" 类型也只有一个值，就是 "),_("code",[t._v("null")]),t._v("，它的语义表示空值，与 "),_("code",[t._v("undefined")]),t._v(" 不同，"),_("code",[t._v("null")]),t._v(" 是 "),_("code",[t._v("JavaScript")]),t._v(" 关键字，所以在任何代码中，你都可以放心用 "),_("code",[t._v("null")]),t._v(" 关键字来获取 "),_("code",[t._v("null")]),t._v(" 值。")]),t._v(" "),_("h4",{attrs:{id:"隐式转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#隐式转换"}},[t._v("#")]),t._v(" 隐式转换")]),t._v(" "),_("p",[t._v("涉及最多的两个操作符+ ==")]),t._v(" "),_("p",[t._v("- * / 这些运算符只会针对number类型，故转换的结果只能是转换成number类型")]),t._v(" "),_("p",[t._v("隐式转换中主要涉及到三种转换：")]),t._v(" "),_("p",[t._v("1、将值转为原始值，ToPrimitive()。")]),t._v(" "),_("p",[t._v("2、将值转为数字，ToNumber()。")]),t._v(" "),_("p",[t._v("3、将值转为字符串，ToString()。")]),t._v(" "),_("h3",{attrs:{id:"原型-原型链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原型-原型链"}},[t._v("#")]),t._v(" 原型-原型链")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("构造函数")]),t._v(" "),_("p",[t._v("可以通过"),_("code",[t._v("new")]),t._v("来 "),_("strong",[t._v("新建一个对象")]),t._v(" 的函数。")])]),t._v(" "),_("li",[_("p",[t._v("原型对象")]),t._v(" "),_("p",[t._v("一个简单的对象，用于实现对象的 "),_("strong",[t._v("属性继承")]),t._v("。可以简单的理解成对象的爹。在 Firefox 和 Chrome 中，每个"),_("code",[t._v("JavaScript")]),t._v("对象中都包含一个"),_("code",[t._v("__proto__")]),t._v(" (非标准)的属性指向它爹(该对象的原型)，可"),_("code",[t._v("obj.__proto__")]),t._v("进行访问")])]),t._v(" "),_("li",[_("p",[t._v("实例")]),t._v(" "),_("p",[t._v("通过构造函数和"),_("code",[t._v("new")]),t._v("创建出来的对象，便是实例。 "),_("strong",[t._v("实例通过"),_("code",[t._v("__proto__")]),t._v("指向原型，通过"),_("code",[t._v("constructor")]),t._v("指向构造函数")])])])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("实例.__proto__ === 原型\n\n原型.constructor === 构造函数\n\n构造函数.prototype === 原型\n")])])]),_("p",[_("strong",[t._v("原型链")])]),t._v(" "),_("p",[_("strong",[t._v("原型链是由原型对象组成")]),t._v("，每个对象都有 "),_("code",[t._v("__proto__")]),t._v(" 属性，指向了创建该对象的构造函数的原型，"),_("code",[t._v("__proto__")]),t._v(" 将对象连接起来组成了原型链。是一个用来"),_("strong",[t._v("实现继承和共享属性")]),t._v("的有限的对象链。")]),t._v(" "),_("p",[_("strong",[t._v("属性查找机制")]),t._v(": 当查找对象的属性时，如果实例对象自身不存在该属性，则沿着原型链往上一级查找，找到时则输出，不存在时，则继续沿着原型链往上一级查找，直至最顶级的原型对象"),_("code",[t._v("Object.prototype")]),t._v("，如还是没找到，则输出"),_("code",[t._v("undefined")]),t._v("；")]),t._v(" "),_("p",[_("strong",[t._v("属性修改机制")]),t._v(": 只会修改实例对象本身的属性，如果不存在，则进行添加该属性，如果需要修改原型的属性时，则可以用: "),_("code",[t._v("b.prototype.x = 2")]),t._v("；但是这样会造成所有继承于该对象的实例的属性发生改变。")]),t._v(" "),_("h3",{attrs:{id:"作用域和闭包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#作用域和闭包"}},[t._v("#")]),t._v(" 作用域和闭包")]),t._v(" "),_("h3",{attrs:{id:"执行机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行机制"}},[t._v("#")]),t._v(" 执行机制")]),t._v(" "),_("h3",{attrs:{id:"this"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" THIS")]),t._v(" "),_("p",[t._v("调用位置——  调用位置就是函数在代码中被调用的位置")]),t._v(" "),_("p",[t._v("最重要的是要分析调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的\n调用位置就在当前正在执行的函数的前一个调用中")]),t._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前的调用栈是baz")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此调用位置是全局作用域")]),t._v("\n    console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baz'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//bar的调用位置")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bar\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前的调用栈是baz -> bar")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此调用位置是baz")]),t._v("\n    console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//foo的调用位置")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前的调用栈是baz -> bar -> foo")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此调用位置是bar")]),t._v("\n    console"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//baz的调用位置")]),t._v("\n")])])]),_("p",[t._v("绑定规则")]),t._v(" "),_("p",[t._v("1、默认绑定")]),t._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n")])])]),_("p",[t._v("那么我们怎么知道这里应用了默认绑定呢？可以通过分析调用位置来看看 foo() 是如何调\n用的。在代码中， foo() 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用\n默认绑定，无法应用其他规则。")]),t._v(" "),_("p",[t._v("2、隐式绑定")]),t._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ta"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    foo"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("foo\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nobj"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n")])])]),_("p",[t._v("调用位置会使用 obj 上下文来引用函数，因此你可以说函数被调用时 obj 对象“拥\n有”或者“包含”它。当 foo() 被调用时，它的落脚点确实指向 obj 对象。当函数引\n用有上下文对象时， 隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调\n用 foo() 时 this 被绑定到 obj，因此 this.a 和 obj.a 是一样的")]),t._v(" "),_("p",[t._v("3、显式绑定")]),t._v(" "),_("div",{staticClass:"language-javascript extra-class"},[_("pre",{pre:!0,attrs:{class:"language-javascript"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ta"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n")])])]),_("p",[t._v("4、new绑定")]),t._v(" "),_("p",[t._v("使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。")]),t._v(" "),_("ol",[_("li",[t._v("创建（或者说构造）一个全新的对象。")]),t._v(" "),_("li",[t._v("这个新对象会被执行 [[ 原型 ]] 连接。")]),t._v(" "),_("li",[t._v("这个新对象会绑定到函数调用的 this。")]),t._v(" "),_("li",[t._v("如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。")])]),t._v(" "),_("p",[t._v("优先级")]),t._v(" "),_("p",[t._v("默认绑定最低的")]),t._v(" "),_("p",[t._v("显示绑定大于隐式绑定")]),t._v(" "),_("p",[t._v("new绑定大于隐式绑定")]),t._v(" "),_("ol",[_("li",[t._v("函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。\nvar bar = new foo()")]),t._v(" "),_("li",[t._v("函数是否通过 call、 apply（显式绑定）或者硬绑定调用？如果是的话， this 绑定的是\n指定的对象。\nvar bar = foo.call(obj2)")]),t._v(" "),_("li",[t._v("函数是否在某个上下文对象中调用（隐式绑定）？如果是的话， this 绑定的是那个上\n下文对象。\nvar bar = obj1.foo()")]),t._v(" "),_("li",[t._v("如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到\n全局对象。\nvar bar = foo()")])]),t._v(" "),_("h3",{attrs:{id:"let-const-var"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#let-const-var"}},[t._v("#")]),t._v(" let  /  const  /  var")]),t._v(" "),_("p",[t._v("let,const用于声明变量，用来替代老语法的var关键字，与var不同的是，let/const会创建一个块级作用域（通俗讲就是一个花括号内是一个新的作用域）")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("let")]),t._v(" "),_("p",[t._v("不存在变量提升，如果在还未声明是使用会报错ReferenceError")])]),t._v(" "),_("li",[_("p",[t._v("const")]),t._v(" "),_("p",[t._v("const声明变量的时候必须赋值，否则会报错，同样使用const声明的变量被修改了也会报错")]),t._v(" "),_("p",[t._v("const声明变量不能改变，如果声明的是一个引用类型，则不能改变它的内存地址")])])]),t._v(" "),_("h3",{attrs:{id:"深入数组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#深入数组"}},[t._v("#")]),t._v(" 深入数组")]),t._v(" "),_("h2",{attrs:{id:"计算机网络"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络"}},[t._v("#")]),t._v(" 计算机网络")]),t._v(" "),_("h3",{attrs:{id:"应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),_("p",[t._v("应用层规定了向用户提供应用服务时通信的协议，如：")]),t._v(" "),_("p",[t._v("TCP/IP 协议族内预存了各类通用的应用服务协议。比如，FTP（File Transfer Protocol，文件传输协议）和DNS（Domain Name System，域名系统）服务就是其中的两类以及HTTP协议。")]),t._v(" "),_("h3",{attrs:{id:"传输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),_("p",[t._v("传输层对接上层应用层，提供处于网络连接中两台计算机之间的数据传输所使用的协议。")]),t._v(" "),_("p",[t._v("在传输层有两个性质不同的协议：TCP（Transmission Control Protocol，传输控制协议）和UDP（User Data Protocol，用户数据报协议）。")]),t._v(" "),_("p",[t._v("TCP协议是全双工的，即发送数据和接收数据是同步进行的，就好像我们打电话一样，说话的同时也能听见。TCP协议在建立和断开连接时有三次握手和四次挥手，因此在传输的过程中更稳定可靠但同时就没UDP那么高效了。")]),t._v(" "),_("p",[t._v("UDP协议是面向无连接的，也就是说在正式传递数据之前不需要先建立连接。UDP 协议不保证有序且不丢失的传递到对端，也就是说不够稳定，但也正因如此，UDP协议比TCP更加高效和轻便。")]),t._v(" "),_("h3",{attrs:{id:"网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),_("p",[t._v("网络层规定了数据通过怎样的传输路线到达对方计算机传送给对方（IP协议等）。")]),t._v(" "),_("p",[t._v("与对方计算机之间通过多台计算机或网络设备进行传输时，网络层所起的所用就是在众多的选项内选择一条传输路线。就跟携程提供的回家路线图作用一样。")]),t._v(" "),_("h3",{attrs:{id:"数据链路层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[t._v("#")]),t._v(" 数据链路层")]),t._v(" "),_("p",[t._v("用来处理连接网络的硬件部分，包括控制操作系统、硬件的设备驱动、NIC（Network Interface Card，网络适配器，即网卡），及光纤等物理可见部分（还包括连接器等一切传输媒介）。硬件上的范畴均在链路层的作用范围之内。")]),t._v(" "),_("h3",{attrs:{id:"物理层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),_("p",[t._v("光猫等设备")]),t._v(" "),_("h3",{attrs:{id:"状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),_("p",[t._v("HTTP状态码表示客户端HTTP请求的返回结果、标识服务器处理是否正常、表明请求出现的错误等。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("2XX")]),t._v(" "),_("th",[t._v("成功（这系列表明请求被正常处理了）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("200")]),t._v(" "),_("td",[t._v("OK，表示从客户端发来的请求在服务器端被正确处理")])]),t._v(" "),_("tr",[_("td",[t._v("204")]),t._v(" "),_("td",[t._v("No content，表示请求成功，但响应报文不含实体的主体部分")])]),t._v(" "),_("tr",[_("td",[t._v("206")]),t._v(" "),_("td",[t._v("Partial Content，进行范围请求成功")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("3XX")]),t._v(" "),_("th",[t._v("重定向（表明浏览器要执行特殊处理）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("301")]),t._v(" "),_("td",[t._v("moved permanently，永久性重定向，表示资源已被分配了新的 URL")])]),t._v(" "),_("tr",[_("td",[t._v("302")]),t._v(" "),_("td",[t._v("found，临时性重定向，表示资源临时被分配了新的 URL")])]),t._v(" "),_("tr",[_("td",[t._v("303")]),t._v(" "),_("td",[t._v("see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源（对于301/302/303响应，几乎所有浏览器都会删除报文主体并自动用GET重新请求）")])]),t._v(" "),_("tr",[_("td",[t._v("304")]),t._v(" "),_("td",[t._v("not modified，表示服务器允许访问资源，但请求未满足条件的情况（与重定向无关）")])]),t._v(" "),_("tr",[_("td",[t._v("307")]),t._v(" "),_("td",[t._v("temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("4XX")]),t._v(" "),_("th",[t._v("客户端错误")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("400")]),t._v(" "),_("td",[t._v("bad request，请求报文存在语法错误")])]),t._v(" "),_("tr",[_("td",[t._v("401")]),t._v(" "),_("td",[t._v("unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息")])]),t._v(" "),_("tr",[_("td",[t._v("403")]),t._v(" "),_("td",[t._v("forbidden，表示对请求资源的访问被服务器拒绝，可在实体主体部分返回原因描述")])]),t._v(" "),_("tr",[_("td",[t._v("404")]),t._v(" "),_("td",[t._v("not found，表示在服务器上没有找到请求的资源")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("5XX")]),t._v(" "),_("th",[t._v("服务器错误")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("500")]),t._v(" "),_("td",[t._v("internal sever error，表示服务器端在执行请求时发生了错误")])]),t._v(" "),_("tr",[_("td",[t._v("501")]),t._v(" "),_("td",[t._v("Not Implemented，表示服务器不支持当前请求所需要的某个功能")])]),t._v(" "),_("tr",[_("td",[t._v("503")]),t._v(" "),_("td",[t._v("service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求")])])])]),t._v(" "),_("h3",{attrs:{id:"首部字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首部字段"}},[t._v("#")]),t._v(" 首部字段")]),t._v(" "),_("p",[t._v("下面是请求首部和响应首部中的字段名称和作用：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("请求首部")]),t._v(" "),_("th",[t._v("作用（请求报文专用）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("能正确接收的媒体类型："),_("code",[t._v("application/json")]),t._v(" "),_("code",[t._v("text/plain")])])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Charset")]),t._v(" "),_("td",[t._v("能正确接收的字符集: "),_("code",[t._v("unicode-1-1")])])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Encoding")]),t._v(" "),_("td",[t._v("能正确接收的编码格式列表："),_("code",[t._v("gzip deflate")])])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Language")]),t._v(" "),_("td",[t._v("能正确接收的语言列表："),_("code",[t._v("zh-cn,zh;1=0.9,en,1=0.8")])])]),t._v(" "),_("tr",[_("td",[t._v("Authorization")]),t._v(" "),_("td",[t._v("客户端认证信息："),_("code",[t._v("Bearer dSdSdFFlsfdjasd123")]),t._v("，一般存token用")])]),t._v(" "),_("tr",[_("td",[t._v("Cookie")]),t._v(" "),_("td",[t._v("发送给服务器的Cookie信息")])]),t._v(" "),_("tr",[_("td",[t._v("Expect")]),t._v(" "),_("td",[t._v("期待服务端的指定行为")])]),t._v(" "),_("tr",[_("td",[t._v("From")]),t._v(" "),_("td",[t._v("请求方邮箱地址")])]),t._v(" "),_("tr",[_("td",[t._v("Host")]),t._v(" "),_("td",[t._v("服务器的域名，用于区分单台服务器多个域名的虚拟主机，是HTTP/1.1唯一必须包含的字段。")])]),t._v(" "),_("tr",[_("td",[t._v("If-Match")]),t._v(" "),_("td",[t._v("两端资源标记比较，只有判断条件为真服务端才会接受请求："),_("code",[t._v('If-Mach: "123456')]),t._v("，和服务端文件标记比较")])]),t._v(" "),_("tr",[_("td",[t._v("If-Modified-Since")]),t._v(" "),_("td",[t._v("本地资源未修改返回 304（比较时间）")])]),t._v(" "),_("tr",[_("td",[t._v("If-None-Match")]),t._v(" "),_("td",[t._v("本地资源未修改返回 304（比较标记）")])]),t._v(" "),_("tr",[_("td",[t._v("User-Agent")]),t._v(" "),_("td",[t._v("客户端信息")])]),t._v(" "),_("tr",[_("td",[t._v("Max-Forwards")]),t._v(" "),_("td",[t._v("限制可被代理及网关转发的次数")])]),t._v(" "),_("tr",[_("td",[t._v("Proxy-Authorization")]),t._v(" "),_("td",[t._v("向代理服务器发送验证信息")])]),t._v(" "),_("tr",[_("td",[t._v("Range")]),t._v(" "),_("td",[t._v("请求某个内容的一部分，配合"),_("code",[t._v("If-Range")]),t._v("使用")])]),t._v(" "),_("tr",[_("td",[t._v("Referer")]),t._v(" "),_("td",[t._v("请求发起页面的原始URI")])]),t._v(" "),_("tr",[_("td",[t._v("TE")]),t._v(" "),_("td",[t._v("传输编码方式")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("响应首部")]),t._v(" "),_("th",[t._v("作用（响应报文专用）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Accept-Ranges")]),t._v(" "),_("td",[t._v("告知客户端服务器是否可接受范围请求，是"),_("code",[t._v("bytes")]),t._v("，否"),_("code",[t._v("none")])])]),t._v(" "),_("tr",[_("td",[t._v("Age")]),t._v(" "),_("td",[t._v("资源在代理缓存中存在的时间")])]),t._v(" "),_("tr",[_("td",[t._v("ETag")]),t._v(" "),_("td",[t._v("资源标识，资源发生变化时标识也会发生改变")])]),t._v(" "),_("tr",[_("td",[t._v("Location")]),t._v(" "),_("td",[t._v("客户端重定向到某个 URL")])]),t._v(" "),_("tr",[_("td",[t._v("Proxy-Authenticate")]),t._v(" "),_("td",[t._v("向代理服务器发送验证信息")])]),t._v(" "),_("tr",[_("td",[t._v("Server")]),t._v(" "),_("td",[t._v("服务器名字："),_("code",[t._v("Apache Nginx")])])]),t._v(" "),_("tr",[_("td",[t._v("WWW-Authenticate")]),t._v(" "),_("td",[t._v("获取资源需要的认证方案")])]),t._v(" "),_("tr",[_("td",[t._v("Set-Cookie")]),t._v(" "),_("td",[t._v("需要存在客户端的信息，一般用于识别用户身份")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("实体首部")]),t._v(" "),_("th",[t._v("作用（补充请求报文或响应报文相关信息）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Allow")]),t._v(" "),_("td",[t._v("资源的正确请求方式："),_("code",[t._v("GET HEAD POST")])])]),t._v(" "),_("tr",[_("td",[t._v("Content-Encoding")]),t._v(" "),_("td",[t._v("内容的编码格式："),_("code",[t._v("gzip deflate")])])]),t._v(" "),_("tr",[_("td",[t._v("Content-Language")]),t._v(" "),_("td",[t._v("内容使用的语言："),_("code",[t._v("zh-CN")])])]),t._v(" "),_("tr",[_("td",[t._v("Content-Length")]),t._v(" "),_("td",[t._v("request body 长度（即实体主体的大小）：")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Location")]),t._v(" "),_("td",[t._v("返回数据的备用地址")])]),t._v(" "),_("tr",[_("td",[t._v("Content-MD5")]),t._v(" "),_("td",[t._v("Base64加密格式的内容 MD5检验值")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Range")]),t._v(" "),_("td",[t._v("响应主体的内容范围")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Type")]),t._v(" "),_("td",[t._v("内容的媒体类型（如'application/json;charset=UTF-8'则会发送预检请求）")])]),t._v(" "),_("tr",[_("td",[t._v("Expires")]),t._v(" "),_("td",[t._v("内容的过期时间")])]),t._v(" "),_("tr",[_("td",[t._v("Last_modified")]),t._v(" "),_("td",[t._v("内容的最后修改时间")])])])]),t._v(" "),_("h2",{attrs:{id:"浏览器缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),_("blockquote",[_("p",[t._v("缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提高网页的整体加载速度。")])]),t._v(" "),_("ul",[_("li",[t._v("通常浏览器缓存策略分为两种：强缓存和协商缓存。")])]),t._v(" "),_("p",[_("strong",[t._v("强缓存")])]),t._v(" "),_("blockquote",[_("p",[t._v("实现强缓存可以通过两种响应头实现："),_("code",[t._v("Expires")]),t._v(" 和 "),_("code",[t._v("Cache-Control")]),t._v(" 。强缓存表示在缓存期间不需要请求，"),_("code",[t._v("state code")]),t._v(" 为 "),_("code",[t._v("200")])])]),t._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("Expires: Wed, 22 Oct 2018 08:41:00 GMT\n")])])]),_("blockquote",[_("p",[_("code",[t._v("Expires")]),t._v(" 是 "),_("code",[t._v("HTTP / 1.0")]),t._v(" 的产物，表示资源会在"),_("code",[t._v("Wed")]),t._v(","),_("code",[t._v("22 Oct 2018 08:41:00 GMT")]),t._v(" 后过期，需要再次请求。并且 "),_("code",[t._v("Expires")]),t._v(" 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")])]),t._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("Cache-control: max-age=30\n")])])]),_("ul",[_("li",[_("code",[t._v("Cache-Control")]),t._v(" 出现于 "),_("code",[t._v("HTTP / 1.1")]),t._v("，优先级高于 "),_("code",[t._v("Expires")]),t._v(" 。该属性表示资源会在 "),_("code",[t._v("30")]),t._v(" 秒后过期，需要再次请求。")])]),t._v(" "),_("p",[_("strong",[t._v("协商缓存")])]),t._v(" "),_("ul",[_("li",[t._v("如果缓存过期了，我们就可以使用协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 "),_("code",[t._v("304")]),t._v("。")]),t._v(" "),_("li",[t._v("协商缓存需要客户端和服务端共同实现，和强缓存一样，也有两种实现方式")])]),t._v(" "),_("p",[_("strong",[t._v("Last-Modified 和 If-Modified-Since")])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("Last-Modified")]),t._v("表示本地文件最后修改日期，"),_("code",[t._v("If-Modified-Since")]),t._v(" 会将 "),_("code",[t._v("Last-Modified")]),t._v(" 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。")]),t._v(" "),_("li",[t._v("但是如果在本地打开缓存文件，就会造成 "),_("code",[t._v("Last-Modified")]),t._v("被修改，所以在 "),_("code",[t._v("HTTP / 1.1")]),t._v(" 出现了 "),_("code",[t._v("ETag")])])]),t._v(" "),_("p",[_("strong",[t._v("ETag 和 If-None-Match")])]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("ETag")]),t._v(" 类似于文件指纹，"),_("code",[t._v("If-None-Match")]),t._v(" 会将当前 "),_("code",[t._v("ETag")]),t._v("发送给服务器，询问该资源 "),_("code",[t._v("ETag")]),t._v(" 是否变动，有变动的话就将新的资源发送回来。并且 "),_("code",[t._v("ETag")]),t._v(" 优先级比 "),_("code",[t._v("Last-Modified")]),t._v(" 高")])]),t._v(" "),_("p",[_("strong",[t._v("选择合适的缓存策略")])]),t._v(" "),_("blockquote",[_("p",[t._v("对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略")])]),t._v(" "),_("ul",[_("li",[t._v("对于某些不需要缓存的资源，可以使用 "),_("code",[t._v("Cache-control: no-store")]),t._v(" ，表示该资源不需要缓存")]),t._v(" "),_("li",[t._v("对于频繁变动的资源，可以使用 "),_("code",[t._v("Cache-Control: no-cache")]),t._v("并配合 "),_("code",[t._v("ETag")]),t._v(" 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。")]),t._v(" "),_("li",[t._v("对于代码文件来说，通常使用 "),_("code",[t._v("Cache-Control: max-age=31536000")]),t._v(" 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件")])])])}),[],!1,null,null,null);v.default=s.exports}}]);