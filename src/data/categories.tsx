import { CategoryListInterface } from '@interface/interface';
import {
  SparklesIcon,
  ArrowsRightLeftIcon,
  CircleStackIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  PuzzlePieceIcon,
  Square3Stack3DIcon,
  RectangleStackIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

const categories: CategoryListInterface[] = [
  {
    name: 'Terbaru',
    href: 'https://pintu.co.id/market/tags/new',
    Icon: <SparklesIcon className="category-icon" />,
  },
  {
    name: 'DeFi',
    href: 'https://pintu.co.id/market/tags/defi',
    Icon: <BuildingLibraryIcon className="category-icon" />,
  },
  {
    name: 'NFT/Gaming',
    href: 'https://pintu.co.id/market/tags/gaming',
    Icon: <PuzzlePieceIcon className="category-icon" />,
  },
  {
    name: 'CEX',
    href: 'https://pintu.co.id/market/tags/cex',
    Icon: <DevicePhoneMobileIcon className="category-icon" />,
  },
  {
    name: 'DEX',
    href: 'https://pintu.co.id/market/tags/dex',
    Icon: <ArrowsRightLeftIcon className="category-icon" />,
  },
  {
    name: 'Layer-1',
    href: 'https://pintu.co.id/market/tags/layer-1',
    Icon: <Square3Stack3DIcon className="category-icon" />,
  },
  {
    name: 'Infrastructure',
    href: 'https://pintu.co.id/market/tags/infrastructure',
    Icon: <CircleStackIcon className="category-icon" />,
  },
  {
    name: 'Lending',
    href: 'https://pintu.co.id/market/tags/lending',
    Icon: <CurrencyDollarIcon className="category-icon" />,
  },
  {
    name: 'Layer-2',
    href: 'https://pintu.co.id/market/tags/layer-2',
    Icon: <RectangleStackIcon className="category-icon" />,
  },
  {
    name: 'Ekosistem Stablecoin',
    href: 'https://pintu.co.id/market/tags/stablecoin',
    Icon: <BanknotesIcon className="category-icon" />,
  },
];

export default categories;
