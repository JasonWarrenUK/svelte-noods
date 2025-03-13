import type { Meta, StoryObj } from '@storybook/svelte';
import ProductGroup from './ProductGroup.svelte';
import { mockProductData } from '$lib/data/products';

const meta = {
  title: 'Components/ProductGroup',
  component: ProductGroup,
  tags: ['autodocs'],
  argTypes: {
    productList: {
      control: 'object',
      description: 'The product group data to display'
    }
  }
} satisfies Meta<ProductGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productList: mockProductData
  }
}; 