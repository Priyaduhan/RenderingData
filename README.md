This is a responsive React-based web app to view and add fashion items (such as clothes and accessories) with features like a form with validation, image carousels, modal previews, and localStorage integration to persist data.

✨ Features
🔄 View Items: Displayed in a responsive card layout using Tailwind CSS.

➕ Add Items: Add a new item with name, type, description, cover image, and multiple image URLs.

✅ Form Validation: Built using react-hook-form with validation rules:

Required fields

Minimum length

Custom validation (e.g., image URLs must start with http/https)

📦 Local Storage:

Added items are stored and persisted in the browser's localStorage.

Data remains available even after page reloads.

🪟 Modal Popup:

Clicking on an item card opens a modal showing a larger view.

The modal uses useRef to allow closing by clicking outside.

🖼️ Image Carousel:

Display multiple product images in a slick carousel inside the modal using react-slick.

🛠️ Tech Stack
React.js (Functional Components)

Tailwind CSS (for styling)

React Hook Form (for handling form validation and input)

React Slick Carousel (react-slick and slick-carousel)

React Router DOM (for navigation)

localStorage (to save data persistently)

Icons from react-icons
