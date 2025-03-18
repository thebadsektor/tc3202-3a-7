import React, { useState } from 'react'
import { 
    AiFillHome, AiFillBook, AiFillStar, AiFillPhone, AiOutlineMenu, AiOutlineClose 
} from 'react-icons/ai'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(sectionId);
        }
    }

    const navItems = [
        { name: 'Home', id: 'home', icon: <AiFillHome /> },
        { name: 'Courses', id: 'courses', icon: <AiFillBook /> },
        { name: 'Features', id: 'features', icon: <AiFillStar /> },
        { name: 'Contact', id: 'contact', icon: <AiFillPhone/> }
    ]

    return (
        <>
            {/* Top Navigation Bar */}
            <header className='absolute top-4 left-0 px-7 w-full h-[60px] z-20 flex items-center space-x-6'>
                {/* Logo */}
                <span className='text-2xl font-bold bg-gradient-to-r from-[#5CD4CC] to-[#B2ECE6] bg-clip-text text-transparent cursor-pointer'>
                    LOGO
                </span>

                {/* Desktop Navigation */}
                <nav className='hidden lg:flex desktop-nav w-full max-w-[1120px] mx-auto'>
                    <ul className='flex space-x-6'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`flex items-center px-5 py-2 rounded-full transition-all duration-300 space-x-3 cursor-pointer ${
                                        activeSection === item.id
                                            ? 'bg-[#FFC107] text-white font-medium shadow-md'
                                            : 'font-medium bg-[#F8F9FA] text-[#333] border border-gray-200 hover:bg-gray-200'
                                    }`}
                                >
                                    {activeSection === item.id && (
                                        <span className='flex items-center justify-center w-6 h-6 rounded-full bg-[#F8F9FA] text-[#FFC107]'>
                                            {item.icon}
                                        </span>
                                    )}
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    className='lg:hidden block text-3xl text-gray-700 focus:outline-none hamburger-menu cursor-pointer'
                    onClick={() => setMenuOpen(true)}
                >
                    <AiOutlineMenu />
                </button>
            </header>

            {/* Mobile Sidebar Navigation */}
            <aside 
                className={`fixed top-0 left-0 h-full w-64 bg-[#F8F9FA] shadow-lg z-50 transform ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}
            >
                {/* Close Button */}
                <button 
                    className='absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-900'
                    onClick={() => setMenuOpen(false)}
                >
                    <AiOutlineClose />
                </button>

                {/* Sidebar Menu Items */}
                <nav className='mt-16 px-6'>
                    <ul className='space-y-4'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        scrollToSection(item.id)
                                        setMenuOpen(false)
                                    }}
                                    className={`flex items-center w-full px-5 py-3 rounded-md transition-all duration-300 space-x-3 cursor-pointer ${
                                        activeSection === item.id
                                            ? 'bg-[#FFC107] text-white font-semibold shadow-md'
                                            : 'text-gray-700 font-medium bg-gray-100 hover:bg-gray-200'
                                    }`}
                                >
                                    <span className='text-xl'>{item.icon}</span>
                                    <span>{item.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Overlay to Close Sidebar */}
            {menuOpen && (
                <div 
                    className='fixed inset-0 z-40 bg-black/50'
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </>
    )
}

export default Navbar
