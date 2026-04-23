import RISE_ARCHIVE from './data.js';

// 1. GLOBAL STATE (Declared only once)
let inventory = JSON.parse(localStorage.getItem('RISE_DATA')) || RISE_ARCHIVE;
let cart = [];
let currentFilter = "";

// 2. DOM ELEMENTS (Declared only once)
const tbody = document.getElementById("inventoryTbody");
const addBookBtn = document.getElementById("addBookBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const bookModalEl = document.getElementById("bookModal");
const bookModal = bookModalEl ? new bootstrap.Modal(bookModalEl) : null;
const bookForm = document.getElementById("bookForm");

// 3. CORE FUNCTIONS
async function loadInventory() {
    try {
        // Attempt to get data from your MongoDB API
        const response = await fetch('http://localhost:5000/api/books');
        if (response.ok) {
            inventory = await response.json();
        }
    } catch (err) {
        console.error("API offline, using local archive:", err);
    }
    renderInventory();
    updateCensus();
}

function renderInventory() {
    if (!tbody) return;

    const filtered = inventory.filter((b) => {
        const q = currentFilter.toLowerCase();
        return (
            b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            (b.isbn && b.isbn.toLowerCase().includes(q))
        );
    });

    tbody.innerHTML = filtered.map(renderRow).join("");
}

function renderRow(book) {
    const isSpecial = book.condition === "Rare" || book.condition === "Special";
    const badge = isSpecial 
        ? `<span class="status-badge">${escapeHtml(book.condition)}</span>`
        : `<span class="badge bg-secondary">${escapeHtml(book.condition)}</span>`;

    return `
        <tr data-id="${book._id || book.id}">
            <td>
                <div class="book-spine ${book.condition === 'Rare' ? 'spine-burgundy' : 'spine-green'}">
                    ${book.condition === 'Rare' ? 'R' : 'S'}
                </div>
            </td>
            <td>
                <strong>${escapeHtml(book.title)}</strong><br>
                <small class="text-muted">${escapeHtml(book.author)}</small>
            </td>
            <td>${escapeHtml(book.isbn || 'N/A')}</td>
            <td>${badge}</td>
            <td>${formatMoney(book.price)}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" data-action="edit">Edit</button>
                <button class="btn btn-sm btn-outline-danger ms-2" data-action="delete">Delete</button>
                <button class="btn btn-sm btn-outline-dark add-to-cart-btn ms-2" data-id="${book._id || book.id}">BAG</button>
            </td>
        </tr>
    `;
}

// 4. LOGIC & EVENTS
function updateCensus() {
    const totalItems = document.getElementById('totalItems');
    const itemsInCarts = document.getElementById('itemsInCarts');
    if (totalItems) totalItems.innerText = inventory.length;
    if (itemsInCarts) {
        itemsInCarts.innerText = inventory.filter(b => b.status === 'In Cart' || b.condition === 'In Cart').length;
    }
}

// Event: Add to Cart
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const id = e.target.getAttribute('data-id');
        const selectedBook = inventory.find(b => (b._id === id || b.id === id));
        if (selectedBook) {
            cart.push(selectedBook);
            updateCartUI();
        }
    }
});

function updateCartUI() {
    const cartContainer = document.getElementById('cartItems');
    const totalDisplay = document.getElementById('cartTotal');
    if (!cartContainer) return;

    cartContainer.innerHTML = cart.map((item, index) => `
        <div class="d-flex justify-content-between py-2 border-bottom">
            <span><strong>${item.title}</strong></span>
            <span>$${item.price} <button onclick="removeFromCart(${index})" class="btn-close btn-sm"></button></span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
    if (totalDisplay) totalDisplay.innerText = `Total: ${formatMoney(total)}`;
}

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

// 5. UTILS
function formatMoney(value) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Number(value) || 0);
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// INITIALIZE
loadInventory();