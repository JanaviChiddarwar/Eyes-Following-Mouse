# Eyes-Following-Mouse
This is a simple and interactive front-end project where a cartoon face follows the user's mouse movement with its eyes. The pupils dynamically move toward the cursor using JavaScript calculations, creating a fun and engaging UI effect.

# 🚀 Features

• Mouse-tracking eye animation

• Smooth pupil movement using trigonometry

• Clean and responsive layout

• Pure HTML, CSS, and JavaScript (no libraries)

# 🛠 Technologies Used

• HTML5 – Structure of the face, eyes, and mouth

• CSS3 – Styling, gradients, shadows, and layout

• JavaScript (Vanilla JS) – Mouse tracking and pupil movement logic

# ⚙️ How It Works

1. The JavaScript listens for the mousemove event on the page.

2. It calculates the center position of each eye using getBoundingClientRect().

3. Using Math.atan2(), it finds the angle between the cursor and the eye center.

4. Math.cos() and Math.sin() are used to calculate the X and Y movement of the pupil.

5. The pupil is moved using CSS transform: translate(), making it appear to follow the cursor.

# 🎯 Learning Purpose

This project demonstrates:

• DOM manipulation

• Event handling in JavaScript

• Basic trigonometry for animation

• CSS positioning and styling

# 💡 Future Improvements

• Blinking animation

• Mobile touch support

• Multiple animated faces

• More realistic eye movement
