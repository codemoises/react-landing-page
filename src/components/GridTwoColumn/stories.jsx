/* eslint-disable prettier/prettier */
import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore voluptatum aut ducimus dolor cumque voluptate officia vero non accusantium voluptates vel ab sint placeat corrupti temporibus, illum optio odit?`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
