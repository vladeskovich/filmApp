import Button from '../Button';

it('should render Button component', () => {
  const component = shallow(<Button/>);
  expect(component).toMatchSnapshot();
});
