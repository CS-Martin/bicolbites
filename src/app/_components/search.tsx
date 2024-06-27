import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const HomeSearch: React.FC = (): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (inputValue: string) => {
    const params = new URLSearchParams(searchParams);

    if (inputValue) {
      params.set('search', inputValue);
    } else {
      params.delete('search');
    }

    /**
     * Encountered a nextjs bug that scrolls to the top
     * on every change of the path/url
     */
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
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
