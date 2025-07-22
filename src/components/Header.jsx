import ThemeToggle from "./ThemeToggle";

function Header(){
    return(
        <header className='w-full flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-900 shadow-md'>
            <div className='flex items-center gap-2'>
                <img src="/images/icon-ke.png" alt="Ícone fogo" className='w-6 h-6' />
                <h1 className='text-lg font-semibold text-[#d15923] dark:text-orange-400 tracking-wide'>Klei Elohim</h1>
            </div>
            <ThemeToggle />
        </header>
    )
}

export default Header;