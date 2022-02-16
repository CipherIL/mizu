//FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

//Component Imports
import Section1 from './components/section1/Section1.component';
import Section3 from './components/section3/Section3.component';
import Section2 from './components/section2/Section2.component';

library.add(fas,fab);

function App() {
  return (
    <main className="main">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

export default App;
