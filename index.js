const data = [
  {
    title: '1984',
    year: 1949,
    isbn: '978-0451524935',
    author: 'George Orwell',
  },
  {
    title: 'To Kill a Mockingbird',
    year: 1960,
    isbn: '978-0446310789',
    author: 'Harper Lee',
  },
  {
    title: 'The Great Gatsby',
    year: 1925,
    isbn: '978-0743273565',
    author: 'F. Scott Fitzgerald',
  },
];

// const data = [];

function getData() {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject(new Error('Data is empty'));
    }

    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  // setTimeout(() => {
  //   return data;
  // }, 2000);
}

getData()
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message));

async function fetchingData() {
  const books = await getData();
  console.log(books);
}

fetchingData();

// Top level await
const books = await getData();
console.log(books);
