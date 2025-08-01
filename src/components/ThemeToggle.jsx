// import { useEffect, useState } from "react";

// function ThemeToggle(){
//     const [darkMode, setDarkMode] = useState(false);

//     useEffect(() => {
//         console.log("Dark mode ativo?", darkMode);
//         if(darkMode){
//             document.documentElement.classList.add('dark');            
//         }else{
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);

//     return(
//         <button 
//             onClick={() => setDarkMode(!darkMode)}
//              className="w-10 h-5 bg-gray-400 rounded-full relative"   
//         >
//             <div
//         className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${
//           darkMode ? "left-5" : "left-1"
//         }`}
//             ></div>
//         </button>
//     )
// }

// export default ThemeToggle;


import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-yellow-500"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          // Ícone de Sol (Sun)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          // Ícone de Lua (Moon)
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
  );
};

export default ThemeToggle;
