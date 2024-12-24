import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unified Portal',
  description: 'The tryout for the Unified Portal.',
};

export default function Layout ({ children }: { children: React.ReactNode }){
    return(
        <div>
            <div>{ /* navbar */ }</div>
            <div>{children}</div>
            <div>{ /* comment section - section will be divided up later */ }</div>
            <div> { /* footer */ }</div>
        </div>
    );
}