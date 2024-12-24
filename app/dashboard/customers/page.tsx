import Table from '@/app/ui/customers/table';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};
 
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <Table query={query}/>
    </div>
  );
}