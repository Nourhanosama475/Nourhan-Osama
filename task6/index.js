document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const searchInput = document.getElementById('search');
    const filterCategory = document.getElementById('filterCategory');
    let editIndex = -1;

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('productName').value;
        const description = document.getElementById('description').value;
        const price = parseFloat(document.getElementById('price').value);
        const category = document.getElementById('category').value;
        const availability = document.getElementById('availability').checked;

        if (editIndex === -1) {
            addProduct(productName, description, price, category, availability);
        } else {
            updateProduct(productName, description, price, category, availability);
        }

        productForm.reset();
        document.getElementById('submitBtn').innerText = 'Add Product';
        editIndex = -1;
    });

    function addProduct(name, desc, price, category, available) {
        const newRow = productTable.insertRow();
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${desc}</td>
            <td>${price}</td>
            <td>${category}</td>
            <td class="${available ? 'available' : 'unavailable'}">
                ${available ? 'In Stock' : 'Out of Stock'}
            </td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        `;

        newRow.querySelector('.editBtn').addEventListener('click', () => {
            editProduct(newRow);
        });

        newRow.querySelector('.deleteBtn').addEventListener('click', () => {
            deleteProduct(newRow);
        });
    }

    function editProduct(row) {
        const cells = row.getElementsByTagName('td');
        document.getElementById('productName').value = cells[0].innerText;
        document.getElementById('description').value = cells[1].innerText;
        document.getElementById('price').value = cells[2].innerText;
        document.getElementById('category').value = cells[3].innerText;
        document.getElementById('availability').checked = cells[4].innerText === 'In Stock'; 
        editIndex = Array.from(productTable.rows).indexOf(row);
        document.getElementById('submitBtn').innerText = 'Update Product';
    }

    function updateProduct(name, desc, price, category, available) {
        const row = productTable.rows[editIndex];
        row.cells[0].innerText = name;
        row.cells[1].innerText = desc;
        row.cells[2].innerText = price;
        row.cells[3].innerText = category;
        row.cells[4].innerText = available ? 'In Stock' : 'Out of Stock'; 
        row.cells[4].className = available ? 'available' : 'unavailable'; 
    }

    function deleteProduct(row) {
        const rowIndex = row.rowIndex; 
        productTable.deleteRow(rowIndex - 1); 
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        Array.from(productTable.rows).forEach(row => {
            const productName = row.cells[0].innerText.toLowerCase();
            const category = row.cells[3].innerText.toLowerCase();
            row.style.display = (productName.includes(searchTerm) || category.includes(searchTerm)) ? '' : 'none';
        });
    });

    filterCategory.addEventListener('change', () => {
        const selectedCategory = filterCategory.value;
        Array.from(productTable.rows).forEach(row => {
            const category = row.cells[3].innerText;
            row.style.display = (selectedCategory === '' || category === selectedCategory) ? '' : 'none';
        });
    });
});
