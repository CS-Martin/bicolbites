'use client';

import * as React from 'react';
import { ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { ListItem } from '@/components/ui/list-item';

const SortRecipesButton: React.FC = (): JSX.Element => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <ArrowDownAZ size={18} />{' '}
            <span className="ms-1 hidden sm:block">Sort</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[330px] p-6 lg:w-[360px]">
              <ListItem onClick={() => {}}>
                <span className="flex items-center justify-between">
                  Sort by Name (A - Z)
                  <ArrowDownAZ size={20} />
                </span>
              </ListItem>
              <ListItem onClick={() => {}}>
                <span className="flex items-center justify-between">
                  Sort by Name (Z - A)
                  <ArrowUpZA size={20} />
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default SortRecipesButton;
