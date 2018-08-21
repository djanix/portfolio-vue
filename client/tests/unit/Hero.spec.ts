import { shallowMount  } from '@vue/test-utils';
import Hero from '@/components/Hero.vue';

describe('Hero.vue', () => {
  it('renders hero component', () => {
    const wrapper = shallowMount (Hero);
    expect(wrapper.contains('h1')).toBe(true);
  });
});
