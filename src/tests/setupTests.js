import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

// env vars
DotEnv.config({
  path: '.env.test'
});
// enzyme config
Enzyme.configure({
  adapter: new Adapter()
});