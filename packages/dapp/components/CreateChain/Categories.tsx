import Select from 'react-select';

import { useCategories } from '@/hooks/useCategories';
import { MongoCategory } from '@/lib/mongodb/types';

export const Categories: React.FC<{
  setCategories: (categories: MongoCategory[]) => void;
  defaultValue?: MongoCategory[];
  numberOfCategories: number;
}> = ({ setCategories, defaultValue = [], numberOfCategories }) => {
  const { categories: allCategories, fetching: fetchingCategories } =
    useCategories();

  return (
    <Select
      onChange={v => setCategories(v as MongoCategory[])}
      isMulti
      defaultValue={defaultValue}
      isOptionDisabled={() => numberOfCategories >= 3}
      placeholder="Select up to 3 categories"
      styles={{
        multiValue: b => ({
          ...b,
          background: 'white',
        }),
        multiValueLabel: b => ({
          ...b,
          color: 'white',
        }),
        multiValueRemove: b => ({
          ...b,
          ':hover': { background: 'white' },
        }),
        control: (b, s) => ({
          ...b,
          color: 'white',
          background: 'white',
          borderWidth: '1px',
          width: '100%',
          borderColor: 'black',
          ':hover': {
            borderColor: 'black',
          },
          boxShadow: s.isFocused ? '0px 0px 0px 2px #ad90ff' : 'none',
        }),
        menu: b => ({
          width: '100%',
          ...b,
          background: 'white',
          border: 'black',
        }),
        option: (b, s) => ({
          ...b,
          background: s.isFocused ? '#A9A1F7' : 'white',
        }),
      }}
      isLoading={fetchingCategories}
      options={allCategories}
    />
  );
};
