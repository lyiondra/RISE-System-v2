// Inside your renderRow function...
<button class="btn btn-sm btn-outline-dark add-to-cart-btn" data-id="${book._id}">ADD TO BAG</button>// app.js — RISE Inventory CRUD (API-based)
// Inside the 'loginBtn' click listener...
if (user === "admin" && pass === "rarebooks123") {
    document.getElementById('loginOverlay').style.display = 'none';
    document.getElementById('adminSection').style.display = 'block'; // Show the admin form
}let inventory = [// 🏺 The Great Archive: 50 Rare Acquisitions
let inventory = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0743273565", status: "Rare", price: 450.00 },
  { id: 2, title: "Ulysses (Signed)", author: "James Joyce", isbn: "978-0199535675", status: "Special", price: 12500.00 },
  { id: 3, title: "The Hobbit (1st Ed)", author: "J.R.R. Tolkien", isbn: "978-0048230706", status: "Rare", price: 8200.00 },
  { id: 4, title: "1984", author: "George Orwell", isbn: "978-0451524935", status: "Standard", price: 120.00 },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", isbn: "978-0316769488", status: "In Cart", price: 350.00 },
  { id: 6, title: "Fahrenheit 451 (Signed)", author: "Ray Bradbury", isbn: "978-1451673319", status: "Special", price: 1500.00 },
  { id: 7, title: "Brave New World", author: "Aldous Huxley", isbn: "978-0060850524", status: "Standard", price: 95.00 },
  { id: 8, title: "Moby Dick (Heritage Press)", author: "Herman Melville", isbn: "978-1503280786", status: "Rare", price: 600.00 },
  { id: 9, title: "Pride and Prejudice", author: "Jane Austen", isbn: "978-0141439517", status: "Rare", price: 2100.00 },
  { id: 10, title: "The Old Man and the Sea", author: "Ernest Hemingway", isbn: "978-0684801223", status: "Standard", price: 150.00 },
  { id: 11, title: "On the Road", author: "Jack Kerouac", isbn: "978-0140283297", status: "Rare", price: 400.00 },
  { id: 12, title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0060935467", status: "In Cart", price: 2200.00 },
  { id: 13, title: "The Sun Also Rises", author: "Ernest Hemingway", isbn: "978-0684800516", status: "Standard", price: 300.00 },
  { id: 14, title: "Frankenstein", author: "Mary Shelley", isbn: "978-0141439470", status: "Rare", price: 1800.00 },
  { id: 15, title: "Dune (1st Edition)", author: "Frank Herbert", isbn: "978-0441172719", status: "Special", price: 4500.00 },
  { id: 16, title: "Lolita", author: "Vladimir Nabokov", isbn: "978-0679723165", status: "Rare", price: 550.00 },
  { id: 17, title: "Beloved", author: "Toni Morrison", isbn: "978-1400033416", status: "Standard", price: 85.00 },
  { id: 18, title: "The Bell Jar", author: "Sylvia Plath", isbn: "978-0060837020", status: "Standard", price: 110.00 },
  { id: 19, title: "Gravity's Rainbow", author: "Thomas Pynchon", isbn: "978-0143039945", status: "Rare", price: 350.00 },
  { id: 20, title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", isbn: "978-0060883287", status: "Rare", price: 900.00 },
  { id: 21, title: "Slaughterhouse-Five", author: "Kurt Vonnegut", isbn: "978-0385333849", status: "Standard", price: 125.00 },
  { id: 22, title: "Catch-22", author: "Joseph Heller", isbn: "978-1451626650", status: "Rare", price: 450.00 },
  { id: 23, title: "Blood Meridian", author: "Cormac McCarthy", isbn: "978-0679728757", status: "Special", price: 3200.00 },
  { id: 24, title: "Invisible Man", author: "Ralph Ellison", isbn: "978-0679732761", status: "Standard", price: 140.00 },
  { id: 25, title: "The Stranger", author: "Albert Camus", isbn: "978-0679720201", status: "Rare", price: 300.00 },
  { id: 26, title: "Atlas Shrugged", author: "Ayn Rand", isbn: "978-0451191144", status: "Standard", price: 200.00 },
  { id: 27, title: "The Sound and the Fury", author: "William Faulkner", isbn: "978-0679732242", status: "Rare", price: 750.00 },
  { id: 28, title: "Leaves of Grass", author: "Walt Whitman", isbn: "978-0140424515", status: "Rare", price: 1100.00 },
  { id: 29, title: "Walden", author: "Henry David Thoreau", isbn: "978-0140390445", status: "Standard", price: 180.00 },
  { id: 30, title: "The Picture of Dorian Gray", author: "Oscar Wilde", isbn: "978-0141439579", status: "Rare", price: 650.00 },
  { id: 31, title: "Dracula", author: "Bram Stoker", isbn: "978-0141439846", status: "Rare", price: 1400.00 },
  { id: 32, title: "A Tale of Two Cities", author: "Charles Dickens", isbn: "978-0141439609", status: "Standard", price: 250.00 },
  { id: 33, title: "Les Misérables", author: "Victor Hugo", isbn: "978-0140444391", status: "Rare", price: 500.00 },
  { id: 34, title: "Wuthering Heights", author: "Emily Brontë", isbn: "978-0141439555", status: "Standard", price: 160.00 },
  { id: 35, title: "The Waste Land", author: "T.S. Eliot", isbn: "978-0393974997", status: "Rare", price: 950.00 },
  { id: 36, title: "Grimms' Fairy Tales", author: "Jacob & Wilhelm Grimm", isbn: "978-0140444216", status: "Special", price: 3800.00 },
  { id: 37, title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", isbn: "978-0141439761", status: "Rare", price: 2200.00 },
  { id: 38, title: "The Raven", author: "Edgar Allan Poe", isbn: "978-0486266855", status: "Special", price: 5000.00 },
  { id: 39, title: "Jane Eyre", author: "Charlotte Brontë", isbn: "978-0141441146", status: "Standard", price: 210.00 },
  { id: 40, title: "Crime and Punishment", author: "Fyodor Dostoevsky", isbn: "978-0140449136", status: "Rare", price: 800.00 },
  { id: 41, title: "Don Quixote", author: "Miguel de Cervantes", isbn: "978-0060934347", status: "Rare", price: 1200.00 },
  { id: 42, title: "The Divine Comedy", author: "Dante Alighieri", isbn: "978-0141197494", status: "Special", price: 2500.00 },
  { id: 43, title: "The Iliad", author: "Homer", isbn: "978-0140275360", status: "Standard", price: 175.00 },
  { id: 44, title: "Paradise Lost", author: "John Milton", isbn: "978-0140424393", status: "Rare", price: 1100.00 },
  { id: 45, title: "The Odyssey", author: "Homer", isbn: "978-0140268867", status: "Standard", price: 175.00 },
  { id: 46, title: "Gulliver's Travels", author: "Jonathan Swift", isbn: "978-0141439494", status: "Rare", price: 450.00 },
  { id: 47, title: "The Prophet", author: "Kahlil Gibran", isbn: "978-0394404288", status: "In Cart", price: 300.00 },
  { id: 48, title: "Meditations", author: "Marcus Aurelius", isbn: "978-0140449334", status: "Rare", price: 600.00 },
  { id: 49, title: "The Prince", author: "Niccolò Machiavelli", isbn: "978-0140449150", status: "Standard", price: 190.00 },
  { id: 50, title: "Tao Te Ching", author: "Lao Tzu", isbn: "978-0140441383", status: "Special", price: 1500.00 }
];

// 🖋️ Render Archive function
function renderInventory() {
  const tbody = document.getElementById('inventoryTbody');
  if(!tbody) return;
  tbody.innerHTML = '';

  inventory.forEach(book => {
    const row = `
      <tr class="align-middle bg-white">
        <td class="p-4">
          <div class="d-flex align-items-center">
            <div class="book-spine-accent"></div>
            <div>
              <span class="fw-bold d-block">${book.title}</span>
              <small class="text-stone-500 italic">${book.author}</small>
            </div>
          </div>
        </td>
        <td class="p-4 text-muted small">${book.isbn}</td>
        <td class="p-4"><span class="status-badge" style="background: ${getStatusColor(book.status)}">${book.status}</span></td>
        <td class="p-4 fw-bold">$${book.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
        <td class="p-4 text-end">
          <button class="btn btn-sm btn-outline-dark" style="border-radius: 0;">VIEW DETAILS</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });

  // 📈 Smart Census Updates
  document.getElementById('totalItems').innerText = inventory.length;
  document.getElementById('itemsInCarts').innerText = inventory.filter(b => b.status === 'In Cart').length;
  // Let's pretend 4 were sold today for the vibe
  document.getElementById('soldToday').innerText = "4";
}

function getStatusColor(status) {
  switch(status) {
    case 'Rare': return '#f7d74c36'; // Gold
    case 'Special': return '#388b46'; // Burgundy
    case 'In Cart': return '#1B3022'; // Forest
    default: return '#78716c'; // Stone
  }
}

// Start the Archive
document.addEventListener('DOMContentLoaded', renderInventory);];
let currentFilter = "";

// DOM
const tbody = document.getElementById("inventoryTbody");
const addBookBtn = document.getElementById("addBookBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Modal + form inputs
const bookModalEl = document.getElementById("bookModal");
const bookModal = new bootstrap.Modal(bookModalEl);

const modalTitle = document.getElementById("modalTitle");
const bookForm = document.getElementById("bookForm");

const bookId = document.getElementById("bookId");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const isbnInput = document.getElementById("isbnInput");
const conditionInput = document.getElementById("conditionInput");
const priceInput = document.getElementById("priceInput");

// Load inventory from API
async function loadInventory() {
    try {
        const response = await fetch('http://localhost:5000/api/books');
        inventory = await response.json();
        renderInventory();
        updateCensus();
    } catch (err) {
        console.error("Failed to load inventory:", err);
        inventory = [];
        renderInventory();
    }
}

// Update census stats
function updateCensus() {
    document.getElementById('totalItems').innerText = inventory.length;
    const itemsInCarts = inventory.filter(book => book.condition === 'In Cart').length;
    document.getElementById('itemsInCarts').innerText = itemsInCarts;
    // Assuming sold today is a separate stat, for now set to 0 or calculate if needed
    document.getElementById('soldToday').innerText = '0'; // Placeholder
}

// Call this on page load
loadInventory();

// --- Render ---
function renderInventory() {
  const filtered = inventory.filter((b) => {
    if (!currentFilter) return true;
    const q = currentFilter.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.isbn.toLowerCase().includes(q)
    );
  });

  tbody.innerHTML = filtered.map(renderRow).join("");
}

function renderRow(book) {
  const badge = book.condition === "Rare" || book.condition === "Special"
    ? `<span class="status-badge">${escapeHtml(book.condition)}</span>`
    : `<span class="badge bg-secondary">${escapeHtml(book.condition)}</span>`;

  const price = formatMoney(book.price);

  return `
    <tr data-id="${book._id}">
      <td>
        <div class="book-spine ${book.condition === 'Rare' ? 'spine-burgundy' : 'spine-green'}">
          ${book.condition === 'Rare' ? 'R' : 'S'}
        </div>
      </td>
      <td>
        <strong>${escapeHtml(book.title)}</strong><br>
        <small class="text-muted">${escapeHtml(book.author)}</small>
      </td>
      <td>${escapeHtml(book.isbn)}</td>
      <td>${badge}</td>
      <td>${price}</td>
      <td>
        <button class="btn btn-sm btn-outline-primary" data-action="edit">Edit</button>
        <button class="btn btn-sm btn-outline-danger ms-2" data-action="delete">Delete</button>
      </td>
    </tr>
  `;
}

// --- CRUD ---
function openAddModal() {
  modalTitle.textContent = "Add Book";
  bookId.value = "";
  bookForm.reset();
  conditionInput.value = "Standard";
  bookModal.show();
}

function openEditModal(book) {
  modalTitle.textContent = "Edit Book";
  bookId.value = book.id;
  titleInput.value = book.title;
  authorInput.value = book.author;
  isbnInput.value = book.isbn;
  conditionInput.value = book.condition;
  priceInput.value = book.price;
  bookModal.show();
}

async function upsertBook(formData) {
  // Basic validations
  const title = formData.title.trim();
  const author = formData.author.trim();
  const isbn = formData.isbn.trim();
  const condition = formData.condition;
  const price = Number(formData.price);

  if (!title || !author || !isbn) {
    alert("Title, Author, and ISBN are required.");
    return;
  }

  if (!Number.isFinite(price) || price < 0) {
    alert("Price must be a valid non-negative number.");
    return;
  }

  const bookData = { title, author, isbn, condition, price };

  try {
    if (formData.id) {
      // Update
      const response = await fetch(`/api/books/${formData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });
      if (!response.ok) throw new Error('Failed to update book');
    } else {
      // Create
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
      });
      if (!response.ok) throw new Error('Failed to create book');
    }
    await loadInventory(); // Reload inventory
    bookModal.hide();
  } catch (err) {
    alert(err.message);
  }
}

