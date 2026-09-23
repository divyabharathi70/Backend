const Navbar = () => {
    return (
        <nav className="bg-amber-800 text-white px-8 py-4">
            <div className="flex justify-end gap-10">
                <div className="cursor-pointer hover:text-amber-200 transition">
                    Home
                </div>

                <div className="cursor-pointer hover:text-amber-200 transition">
                    Categories
                </div>

                <div className="cursor-pointer hover:text-amber-200 transition">
                    Contact
                </div>

                <div className="cursor-pointer hover:text-amber-200 transition">
                    About
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  