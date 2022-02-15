//FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

//Component Imports
import Section5 from './components/section5/Section5.component';
import Section1 from './components/section1/Section1.component';

library.add(fas,fab);

function App() {
  return (
    <div class="main">
      <Section1 />
      <Section5 />
    </div>
  );
}

export default App;
