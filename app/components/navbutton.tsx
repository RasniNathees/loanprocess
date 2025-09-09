import { Link } from 'react-router';

const NavButton = ({ children, to, className = '' ,onClick}) => {
    return (
        <Link
            to={to}
            className={` flex w-full px-[12px] py-[15px]  ${className}`}
            onClick={onClick}
        >
            <div className="w-full px-4 ">
                {children}
            </div>
        </Link>
    );
};

export default NavButton;