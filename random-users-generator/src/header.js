import  './App.css'

const Header = () => {
    return (
        <header>
        <div className='w-full text-white text-center p-9 bg-blue-950'>
            <h1 className='font-extrabold sm:text-4xl md:text-5xl text-xl  '>Random User Data Generator</h1>
            <p className='sm:text-lg md:text-xl  text-xs pt-2'>A page for generating random user page like lorem ipsum.</p>
        </div>
        </header>
    )
}


export default Header;