# URL Shortener

This is a simple URL shortener application built with Node.js.

## Features

- Shorten long URLs into shorter, more manageable ones.
- Redirect users to the original long URL when they access the shortened version.
- Customizable short codes.
- Basic statistics tracking.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

```bash
    git clone https://github.com/your-username/url-shortener.git
```

2. Navigate to the project directory:
```bash
    cd url-shortener
```

3. Install the dependencies:

```bash
    npm install
```

4. Set up environment variables:
- Create a `.env` file in the root directory.
- Add the following environment variable:
  ```
  API_KEY=your_api_key
  ```
- Replace `your_api_key` with your own API key for URL shortening service.

5. Start the application:

```bash
    npm start
```

6. Open your web browser and access the application at `http://localhost:3000`.

## API Documentation

The following APIs are available:

- `POST /shorten`: Shorten a URL.
- Request Body:
 ```json
 {
   "url": "https://www.example.com"
 }
 ```
- Response:
 ```json
 {
   "shortUrl": "http://localhost:3000/abc123"
 }
 ```

- `GET /:shortCode`: Redirect to the original long URL associated with the short code.

- `GET /stats/:shortCode`: Get statistics for a specific shortened URL.
- Response:
 ```json
 {
   "shortCode": "abc123",
   "originalUrl": "https://www.example.com",
   "visits": 10
 }
 ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
