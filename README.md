# README.md

This project was created using `Arkain Snap`.

## Environment and Technology Stack

| Component       | Version       | Description                              |
|-----------------|---------------|------------------------------------------|
| Operating System| Ubuntu 22.04  | Linux distribution for development       |
| Node.js         | 20.18.3       | JavaScript runtime environment            |
| npm             | 10.8.2        | Node package manager                      |
| React           | 18            | Frontend UI library                       |
| Vite            | Latest        | Fast frontend build tool and dev server  |
| CSS             | Custom        | Styling with animations and responsive design |

## How the Project Was Created

- Initialized a React project with Vite as the bundler.
- Created an HTML entry point to host the React app.
- Configured Vite for development and build processes.
- Developed React components for Navbar, Hero, Featured Products, Categories, Testimonials, Newsletter, and Footer.
- Styled each component with custom CSS including animations and responsive layouts.
- Hardcoded product data in a static JavaScript file.
- Defined project dependencies and scripts in `package.json`.
- Installed all dependencies using npm.
- Started the development server to preview the application.

## How to Run the Project

1. Clone the repository or download the project files.
2. Open a terminal in the project root directory.
3. Run the following command to install dependencies:
   
   npm install
   ```
4. Start the development server with:
   ```
   npm run dev
   ```
5. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:3000`).

### Potential Errors and Solutions

- **Error:** `npm: command not found`  
  **Solution:** Ensure Node.js and npm are installed correctly. On Ubuntu, you can install Node.js via NodeSource or nvm.

- **Error:** Port 3000 already in use  
  **Solution:** Either stop the process using port 3000 or configure Vite to use a different port in `vite.config.js`.

- **Error:** Missing dependencies or failed install  
  **Solution:** Delete `node_modules` and `package-lock.json` and run `npm install` again.

## Navigation Instruction (Translated)

Desde el menú superior, navega a 'Contenedor -> URL y Puerto de Ejecución -> URL y Puerto Registrados -> Haz clic en el botón de acceso directo en la fila seleccionada.'

## Directory Structure

```
.
├── index.html
├── package.json
├── vite.config.js
├── src
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── data
│   │   └── products.js
│   └── components
│       ├── Navbar.jsx
│       ├── Navbar.css
│       ├── Hero.jsx
│       ├── Hero.css
│       ├── FeaturedProducts.jsx
│       ├── FeaturedProducts.css
│       ├── Categories.jsx
│       ├── Categories.css
│       ├── Testimonials.jsx
│       ├── Testimonials.css
│       ├── Newsletter.jsx
│       ├── Newsletter.css
│       ├── Footer.jsx
│       └── Footer.css
```
```# test1
