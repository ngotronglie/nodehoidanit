document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        const data = await response.json();
        if (data.success) {
            loadUsers();
            e.target.reset();
        }
    } catch (error) {
        console.error('Lỗi:', error);
    }
});

async function loadUsers() {
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        
        const userList = document.getElementById('userList');
        userList.innerHTML = data.users.map(user => `
            <div class="user-item">
                <span>${user}</span>
            </div>
        `).join('');
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

// Load users khi trang được tải
loadUsers();