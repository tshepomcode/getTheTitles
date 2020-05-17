const getTheTitles = function(books) {
    // debugger;
    var titles = books.map(function(value){
        return value.title;
    });

    return titles;
}

module.exports = getTheTitles;

// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]


// console.log(getTheTitles(books));
