import { Link } from 'react-router';

type NavButtonProps = {
    children: React.ReactNode;
    to: string;
    className?: string;
    onClick?: () => void;
}

const NavButton = ({ children, to, className = '', onClick }: NavButtonProps) => {
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