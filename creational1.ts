// Singleton Pattern Implementation
class Database {
    private static instance: Database;
  
    private constructor() {
      console.log('Database connection created!');
    }
  
    static getInstance(): Database {
      if (!Database.instance) {
        Database.instance = new Database();
      }
      return Database.instance;
    }
  
    query(sql: string) {
      console.log(`Executing query: ${sql}`);
    }
  }
  
  // Usage
  const db1 = Database.getInstance();
  const db2 = Database.getInstance();
  
  db1.query('SELECT * FROM users');
  console.log(db1 === db2); // true
  