function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Items = {
  title: string;
  rating: number;
};
function filterByRating(item: Items[]): Items[] {
  const filterItem = item.filter((i) => i.rating >= 4);
  return filterItem;
}
const books: Items[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

type UsersList = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: UsersList[]): UsersList[] {
  const filteringUsers = users.filter((user) => user.isActive === true);
  return filteringUsers;
}
const users: UsersList[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  const availableBook = book.isAvailable ? "Yes" : "No";
  const printedBook = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableBook}`;
  return printedBook;
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

function getUniqueValues(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        exists = true;
      }
    }

    if (!exists) {
      result[result.length] = arr2[i];
    }
  }
  return result;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  const totalProduct = products.map((product) => {
    const total = product.price * product.quantity;
    if (product.discount) {
      const discount = total - total * (product.discount / 100);
      return discount;
    } else {
      return total;
    }
  });
  const sumOfproducts = totalProduct.reduce((sum, value) => sum + value, 0);
  return sumOfproducts;
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
