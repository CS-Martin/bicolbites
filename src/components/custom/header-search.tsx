import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Search } from 'lucide-react';
import { DropdownMenuShortcut } from '../ui/dropdown-menu';

const HeaderSearch = () => {
    return (
        <Dialog>
            <DialogTrigger className="flex items-center text-white">
                <Search size={18} className="mr-2" />
                <DropdownMenuShortcut className="font-bold">
                    ⌘S
                </DropdownMenuShortcut>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default HeaderSearch;
