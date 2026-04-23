require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

async function run() {
    console.log("--- 🏗️ Starting RISE-System-v2 Cloud Handshake... ---");
    
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
        console.error("❌ ERROR: MONGODB_URI is missing from your .env file!");
        return;
    }

    const client = new MongoClient(uri);

    try {
        console.log("--- 🔌 Attempting to connect to Atlas... ---");
        await client.connect();
        console.log("✅ Connection Established Successfully!");

        const db = client.db("RISE_Inventory_v2");
        const books = db.collection("rare_books");

        // INSERT 10 BOOKS
        const sampleBooks = [
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", price: 1500, timestamp: new Date() },
            { title: "Moby Dick", author: "Herman Melville", isbn: "9780142437247", price: 3200, timestamp: new Date() },
            { title: "Ulysses", author: "James Joyce", isbn: "9780679722762", price: 2800, timestamp: new Date() },
            { title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "9780547928227", price: 4500, timestamp: new Date() },
            { title: "1984", author: "George Orwell", isbn: "9780451524935", price: 900, timestamp: new Date() },
            { title: "Brave New World", author: "Aldous Huxley", isbn: "9780060850524", price: 1100, timestamp: new Date() },
            { title: "Frankenstein", author: "Mary Shelley", isbn: "9780143131847", price: 5000, timestamp: new Date() },
            { title: "Dracula", author: "Bram Stoker", isbn: "9780141439846", price: 3800, timestamp: new Date() },
            { title: "The Catcher in the Rye", author: "J.D. Salinger", isbn: "9780316769488", price: 2200, timestamp: new Date() },
            { title: "Fahrenheit 451", author: "Ray Bradbury", isbn: "9781451673319", price: 1300, timestamp: new Date() }
        ];

       console.log("--- 🏺 Initializing Archive: Populating RISE Inventory... ---");
await books.deleteMany({}); 
await books.insertMany(sampleBooks);

console.log("\n--- 📜 ARCHIVAL AUDIT: Latest Acquisitions ---");
const recent = await books.find().limit(5).toArray();
console.table(recent, ["title", "author", "price"]);
console.log("--- ✅ RISE Ecosystem is Live & Synchronized ---");
    } catch (err) {
        console.error("❌ CONNECTION ERROR:", err.message);
    } finally {
        await client.close();
        console.log("--- 🔌 Connection Closed Safely. ---");
    }
}

// CRITICAL: This line starts the script!
run();