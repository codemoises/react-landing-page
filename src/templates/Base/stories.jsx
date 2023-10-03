/* eslint-disable prettier/prettier */
import { Base } from '.';
import mock from './mock';
import { GridText } from '../../components/GridText';
import GridMock from '../../components/GridText/mock';

export const mockBase = {
    children: (
        <>
            <GridText {...GridMock} background />
            <GridText {...GridMock}  />
            <GridText {...GridMock} background />
            <GridText {...GridMock}  />
            <GridText {...GridMock} background />
        </>
    ),
    ...mock,
  }

export default {
  title: 'Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
