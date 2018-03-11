// polyfill request anymation frames
import 'raf/polyfill';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configure enzyme with react 16
configure({ adapter: new Adapter() });
