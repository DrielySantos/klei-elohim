import { useState } from 'react';
import { Moon, Sun} from 'lucide-react';

function Header(){
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return(
        <header className='w-full flex items-center justify-between px-4 py-2 bg-transparent'>
            <div className='flex items-center gap-2'>
                <img src="/images/icon-ke.png" alt="Ícone fogo" className='w-6 h-6' />
                <h1 className='text-lg font-semibold text-[#d15923] tracking-wide'>Klei Elohim</h1>
            </div>

            <button
                onClick={toggleDarkMode}
                className="w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-all"
            >
                <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        darkMode ? "translate-x-5" : ""
                    }`}
                ></div>
            </button>
        </header>
    )
}

export default Header;