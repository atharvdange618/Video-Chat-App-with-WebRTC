# Video Chat Application

This is a simple video chat application built using Node.js, Express, PeerJS, and Socket.io. The application allows multiple users to join a room and have a video chat.

## Features

- Unique room creation
- Real-time video and audio communication
- Automatically displays videos of all users in the room

## Prerequisites

Make sure you have Node.js and npm installed. You can download Node.js from [here](https://nodejs.org/).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/atharvdange618/Video-Chat-App-with-WebRTC.git

    cd Video-Chat-App-with-WebRTC
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`. You will be redirected to a unique room URL.

## Project Structure

- `server.js`: The main server file which sets up the Express server, handles routing, and manages WebSocket connections.
- `views/room.ejs`: The EJS template for the room where the video chat takes place.
- `public/script.js`: The client-side JavaScript which handles video streaming and peer-to-peer connections.
- `public/style.css`: The client-side CSS for styling the video grid.

## How It Works

1. When a user accesses the root URL, they are redirected to a unique room URL generated using `uuid`.
2. The server renders the `room.ejs` template for the room URL.
3. The client-side script (`script.js`) sets up video streaming using WebRTC and PeerJS.
4. Socket.io manages the signaling for peer connections and notifies users of new connections and disconnections.

## Dependencies

- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Socket.io](https://socket.io/)
- [PeerJS](https://peerjs.com/)
- [UUID](https://www.npmjs.com/package/uuid)

## Contribution

Your contributions and suggestions are welcome! Here's how you can contribute to this repository:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Contact

If you have any questions or suggestions, please feel free to contact me:

- Email: [atharvdange.dev@gmail.com](mailto:atharvdange.dev@gmail.com)
- LinkedIn: [Atharv Dange](www.linkedin.com/in/atharvdange)
- Twitter: [@atharvdangedev](https://twitter.com/atharvdangedev)

## License

This project is licensed under the ISC License.
