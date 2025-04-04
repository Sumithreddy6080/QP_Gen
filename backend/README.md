# Question Paper Generator (Qp_gen)

This project is a **Question Paper Generator** that allows users to upload an Excel file containing a question bank and generate a set of questions based on predefined criteria.

## Features

- Upload question bank in Excel format (XLSX/CSV).
- Parse and process the uploaded file to extract questions.
- Generate a set of questions based on units and other criteria.
- RESTful API endpoints for file upload and question generation.

## Tech Stack

- **Backend**: Node.js, Express.js
- **File Handling**: Multer, XLSX
- **Utilities**: Axios, CORS

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Qp_gen
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create an `uploads` directory (if not created automatically).

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. API Endpoints:
   - **POST** `/api/qs/upload`: Upload an Excel file containing the question bank.
   - **GET** `/api/qs/generate`: Generate a set of questions.

3. Upload an Excel file with the following columns:
   - `Unit`, `Question`, `B.T Level`, `Subject Code`, `Subject`, `Branch`, `Regulation`, `Year`, `Sem`, `Month`, `Image Url`.

4. Use the `/generate` endpoint to retrieve generated questions.

## Project Structure

```
Qp_gen/
├── controllers/         # API controllers
├── routes/              # API routes
├── utils/               # Utility functions (e.g., file parsing, multer config)
├── logic/               # Business logic (e.g., question generation)
├── uploads/             # Uploaded files (temporary storage)
├── server.js            # Entry point
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Dependencies

- `express`: Web framework for Node.js.
- `multer`: Middleware for handling file uploads.
- `xlsx`: Library for parsing Excel files.
- `cors`: Middleware for enabling CORS.
- `axios`: HTTP client for making requests.

## License

This project is licensed under the ISC License.