async function deleteBook(id) {
  const book = inventory.find(b => b._id === id);
  if (!book) return;

  const ok = confirm(`Delete "${book.title}"? This cannot be undone.`);
  if (!ok) return;

  try {
    const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete book');
    await loadInventory(); // Reload inventory
  } catch (err) {
    alert(err.message);
  }
}

// --- Events ---
addBookBtn.addEventListener("click", openAddModal);

searchBtn.addEventListener("click", () => {
  currentFilter = searchInput.value.trim();
  renderInventory();
});

searchInput.addEventListener("input", () => {
  currentFilter = searchInput.value.trim();
  renderInventory();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  upsertBook({
    id: bookId.value || "",
    title: titleInput.value,
    author: authorInput.value,
    isbn: isbnInput.value,
    condition: conditionInput.value,
    price: priceInput.value
  });
});

// Delegate row actions
tbody.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const tr = e.target.closest("tr[data-id]");
  if (!tr) return;

  const id = tr.getAttribute("data-id");
  const action = btn.getAttribute("data-action");

  if (action === "edit") {
    const book = inventory.find(b => b._id === id);
    if (book) openEditModal(book);
  } else if (action === "delete") {
    deleteBook(id);
  }
});

// --- Utilities ---
function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(Number(value) || 0);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

