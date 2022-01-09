import { NavLink, useLocation } from "react-router-dom";
const styles = {
    activeTab: "Nav-SelectedPrimaryItem",
    inactiveTab: "Nav-PrimaryItem",
    activeTabMobile: "Nav-SelectedItemMobile",
    inactiveTabMobile: "Nav-UnselectedItemMobile"
};
export default function NavBar() {
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-2xl">
            <div className="max-w-6xl mx-auto px-4 py-4 sm:py-2">
                <div className="flex space-x-4">
                    <div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={() => { document.getElementById("navmobile").classList.toggle("hidden"); }}>
						<svg className="Nav-MobileStyle"
                            x-show="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
                    <div className="Nav-Logo">
                        <a href="/" className="text-2xl font-BreezeHeader font-bold dark:text-gray-100 text-gray-900">
                            MineRIP
                        </a>
                    </div>
                    <div className="Nav-CPrimary">
						<NavLink to="/" className={(navData) => navData.isActive ? styles.activeTab : styles.inactiveTab}>
                            Home
                        </NavLink>
						<a href="https://buy.mine.rip/" className={styles.inactiveTab} target="_blank" rel="noreferrer noopener">
                            Store
                        </a>
                        <NavLink to="/staff" className={(navData) => navData.isActive ? styles.activeTab : styles.inactiveTab}>
                            Staff
                        </NavLink>
					</div>
                </div>
            </div>
            <div className="hidden md:hidden lg:hidden xl:hidden 2xl:hidden mobile-menu" id="navmobile">
				<ul>
					<li><NavLink to="/" className={(navData) => navData.isActive ? styles.activeTabMobile : styles.inactiveTabMobile}>Home</NavLink></li>
					<li><a href="https://buy.mine.rip/" className={styles.inactiveTabMobile} target="_blank" rel="noreferrer noopener">Store</a></li>
					<li><NavLink to="/staff" className={(navData) => navData.isActive ? styles.activeTabMobile : styles.inactiveTabMobile}>Staff</NavLink></li>
					<li><NavLink to="/a" className={(navData) => navData.isActive ? styles.activeTabMobile : styles.inactiveTabMobile}>a</NavLink></li>
				</ul>
			</div>
        </nav>
    );
};