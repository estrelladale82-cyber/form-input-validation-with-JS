# 📋 User Registration Form

A responsive user registration form built with HTML, CSS, and vanilla JavaScript. The form features real-time input validation and alert-based feedback to guide users through successful registration.

---

## 🌐 Live Preview

> Open `index.html` in any modern browser to run the project locally. No installations or dependencies required.

---

## 📁 Project Structure

```
user-registration-form/
├── index.html       # Form structure and styling
├── script.js        # Validation logic and event listeners
└── README.md        # Project documentation
```

---

## ✨ Features

- **Real-time validation** — error messages appear as the user types, and clear automatically when the input is corrected
- **Blur validation** — errors also trigger when a user clicks away from a field without filling it in
- **Alert-based feedback** — success and error alerts notify the user on form submission
- **Form reset** — all fields clear automatically after a successful submission
- **Responsive layout** — clean, centered design that works across screen sizes

---

## 🛡️ Validation Rules

| Field | Rule |
|---|---|
| Full Name | Must not be empty and must contain at least 2 words |
| Email Address | Must follow a valid format (e.g. `example@domain.com`) |
| Password | Minimum 8 characters, including one uppercase letter, one number, and one special character (`!@#$%^&*`) |
| Confirm Password | Must match the Password field exactly |
| Age | Must be 18 or older |

---

## 🧠 JavaScript Concepts Used

- **DOM Selection** — `document.getElementById()` to target form elements
- **Objects** — `validationRules` object stores all validation rules and error messages in one place
- **Functions** — individual validation functions for each field (`validateFullName`, `validateEmail`, etc.)
- **If/Else Statements** — control flow logic to determine pass or fail for each field
- **Event Listeners** — `input`, `blur`, and `submit` events handle real-time and submission validation
- **Regular Expressions (Regex)** — used to validate email format and password strength
- **`parseInt()` and `isNaN()`** — used to safely parse and validate the age field

---

## ⚙️ How It Works

1. The user fills in the registration form
2. As they type, each field is validated in real time using `input` and `blur` event listeners
3. If a field fails validation, a red error message appears below it
4. When the user fixes the input, the error clears automatically
5. On clicking **Signup**, the master `validateForm()` function runs all checks
6. If all fields pass → a success alert is shown and the form resets
7. If any field fails → an error alert prompts the user to fix their inputs

---

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Fill in the form and test the validation

```bash
git clone https://github.com/your-username/user-registration-form.git
cd user-registration-form
open index.html
```

---

## 🎨 Styling Highlights

- Soft radial gradient background
- Rounded input fields and button
- Inline SVG icons for each form field
- Red error messages displayed below each input using CSS `span` styling
- Clean whitesmoke form container with rounded corners

---

## 🔮 Possible Future Improvements

- Add password visibility toggle
- Add strength indicator for the password field
- Connect to a backend or API to handle real registrations
- Add accessibility improvements (ARIA labels, keyboard navigation)
- Mobile responsiveness enhancements

---

## 👨‍💻 Built With

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
