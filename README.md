# 🌐 University Login Autofill Extension

This Chrome extension automatically fills your **username**, **password**, and **ID number** on your university login page and submits the form. Skip the hassle of manual login and save time!

![Autofill Demo](https://via.placeholder.com/800x200.png?text=Autofill+Extension+Demo)

## 🚀 Features

- **Autofill Credentials**: Automatically enters your username, password, and ID number.
- **Auto-Submit**: Submits the login form for you after filling.
- **Secure Storage**: Your login details are safely stored in Chrome's storage.

## 🎨 Design Overview

The extension consists of two main parts:
1. **Popup Interface**: A form where you input your login credentials.
2. **Autofill Script**: Automatically fills and submits the login form.

### File Structure

```
university-login-autofill-extension/
│
├── manifest.json       # Chrome extension manifest
├── popup.html          # HTML popup for entering credentials
├── popup.js            # JavaScript for saving credentials to Chrome storage
├── content.js          # JavaScript for autofilling and submitting the form
└── README.md           # This documentation
```
## 📥 Installation

### Step 1: Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/oshribelay/AutoLogin.git
```

### Step 2: Open Chrome Extensions Page
1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer Mode** (toggle in the top-right corner).

### Step 3: Load the Extension
1. Click **Load unpacked**.
2. Select the folder where you cloned this repository.
3. The extension will now appear in your Chrome extensions.

### Step 4: Enter Your Login Details
1. Click the extension icon in the Chrome toolbar.
2. Enter your **username**, **password**, and **ID number** in the popup.
3. Click **Save**.

The extension is now configured to autofill your login information on your university's login page.

## ⚙️ How It Works

- **Popup Form**: Users input their credentials into the popup form, and this data is stored in Chrome's `storage.sync`.

- **Autofill Script**: When the user navigates to the university's login page, the extension retrieves the saved credentials and automatically fills the form.

- **Auto-Submit**: Once the form is filled, the extension automatically submits it.

---

## 🛠️ Development

### Requirements
- Chrome browser
- Basic understanding of JavaScript and HTML

### Modifying the Extension

If you need to customize the behavior of the extension:

- Modify `content.js` to change how the form is autofilled or submitted.
- Modify `popup.js` if you need to add more fields or improve the logic of saving credentials.

To reload the extension after making changes:
1. Go to `chrome://extensions/`.
2. Click **Reload** next to the extension.

---

## 🔒 Security

Your credentials are stored securely using Chrome's `storage.sync` API. No external service can access this data. Be cautious when sharing your extension or using it on sensitive accounts.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


