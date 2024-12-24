import "tailwind.config"
import { Metadata } from 'next';
import NavBar from '../ui/up/nav-bar';

export const metadata: Metadata = {
  title: 'Unified Portal',
  description: 'The tryout for the Unified Portal.',
};

export default function Layout ({ children }: { children: React.ReactNode }){
    return(
        <div className="flex h-screen">
            <div className=" fixed top-0 w-full ">
                { /* navbar */ }
                <NavBar />
            </div>
            <div>{children}</div>
            <div>{ /* comment section - section will be divided up later */ }</div>
            <div> { /* footer */ }</div>
        </div>
    );
}