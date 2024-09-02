export type QCMetadata = {
  name: string;
  description: string;
  image_url?: string;
  animation_url?: string;
  external_url?: string;
  slug?: string;
  categories?: string[];
  attributes?: {
    trait_type?: string;
    value: string | number;
    display_type?: 'number' | 'boost_number' | 'boost_percentage';
  }[];
};
