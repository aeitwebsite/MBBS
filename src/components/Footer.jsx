export default function Footer() {
    return (
        <>
            <footer className="w-full bg-[#1e1919] text-white py-12">
                <div className="max-w-7xl mx-auto px-6">

                    {/* FLEX CONTAINER */}
                    <div className="flex flex-col md:flex-row gap-12">

                        {/* CONTACT US - LOGO ONLY */}
                        <div className="flex-1 -mt-6">
                            

                            <img
                                src="/images/logo_home.png"
                                alt="Alvas Logo"
                                className="w-28"
                            />
                        </div>

                        {/* CONTACT US - DETAILS */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <p className="leading-relaxed text-sm mb-4">
                                Alva&apos;s Medical Centre <br />
                                Dakshina Kannada, Karnataka.
                            </p>

                            <p className="text-sm">Phone No: 9743700154</p>
                            <p className="text-sm">Mobile No: 8150079070</p>
                        </div>

                        {/* CAMPUS */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">Campus</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/campus-life/celebrations" className="hover:text-gray-300">
                                        Celebrations
                                    </a>
                                </li>
                                <li>
                                    <a href="/about/aef/colleges-list" className="hover:text-gray-300">
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a href="/footer-links/literature" className="hover:text-gray-300">
                                        Literature
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* DEPARTMENTS */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">Departments</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/departments/anatomy" className="hover:text-gray-300">
                                        Pre-Clinical
                                    </a>
                                </li>
                                <li>
                                    <a href="/departments/physiology" className="hover:text-gray-300">
                                        Para-Clinical
                                    </a>
                                </li>
                                <li>
                                    <a href="/departments/biochemistry" className="hover:text-gray-300">
                                        Clinical
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* ABOUT */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">About</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="/college" className="hover:text-gray-300">
                                        College
                                    </a>
                                </li>
                                <li>
                                    <a href="/activities" className="hover:text-gray-300">
                                        Activities
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    );
}
