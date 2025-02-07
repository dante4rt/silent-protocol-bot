# silent-protocol-bot

Automation bot for interacting with the Silent Protocol testnet.

## Getting Started

1. **Visit the Silent Protocol Testnet Ceremony**
   - Go to [https://ceremony.silentprotocol.org/](https://ceremony.silentprotocol.org/).

2. **Retrieve Your Bearer Token**

   **Option 1: Using Network Tab**
   - Open your browser's developer tools (usually by pressing `F12` or `Ctrl+Shift+I`).
   - Navigate to the "Network" tab.
   - Reload the page.
   - Look for `fetch` or `xhr` requests related to the ceremony.
   - Click on one of these requests and go to the "Headers" section.
   - Find the `Authorization` header and copy the token (the part after `Bearer`). Do **not** include the `Bearer` text.

   **Option 2: Using Console**
   - Open your browser's developer tools and go to the "Console" tab.
   - Run the following command to retrieve the token from local storage:

     ```javascript
     console.log(localStorage.getItem('silent_jwt'));
     ```

   - Copy the displayed token.

3. **Save Your Tokens**
   - Create a file named `tokens.txt` in the project root directory.
   - Add each token on a new line.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/dante4rt/silent-protocol-bot.git
   cd silent-protocol-bot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Bot

Start the bot with the following command:

```bash
npm start
```

## Notes

- The bot will use the tokens from `tokens.txt` to interact with the Silent Protocol backend.
- Ensure your tokens are valid to avoid errors.

## Donations

If you would like to support the development of this project, you can make a donation using the following addresses:

- **Solana**: `GLQMG8j23ookY8Af1uLUg4CQzuQYhXcx56rkpZkyiJvP`
- **EVM**: `0x23686f799e7C1E8158208882bAD2BD90A5C59256`
- **BTC**: `bc1p9za9ctgwwvc7amdng8gvrjpwhnhnwaxzj3nfv07szqwrsrudfh6qvvxrj8`

## License

This project is licensed under the [MIT License](LICENSE).
