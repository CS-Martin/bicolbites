import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const HomeSearch: React.FC = (): JSX.Element => {
  return (
    <div className="container relative flex items-center">
      <Search size={24} className="absolute" />
      <Input
        placeholder="Search for recipes"
        className="border-none py-7 ps-10 focus-visible:ring-transparent"
      />
    </div>
  );
};

export default HomeSearch;
