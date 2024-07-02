const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    rating: 4.8,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    price: 5.99,
    rating: 4.9,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    price: 12.99,
    rating: 4.8,
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    price: 9.99,
    rating: 4.5,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    genre: 'Historical',
    price: 14.99,
    rating: 4.9,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Philosophical',
    price: 11.99,
    rating: 4.8,
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    genre: 'Philosophical',
    price: 13.99,
    rating: 4.9,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    genre: 'Dystopian',
    price: 9.99,
    rating: 4.7,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Romance',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    genre: 'Romance',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'Gothic',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'Science Fiction',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'Horror',
    price: 6.99,
    rating: 4.5,
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    year: -800,
    genre: 'Epic',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Iliad',
    author: 'Homer',
    year: -750,
    genre: 'Epic',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    genre: 'Historical',
    price: 11.99,
    rating: 4.9,
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    genre: 'Adventure',
    price: 12.99,
    rating: 4.9,
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.6,
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    genre: 'Historical',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    year: 1911,
    genre: 'Children',
    price: 6.99,
    rating: 4.7,
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1877,
    genre: 'Romance',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'Mystery',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    price: 20.99,
    rating: 4.9,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    price: 10.99,
    rating: 4.8,
  },
];

// 1.Знайти всі книги жанру  'Fantasy'.

// function task1(books) {
//   const result = books.filter(book => book.genre === 'Fantasy');
//   return result;
// }
// console.table(task3(books, 'Fyodor Dostoevsky'));

// function task1(books) {
//   return books.filter(book => book.genre === 'Fantasy');
// }

// 1. Знайти всі книги, видані після 2000 року.

// function task2(books, value) {
//   const result = books.filter(book => book.year >= value);
//   return result;
// }

// 1. Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.

// function task3(books, value) {
//   const result = books.filter(book => book.author === value);
//   return result;
// }
// 1. Знайти всі книги з ціною меншою ніж 10 доларів.

// function task4(books, value) {
//   const result = books.findIndex(book => book.price <= value);
//   return result;
// }
// console.log(task4(books, 10));

// 1. Знайти всі книги з рейтингом 3 і вище, з ціною меншою ніж 10 доларів.

// function task5(books, rating, price) {
//   const result = books.filter(
//     book => book.rating >= rating && book.price <= price,
//   );
//   return result;
// }

// console.table(task5(books, 3, 10));

// function task6(books, rating, price) {
//     const result = books.filter(book => {
//         const condition1 = book.rating >= rating;
//         const condition2 = book.price <= price;
//     return condition1 && condition2;
//   });
//   return result;
// }

// 1. Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.

// function task7(books, genre, price) {
//     const result = books.find(book => {
//         const condition1 = book.genre === genre;
//         const condition2 = book.price <= price;
//         return condition1 && condition2;
//     });
//     return result;
// }

// 1. Знайти першу книгу, видану до 1900 року.

// function task8(books, year) {
//     const result = books.find(book => book.year <= year);
//     return result
// }
// 1. Знайти першу книгу, що містить слово 'and' у назві.

// function task9(books, title) {
//     const result = books.find(book => book.title.includes(title));
//     return result;
// }

// 1. Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.

// function task10(books, author) {
//     const result = books.find(book => book.author === author);
//     return result;
// }
// 1. Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.

// function task11(books, genre, rating) {
//     const result = books.find(book => {
//         const condition1 = book.genre === genre;
//         const condition2 = book.rating >= rating;
//         return condition1 && condition2;
//     });
//     return result;
// }

// Отримати масив назв всіх книжок.

// function task12(books) {
//     const result = books.map(book => book.title);
// return result;
// }

// 1. Отримати масив авторів всіх книжок.

// function task13(books) {
//     const result = books.map(book => book.author);
//     return result;
// }
// 1. Створити масив об'єктів, які містять лише назву та автора кожної книжки.

// function task14(books) {
//     const result = books.map(book => {
//         const obj = {
//             title: book.title,
//             author: book.author,
//         }
//         return obj;
//     })
//     return result;
// }

// function task15(books) {
//     const result = books.map(book => {
//         const str = `${book.author}: ${book.title}`
//         return str;
//     })
//     return result;
// }

// function task16(books) {
//     const result = books.map(book => {
//         const array = [book.rating, book.price];
//         return array;
//     })
//     return result;
// }

// 1. Створити масив цін всіх книжок з подвоєною вартістю.

// function task17(books) {
//     const result = books.map(book => {
//         const price = book.price * 2;
//         return price;
//     })
//     return result;
// }

// 1. Створити масив об'єктів, де видання всіх книжок з доданими 5 роками до кожного.

// function task18(books) {
//     const result = books.map(book => {
//         const obj = { ...book };
//         obj.year += 5;
//         return obj;
//     });
//     return result;
// }

// 1. Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках
//    (помножений на 10).

// function task19(books) {
//     const result = books.map(book => {
//         const obj = {
//             title: book.title,
//             rating: book.rating * 10,
//         }
//         return obj;
//     })
//     return result;
// }

// 1. Створити масив об'єктів, де назва книжки буде в верхньому регістрі.

// function task20(books) {
//     const result = books.map(book => {
//         const obj = { ...book };
//         obj.title = obj.title.toUpperCase();
//         return obj;
//     })
//     return result;
// }

// 1. Створити масив рядків, що містять інформацію про кожну книжку в форматі
//    "назва - автор".

// function task21(books) {
//     const result = books.map(book => {
//         const str = `${book.title} - ${book.author}`;
//         return str;
//     });

//     return result;
// }

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `discountPrice`,
//    що дорівнює ціні зі знижкою 10%.

// function task22(books) {
//     const result = books.map(book => {
//         const obj = { ...book };
//         obj.discountPrice = obj.price * 0.9;
//         return obj;
//     });

//     return result;
// }
// 1. Створити масив об'єктів, що містять назву книжки та її ціну з доданим
//    податком 15%.

// function task23(books) {
//     const result = books.map(book => {
//         const obj = {
//             title: book.title,
//             price: book.price * 1.15,
//         };
//         return obj;
//     })
//     return result;
// }

// 1. Створити масив назв книжок, які видані після 2000 року.

// function task24(books, year) {
//   const result = books
//     .filter(book => book.year >= year)
//     .toSorted((a, b) => {
//       return a.price - b.price;
//     })
//     .map(book => book.title);
//   return result;
// }

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `isClassic`, що
//    дорівнює `true`, якщо книжка видана до 1950 року.

// books.toSorted((a, b) => {
//     return a.year - b.year;
// })
