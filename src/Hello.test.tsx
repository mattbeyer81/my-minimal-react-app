import { HiTyping } from './Hello.stories';
import { screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Hello from './Hello';
import { act } from 'react-dom/test-utils';
import { Args } from '@storybook/react';
import { R, S } from '@storybook/react/dist/types-0a347bb9';
import { StoryContext, PlayFunction } from '@storybook/types';

it("Type into inputs works", async () => {
  document.body.innerHTML = '<div id="app"></div>';
  const canvasElement = document.getElementById('app')

  act(() => {
    const root = createRoot(canvasElement);
    root.render(<Hello/>);
  });

  await act(async () => {
    await HiTyping.play({
      canvasElement,
      componentId: '',
      title: '',
      kind: '',
      id: '',
      name: '',
      story: '',
      tags: [],
      parameters: undefined,
      initialArgs: undefined,
      argTypes: undefined,
      args: undefined,
      globals: {},
      hooks: undefined,
      viewMode: 'story',
      originalStoryFn: function (context: StoryContext<R, Args>): S {
        throw new Error('Function not implemented.');
      },
      loaded: undefined,
      abortSignal: undefined,
      step: function (label: string, play: PlayFunction<R, {}>): void | Promise<void> {
        throw new Error('Function not implemented.');
      }
    });
  });

  const element = screen.getByTestId<HTMLInputElement>('custom-element');
  expect(element.value).toBe('123');
})