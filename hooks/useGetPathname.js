'use client';

import { usePathname } from "next/navigation";

export const useGetPathname = () => {
    const pathname = usePathname();
    console.log(pathname)

    const path = pathname.slice(1).firstLetterCapital()
    return path;
}