const express = require('express');
const http = require('http');
const path = require('path');

class Server {
    constructor(port) {
        this.app = express();
        this.port = port;
        this.server = http.createServer(this.app);
        
        // Khởi tạo middleware
        this.initializeMiddleware();
        // Khởi tạo routes
        this.initializeRoutes();
    }

    initializeMiddleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static('public')); // Phục vụ file tĩnh
    }

    initializeRoutes() {
        // Trang chủ - HTML
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });

        // GET - Lấy danh sách users
        this.app.get('/api/users', (req, res) => {
            res.json({ 
                success: true,
                users: ['Người dùng 1', 'Người dùng 2'] 
            });
        });

        // POST - Tạo user mới
        this.app.post('/api/users', (req, res) => {
            const { name, email } = req.body;
            res.json({ 
                success: true,
                message: 'Tạo user thành công',
                user: { name, email }
            });
        });

        // PUT - Cập nhật user
        this.app.put('/api/users/:id', (req, res) => {
            const { id } = req.params;
            const { name, email } = req.body;
            res.json({
                success: true,
                message: `Cập nhật user ${id} thành công`,
                user: { id, name, email }
            });
        });

        // DELETE - Xóa user
        this.app.delete('/api/users/:id', (req, res) => {
            const { id } = req.params;
            res.json({
                success: true,
                message: `Xóa user ${id} thành công`
            });
        });

        // Xử lý lỗi 404
        this.app.use((req, res) => {
            res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
        });
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`Server đang chạy tại http://localhost:${this.port}`);
        });
    }

    stop() {
        this.server.close(() => {
            console.log('Server đã dừng');
        });
    }
}

// Khởi tạo và chạy server
const app = new Server(3000);
app.start();

// Xử lý tắt server
process.on('SIGTERM', () => {
    app.stop();
});