import type { Meta, StoryObj } from '@storybook/svelte';
import ProductGroup from '$lib/component/ProductGroup/ProductGroup.svelte';

const meta = {
  title: 'Components/ProductGroup',
  component: ProductGroup,
  tags: ['autodocs']
} satisfies Meta<typeof ProductGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}; 