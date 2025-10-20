import fs from 'fs/promises';
import path from 'path';
import readline from 'readline';
import { fileURLToPath, pathToFileURL } from 'url';

// Get current directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the products.json file
const PRODUCTS_FILE = path.join(
  __dirname,
  '..',
  'src',
  'data',
  'products.json'
);

class Book {
  constructor({
    title,
    author,
    country,
    language,
    pages,
    published,
    price,
    image = '',
    url = '',
  }) {
    this.id = this.generateId();
    this.title = title;
    this.author = author;
    this.country = country || 'Unknown';
    this.language = language || 'English';
    this.pages = pages;
    this.published = published;
    this.price = price;
    this.image = image;
    this.url = url;
  }

  generateId() {
    return `book_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Method to validate book data
  validate() {
    const required = ['title', 'author', 'pages', 'published', 'price'];
    const missing = required.filter((field) => !this[field]);

    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }

    if (isNaN(this.pages) || this.pages <= 0) {
      throw new Error('Pages must be a positive number');
    }

    if (isNaN(this.price) || this.price <= 0) {
      throw new Error('Price must be a positive number');
    }
  }

  // Method to format book for display
  toString() {
    return `"${this.title}" by ${this.author} (${this.published}) - $${this.price}`;
  }
}
class BookManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  // Read existing books from JSON file
  async loadBooks() {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log('Products file not found. Creating new file...');
        return [];
      }
      throw new Error(`Error reading books file: ${error.message}`);
    }
  }

  // Save books to JSON file
  async saveBooks(books) {
    try {
      const jsonData = JSON.stringify(books, null, 2);
      await fs.writeFile(this.filePath, jsonData, 'utf8');
      console.log(
        `✅ Successfully saved ${books.length} books to ${this.filePath}`
      );
    } catch (error) {
      throw new Error(`Error saving books: ${error.message}`);
    }
  }

  // Add a new book to the collection
  async addBook(bookData) {
    try {
      const book = new Book(bookData);
      book.validate();

      const books = await this.loadBooks();
      books.push(book);

      await this.saveBooks(books);
      console.log(`📚 Added new book: ${book.toString()}`);
      return book;
    } catch (error) {
      throw new Error(`Failed to add book: ${error.message}`);
    }
  }

  // Display all books
  async listBooks() {
    try {
      const books = await this.loadBooks();

      if (books.length === 0) {
        console.log('No books found in the collection.');
        return;
      }

      console.log('\n📖 Current Book Collection:');
      console.log('='.repeat(50));

      books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title}`);
        console.log(`   Author: ${book.author}`);
        console.log(
          `   Published: ${book.published} | Pages: ${book.pages} | Price: $${book.price}`
        );
        console.log('');
      });

      console.log(`Total books: ${books.length}`);
    } catch (error) {
      console.error(`Error listing books: ${error.message}`);
    }
  }
}
class BookCLI {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.manager = new BookManager(PRODUCTS_FILE);
  }

  // Promisify readline question
  question(prompt) {
    return new Promise((resolve) => {
      this.rl.question(prompt, resolve);
    });
  }

  // Main menu
  async showMenu() {
    console.log('\n📚 Book Manager CLI');
    console.log('==================');
    console.log('1. Add a new book');
    console.log('2. List all books');
    console.log('3. Exit');

    const choice = await this.question('\nEnter your choice (1-3): ');
    return choice.trim();
  }

  // Get book information from user
  async getBookInfo() {
    console.log('\n📖 Enter book information:');

    const title = await this.question('Title: ');
    const author = await this.question('Author: ');
    const country = await this.question('Country (optional): ');
    const language = await this.question('Language (default: English): ');
    const pages = await this.question('Number of pages: ');
    const published = await this.question('Publication year: ');
    const price = await this.question('Price ($): ');
    const imageUrl = await this.question('Image URL (optional): ');
    const bookUrl = await this.question('Book URL (optional): ');

    return {
      title: title.trim(),
      author: author.trim(),
      country: country.trim(),
      language: language.trim() || 'English',
      pages: parseInt(pages),
      published: parseInt(published),
      price: parseFloat(price),
      image: imageUrl.trim(),
      url: bookUrl.trim(),
    };
  }

  // Main application loop
  async run() {
    console.log('🚀 Welcome to the Book Manager CLI!');

    try {
      while (true) {
        const choice = await this.showMenu();

        switch (choice) {
          case '1':
            try {
              const bookData = await this.getBookInfo();
              await this.manager.addBook(bookData);
            } catch (error) {
              console.error(`❌ Error: ${error.message}`);
            }
            break;

          case '2':
            await this.manager.listBooks();
            break;

          case '3':
            console.log('👋 Goodbye!');
            this.rl.close();
            return;

          default:
            console.log('❌ Invalid choice. Please try again.');
        }
      }
    } catch (error) {
      console.error(`❌ Application error: ${error.message}`);
    } finally {
      this.rl.close();
    }
  }
}
// Main execution with error handling
async function main() {
  try {
    const cli = new BookCLI();
    await cli.run();
  } catch (error) {
    console.error(`❌ Fatal error: ${error.message}`);
    process.exit(1);
  }
}

// Execute only if this file is run directly
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

// Export classes for potential reuse
export { Book, BookManager, BookCLI };
