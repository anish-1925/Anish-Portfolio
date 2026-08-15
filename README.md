# Anish Portfolio

A responsive personal portfolio inspired by the uploaded navy-blue editorial resume design.

## Folder Structure

```text
Anish-portfolio/
│
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
```

## Run Locally

No installation is required.

1. Open the `Anish-portfolio` folder.
2. Double-click `index.html`.
3. The portfolio will open in your browser.

For VS Code, install the **Live Server** extension and right-click `index.html` → **Open with Live Server**.

## Customize

Edit these areas in `index.html`:

- Anish's name
- Phone number
- Email
- GitHub and LinkedIn
- Location
- Education
- Skills
- Projects
- Experience
- Profile description

### Add Anish's Photo

Replace the `.photo-placeholder` element with:

```html
<img src="assets/anish.jpg" alt="Anish" class="profile-image">
```

Then add this CSS:

```css
.profile-image {
  width: 164px;
  height: 164px;
  object-fit: cover;
  border: 5px solid white;
  border-radius: 50%;
}
```

Put the photo at:

```text
assets/anish.jpg
```
