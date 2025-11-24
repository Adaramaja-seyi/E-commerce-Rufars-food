import { cn } from '../ui/utils';

interface CategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Products', emoji: '🛍️' },
  { id: 'dried-fruits', label: 'Dried Fruits', emoji: '🍊' },
  { id: 'nuts', label: 'Nuts', emoji: '🥜' },
  { id: 'seeds', label: 'Seeds', emoji: '🌱' },
  { id: 'supplements', label: 'Supplements', emoji: '💊' },
];

export function CategoryNav({ selectedCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <div className="bg-white border-b sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all',
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              <span>{category.emoji}</span>
              <span className="text-sm">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
