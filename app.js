//todo

var todoArray = []
function addTodo(){
    var addtodo = document.getElementById("todo").value;
    console.log(addtodo)
    todoArray.push(addtodo)
    console.log(todoArray)

}

//2

// var dom = document.getElementById("div");
// console.log(dom)
// console.log(dom.nodeType)
// console.log(dom.childNodes[0].nodeType)
// // console.log(dom.childNodes[1].nodeType)
// // console.log(dom.childNodes[2].nodeType)

// // var ul = document.getElementsByTagName("ul");
// // console.log(ul.childNodes)
// // console.log(dom.childNodes[1])

// for (var i = 0; i < 3; i++) {

//     document.getElementById("div").innerHTML += "<li>" + "red alert" + "</li>"
// }

//3

var p;
var div = document.getElementById("div");
var button
function showText(){
    console.log(div)
    p = document.createElement('p');
    console.log(p)
    var pText = document.createTextNode("Here is my text using JS ")
    console.log(pText)
    button = document.createElement('a');
    var btnText = document.createTextNode("Read more")
    button.appendChild(btnText);
    button.setAttribute("href",'#')
    button.setAttribute("onClick",'readMore()')
    button.setAttribute("id",'fullText')
    p.appendChild(pText)
    p.appendChild(button)
    // console.log(p)
    div.appendChild(p)
    // div.appendChild(button)
}
function readMore(){
     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates whichmake up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have severaladaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
     document.getElementById("fullText").innerHTML = expandedParagraph;
    
}

//4

// }
// function readMore(){
//     console.log('asdasd')
//     var p1 = document.createElement('p') 
//     var p1Text = document.createTextNode('asdadsadsadadass') 
//     p1.appendChild(p1Text)
//     div.appendChild(p1)
    
// }


// 5

// var div = document.getElementById('div');
// console.log(div)
// console.log(div.nodeType)

//6

// var divs = document.getElementById('div');
// function showText(){
//     var p = document.createElement('p')
//     // console.log(p)
//     var pText = document.createTextNode('Hello this is saylani Developer ')
//     // console.log(pText)
//     var a = document.createElement('a')
//     a.setAttribute("href", '#')
//     a.setAttribute("onClick", "readMore()")
//     var aText = document.createTextNode("Read more");
//     a.appendChild(aText);
//     p.appendChild(pText);
//     p.appendChild(a);
//     divs.appendChild(p)
// }

//7

// function readMore(){
//     var p1 = document.createElement('p');
//     var p1Text = document.createTextNode("You can reade more...")

//     p1.appendChild(p1Text);

//     divs.appendChild(p1)

// }

