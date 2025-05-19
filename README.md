# Video Chat Application

This is a simple video chat application built using Node.js, Express, PeerJS, and Socket.io. The application allows multiple users to join a room and have real-time video and audio communication.

## ✨ Features

- Unique room generation using UUID
- Real-time video and audio chat between multiple users
- Dynamic peer-to-peer connections with automatic user stream updates

## 🚀 Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PeerJS server](https://peerjs.com/docs/#peerjs-server)

Install the PeerJS CLI globally:

```bash
npm install -g peer
```

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/atharvdange618/Video-Chat-App-with-WebRTC.git
   cd Video-Chat-App-with-WebRTC
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the PeerJS signaling server **in a separate terminal**:

   ```bash
   peerjs --port 3001
   ```

4. Start the Node.js/Express server:

   ```bash
   npm start
   ```

5. Open your browser and visit:

   ```
   http://localhost:3000
   ```

   You’ll be redirected to a unique room URL (e.g. `http://localhost:3000/abc123`). Share that URL with others to start a group video chat.

## 🗂 Project Structure

```

├── public/
│   └── script.js         # Client-side logic for media and peer connections
├── views/
│   └── room.ejs          # EJS template rendered for each room
├── server.js             # Express server, routes, and Socket.io handling
├── package.json
└── README.md
```

## ⚙️ How It Works

1. When a user hits `/`, they're redirected to a unique room via UUID.
2. `room.ejs` is rendered with the room ID passed to the client.
3. The client connects to the PeerJS signaling server (`localhost:3001`) to establish peer-to-peer connections.
4. Socket.io coordinates user join/leave events and stream sharing.
5. All active user video streams are dynamically rendered in the grid layout.

## 📚 Dependencies

- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Socket.io](https://socket.io/)
- [PeerJS](https://peerjs.com/)
- [UUID](https://www.npmjs.com/package/uuid)

## 🤝 Contribution

Contributions are welcome! Feel free to:

1. Fork the repo
2. Create a feature or bugfix branch
3. Commit and push your changes
4. Submit a Pull Request

## 📬 Contact

- 📧 Email: [atharvdange.dev@gmail.com](mailto:atharvdange.dev@gmail.com)
- 🔗 LinkedIn: [Atharv Dange](https://www.linkedin.com/in/atharvdange)
- 🐦 Twitter: [@atharvdangedev](https://twitter.com/atharvdangedev)
