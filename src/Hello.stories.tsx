import Hello from "./Hello";
import { within, userEvent } from '@storybook/testing-library';
import type { StoryObj } from '@storybook/react';

export default {
  title: 'MyButton/Hi',
  component: Hello,
};

export const Hi =  {
};

type Story = StoryObj<typeof Hi>;

export const HiTyping: Story =  {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('custom-element');
    await Promise.resolve(userEvent.type(element, "1"));
    await Promise.resolve(userEvent.type(element, "2"));
    await Promise.resolve(userEvent.type(element, "3"));
  },
};