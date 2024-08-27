# Telegram Mini App Boilerplate with React and Vite

This project provides a boilerplate for creating Telegram Mini Apps using React and Vite. It's designed to help you quickly set up and start developing your Telegram Mini App with modern web technologies.

## 🚀 Features

- ⚡️ Fast development with [Vite](https://vitejs.dev/)
- ⚛️ [React](https://reactjs.org/) for building user interfaces
- 📱 [Telegram Mini App SDK](https://github.com/twa-dev/SDK) integration
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- 📦 [TypeScript](https://www.typescriptlang.org/) for type-safe code
- 🧭 [React Router](https://reactrouter.com/) for navigation
- 🧹 [ESLint](https://eslint.org/) for code linting
- 🐶 [Husky](https://typicode.github.io/husky/) for Git hooks
- 🚨 [Commitlint](https://commitlint.js.org/) for conventional commit messages

## 📚 Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/etherwave-labs/telegram-mini-app-react-boilerplate.git
   cd telegram-mini-app-react-boilerplate
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

### Development

To start the development server:
```bash
yarn dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to see your app.

### Building for Production

To build the app for production:

```bash
npm run build
```
or
```bash
yarn build
```

This will generate a production-ready build in the `dist` folder.

## 🤖 Attaching Your Mini App to a Telegram Bot

To make your Mini App accessible through Telegram, you need to attach it to a bot. Here's how to do it using BotFather:

1. Open Telegram and search for [@BotFather](https://t.me/botfather).

2. Start a chat with BotFather and use the `/newbot` command to create a new bot if you haven't already.

3. Once you have a bot, use the `/mybots` command to list your bots.

4. Select the bot you want to attach your Mini App to.

5. Choose the "Bot Settings" option.

6. Select "Menu Button" or "Menu Buttons" (depending on your BotFather version).

7. Choose "Configure menu button" or "Add menu button" to add a new button.

8. Send the text you want to appear on the button (e.g., "Open Mini App").

9. For the URL, enter the URL where your Mini App is hosted. If you're still developing, you can use your local development URL (e.g., `http://localhost:5173`). For production, use your deployed app URL.

10. BotFather will confirm that the menu button has been added to your bot.

Now, when users interact with your bot, they'll see a menu button that opens your Mini App.

Remember to update the URL to your production URL before releasing your bot to the public!

## 📖 Documentation

For more information on how to develop Telegram Mini Apps, refer to the following resources:

- [Official Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps#initializing-mini-apps)
- [Telegram Mini Apps Community Documentation](https://docs.telegram-mini-apps.com/)

## 📜 Scripts

- `dev`: Start the development server
- `build`: Build the project for production
- `lint`: Run ESLint to check for code issues
- `preview`: Preview the production build locally

## 🤝 Contributing
This boilerplate is maintained by [Etherwave Labs](https://etherwavelabs.com).

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/your-repo-name/issues).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