// Init
renderInventory();
document.getElementById('bookForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // This stops the page from refreshing

    const newBook = {
        title: document.getElementById('titleInput').value,
        author: document.getElementById('authorInput').value,
        isbn: document.getElementById('isbnInput').value,
        price: document.getElementById('priceInput').value,
        condition: document.getElementById('conditionInput').value
    };

    try {
        const response = await fetch('http://localhost:5000/api/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook)
        });

        if (response.ok) {
            alert("Book added to MongoDB!");
            document.getElementById('bookForm').reset(); // Clears the form
            loadInventory(); // Refresh the list so you see the new book!
        }
    } catch (err) {
        console.error("Error saving book:", err);
    }
    // Listener for clicking "Add to Bag"
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const bookId = e.target.getAttribute('data-id');
        const selectedBook = inventory.find(b => b._id === bookId);
        
        if (selectedBook) {
            cart.push(selectedBook);
            updateCartUI();
        }
    }
});

// Function to redraw the cart on the screen
function updateCartUI() {
    const cartContainer = document.getElementById('cartItems');
    const totalDisplay = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-muted italic">Your bag is currently empty...</p>';
        totalDisplay.innerText = 'Total Value: $0.00';
        return;
    }

    cartContainer.innerHTML = cart.map((item, index) => `
        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
            <span><strong>${item.title}</strong> - ${item.author}</span>
            <span>$${item.price.toLocaleString()} <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">&times;</button></span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalDisplay.innerText = `Total Value: $${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
}

// Global function to remove items (since it's used in the HTML string above)
window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};
document.getElementById('loginBtn').addEventListener('click', () => {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // You can set these to whatever you want!
    if (user === "admin" && pass === "rarebooks123") {
        alert("Welcome back, Curator.");
        document.getElementById('loginOverlay').style.display = 'none'; // This hides the login screen
    } else {
        alert("Access Denied. Incorrect credentials.");
    }
});
});