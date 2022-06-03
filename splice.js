//Using splice method to move the order of the objects in an array; 
//Used case: CMS fetched documents and rendered them on an accordion module in a specific order 
//The client wanted them to render in a specific order 

var docItems = data['contentSources'][0]['items']; // [{{},{}...}, {...}. {...}...]
            
Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

for (let i = 1; i < 5; i++) {
    docItems[i].docs.move(0, 3);
    docItems[i].docs.move(2, 1);
    docItems[i].docs.move(5, 2);
    docItems[i].docs.move(5, 4);
}