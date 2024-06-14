"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    
    return (
        <div>
            <Link href={`/?genre=${param}`} className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-2 decoration-amber-500 rounded-lg' : ''}`}>
                {title}
            </Link>
        </div>
    );
};

export default NavbarItem;
