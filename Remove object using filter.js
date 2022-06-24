// You want to remove a specific object in an array based on its property value
// [{...}, {...}]
// 0: {docCategory: 'annual'}
// 1: {docCategory: 'proxy'}
// You want to get rid of one with proxy value

	item.docs = item.docs.filter(function( obj ) {
                  return obj.docCategory !== 'proxy';
              });

// Notice you are re-assigning the variable to its original variable
