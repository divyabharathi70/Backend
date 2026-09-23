import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="flex items-center justify-between bg-blue-600 px-8 py-4 text-white shadow-md">

                <h1 className="text-2xl font-bold">
                    My Website
                </h1>

                <div className="flex gap-6">
                    <p className="cursor-pointer hover:text-yellow-300">
                        Home
                    </p>

                    <p className="cursor-pointer hover:text-yellow-300">
                        Courses
                    </p>

                    <p className="cursor-pointer hover:text-yellow-300">
                        Contact
                    </p>

                    <p className="cursor-pointer hover:text-yellow-300">
                        About
                    </p>
                </div>

            </nav>
        );
    }
}

export default Navbar;