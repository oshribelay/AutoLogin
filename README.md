University Login Autofill Chrome Extension
A Chrome extension that automatically fills in your university website login credentials (username, password, and ID number) and logs you in with a single click! It saves you time by securely storing your credentials and automatically submitting the login form.


Banner Image Placeholder

Features
Autofills username, password, and ID number on the login page.
Automatically clicks the login button after filling credentials.
Securely saves login details using Chrome Storage API.
Easy-to-use setup form for entering credentials.
🛠️ Installation Guide
1. Clone the Repository
First, clone the repository from GitHub to your local machine:

bash
Copy code
git clone https://github.com/yourusername/university-login-autofill.git
cd university-login-autofill
2. Load the Extension in Chrome
Open Chrome and go to chrome://extensions/.

Turn on Developer Mode (toggle is in the upper right corner).

Click Load Unpacked and select the folder where you cloned the repository.


Loading the extension in Chrome

3. Enter Your Login Details
After loading the extension, click on the extension icon in the toolbar. A popup will appear, asking you to input your login details.

Username: Your university username.
Password: Your university password.
ID Number: Your university ID number.
Once entered, your credentials will be saved securely for future use.

🔧 How It Works
Chrome Storage API: User credentials (username, password, ID number) are stored using the chrome.storage.sync API, ensuring that they are securely saved within Chrome’s storage environment.

Content Script: The extension injects a content script (content.js) into your university's login page. It retrieves the stored credentials and autofills the login form fields. The script then automatically submits the form to log you in.

Popup Form: Users can easily manage and update their credentials through the popup form that appears when clicking the extension icon.

📂 File Structure
plaintext
Copy code
university-login-autofill/
│
├── manifest.json        # Chrome extension manifest file
├── popup.html           # Popup form for entering login credentials
├── popup.js             # Logic for saving credentials to Chrome storage
├── content.js           # Autofill script that runs on the university login page
└── README.md            # Project readme file
📸 Screenshots
Popup Form:

The popup form for entering credentials.

Autofill in Action:

Autofilling the login form automatically.

🚀 Usage
Once the extension is installed and you've entered your credentials:

Navigate to your university's login page.
The extension will automatically fill in the username, password, and ID number fields.
It will then automatically submit the form, logging you into the website.
No more typing your login details every time!

🧑‍💻 Development
If you want to make changes or extend the functionality, here’s how to get started:

Clone the repo:

bash
Copy code
git clone https://github.com/oshribelay/UniLoginAutoLogin.git
Navigate into the project directory:

bash
Copy code
cd university-login-autofill
Modify the content.js or popup.js files as needed.

Reload the extension by going to chrome://extensions/, clicking on "Reload" next to your extension.

🔐 Security
This extension stores your credentials securely using Chrome's chrome.storage.sync API, which keeps your data stored locally and can sync it across devices if you have Chrome sync enabled. We recommend not sharing your stored credentials or leaving your machine unattended while logged into your browser.

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
