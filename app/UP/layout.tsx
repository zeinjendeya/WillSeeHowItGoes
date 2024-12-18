import '@/app/ui/global.css';

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