# Personal Portfolio

A modern, responsive, and beautifully animated personal portfolio website built with React and Tailwind CSS. The portfolio features a sleek dark mode aesthetic, smooth scroll animations, and a well-structured component architecture.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, Vite, and the latest Tailwind CSS v4.
- **Premium Design**: Dark theme with glassmorphism effects, subtle gradients, and custom utility integrations.
- **Smooth Animations**: Powered by `framer-motion` for fluid entry animations and interactive hover effects.
- **Responsive Layout**: fully mobile-responsive and optimized for all screen sizes.
- **Component-Driven**: Clean architecture with reusable UI components (Buttons, Cards, Sections).
- **Iconography**: Integrated with `react-icons` (Feather Icons) for a consistent and professional look.

## 💻 Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📂 Project Structure

```text
Frontend/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and media files
│   ├── components/       # React components
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Hero, About, Skills, Projects, Contact
│   │   └── ui/           # Reusable micro-components (Button, Card, Section)
│   ├── lib/              # Utility functions (e.g., class merging)
│   ├── pages/            # Page components (Home.jsx)
│   ├── styles/           # Global styles and Tailwind configuration
│   ├── App.jsx           # Main application entry point
│   └── main.jsx          # React DOM render entry
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository (or download the source code).
2. Navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

## 🎨 Customization

This portfolio is designed to be easily customizable.

- **Content**: Update the sections (e.g., `About.jsx`, `Projects.jsx`, `Skills.jsx`) with your own personal data, text, and images.
- **Styling**: Modify the color palette in `src/styles/index.css` under the `@theme` directive to match your brand.
- **Assets**: Replace placeholder images in the `src/assets/` directory and update the corresponding component imports (e.g., `Hero.jsx`).

## 📄 License

Distributed under the MIT License.
