![Mei Misaki](https://github.com/user-attachments/assets/b4ac1f9a-933f-45b3-a1b1-ec8ae810c0b5)

A WhatsApp bot powered by **Ruby (Sinatra)** with a **Node.js bridge** using [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).  
This project is currently in **Beta** stage and built for experimental and learning purposes.

⚠️ **Status:** Beta (not stable)

---

## ✨ Features
- 🔗 Node.js → Ruby bridge (via HTTP)  
- ✅ Auto-reply to WhatsApp messages  
- ✅ Example commands (`ping`,`hello`)  
- ⚠️ Replies to all messages (can be marked as spam)  
- 🚫 No opt-in/opt-out system  
- 🚫 No rate limiting  

---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/mitonohikari74-maker/ruby-bot
cd ruby-bot

2. Install Ruby dependencies

Make sure you have Ruby 3.x + Bundler

.

bundle install

3. Install Node.js dependencies

Use Node.js v20+ (recommended: nvm

).

npm install whatsapp-web.js qrcode-terminal axios puppeteer

🚀 Running the Bot

Open 2 terminals:
Terminal 1 — Start Ruby (Sinatra) server

ruby bot.rb

Server runs at http://localhost:4000.
Terminal 2 — Start Node.js bridge

node bridge.js

On first run, the bot will display a QR Code in your terminal.
Scan it with WhatsApp to log in.
💡 Usage

    The bot will automatically reply to messages.

    Example command:

ping

Bot response:

pong!

⚠️ Warning

    This bot is spam-prone, as it replies to all messages.

    Using it in groups may result in your WhatsApp account being banned.

    Recommended only for testing/experimentation on a secondary account.

📂 Project Structure

ruby-bot/
├── bot.rb         # Ruby backend (Sinatra)
├── bridge.js      # Node.js bridge (whatsapp-web.js → Ruby)
├── Gemfile        # Ruby dependencies
└── README.md      # Documentation

📖 License

This project is licensed under the MIT License

.
👨‍💻 Author

Created by Mito — an open-source project (Beta).
This bot will be further developed into a safer and more stable version 🚀
