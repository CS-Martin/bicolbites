import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const HomeSearch: React.FC = (): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (key: string) => {
    const params = new URLSearchParams(searchParams);

    if (key) {
      params.set('search', key);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="container relative flex items-center">
      <Search size={24} />
      <Input
        type="text"
        placeholder="Search for recipes"
        className="border-none py-7 ps-10 focus-visible:ring-transparent"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('search')?.toString()}
      />
    </div>
  );
};

export default HomeSearch;
