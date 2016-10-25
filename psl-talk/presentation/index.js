// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  // BlockQuote,
  // Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  // Markdown,
  // Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import theme from "../themes/formidable/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/formidable/index.css");

const images = {
  bg: require("../assets/bg-oss.jpg"),
  logo: require("../assets/logo.svg"),
  pharmacy: require("../assets/walmart-pharmacy.png"),
  speced: require("../assets/spectacle-editor.gif")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="number">

          <Slide bgImage={images.bg} notes={`
Hello everyone. I'm Per Nilsson, and I'm a software engineer at Formidable in Fremont.
Thank you for giving me the opportunity to talk here today.

Me and McLovin worked together on some awesome presentation software at Haikudeck back in 2015.
Those folks really have a wonderful approach to presentations -
making it easy to keep it simple and impactful.
I've retained the spririt of that in this presentation, even though it's made with an
open-source library by Formidable. There are also fewer cat pictures.
                    `}>
            <Heading size={1} lineHeight={1} textAlign={"left"}>
              Pioneer Square Labs
            </Heading>
            <Text textColor="secondary" textAlign="right">
              25 October 2016
            </Text>
            <Text bold>
              Building apps with modern JavaScript technologies
            </Text>
            <Text textColor="secondary" textAlign="right">
              Per Nilsson
            </Text>
            <Text textAlign="right">
              Github: <Link href="https://github.com/coopy">@coopy</Link>
              &nbsp;| Twitter: <Link href="https://twitter.com/persproutlab">@persproutlab</Link>
            </Text>
          </Slide>

          <Slide bgColor="tertiary" notes={`
(3) I'm going to give you a brief introduction to Formidable and what we do, the magic sauce we use
to build applications for all kinds of platforms, and at the end I'm going to give you a demo.
            `}>
            <Heading size={2} textColor="primary">
              Overview
            </Heading>
            <List>
              <Appear><ListItem>Formidable & our stack</ListItem></Appear>
              <Appear><ListItem>Cross platform goodness</ListItem></Appear>
              <Appear><ListItem>Demo</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary" notes={`
(4) Formidable is a Seattle-based consultancy and development shop,
focused on open-source, React.JS and the architecture of
large-scale JavaScript applications (front- and backend). We tend to embed with client teams
so we can work closely with them, learn and mentor, and avoid "built in a cave" costly handoffs.
Lately, we've also built some native mobile and desktop apps.
Let me show you how we do all this with JavaScript.
            `}>
            <Link href="https://www.formidable.com">
              <Image width="100%" src={images.logo}/>
            </Link>
            <Text textColor="secondary">A JavaScript consultancy</Text>
            <List>
              <Appear><ListItem>ReactJS</ListItem></Appear>
              <Appear><ListItem>NodeJS</ListItem></Appear>
              <Appear><ListItem>Mobile and Desktop apps</ListItem></Appear>
              <Appear><ListItem>^ ... with JS! wut?</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary" notes={`
<ul>
<li>(4) reasons we focus on JavaScript. Browsers universal application runtime. (Noone DL Java apps VM. Cloud push updates. Modern browsers consistent X)</li>
<li>Node lets us build high-volume, scalable web services - same
language we use to build frontend applications. Walmart, PayPal.</li>
<li>It's still early days, but mobile dev shops are already switching
from ObjC and Swift to React Native. We built the Walmart Pharmacy app with RN.</li>
<li>Electron lets us build Mac, Windows and Linux apps using web technologies.
We've built a drag-and-drop presentation tool, and more products are in the works.</li>
</ul>
            `}>
            <Heading size={2} textColor="primary">
              Why JavaScript?
            </Heading>
            <Text textColor="secondary">If anyone in the room is unconvinced...</Text>
            <List>
              <Appear><ListItem>Universal runtime: Browsers</ListItem></Appear>
              <Appear><ListItem>Web services: <Code>nodejs</Code></ListItem></Appear>
              <Appear><ListItem>Mobile apps: <Code>react-native</Code></ListItem></Appear>
              <Appear><ListItem>Desktop apps: <Code>electron</Code></ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary" notes={`
(3) React = JS library for building user interfaces (not a framework, but rich ecosystem) - helps us write better code and keep it maintainable.
<ul>
<li>daresay paradigm shift: No more imp. DOM manip. UI is a function of state.</li>
<li>Flux = arch. pattern, enforces unidirectional data flow. reason about state.</li>
<li>Redux = popular flux implementation: one state store,
actions trigger state changes, pure reducers return new state based on actions.</li>
<li>This architecture lets you "time travel" back and forth the state change timeline (trivial undo/redo).</li>
<li>We think using React results in better, more readable and testable code.</li>
</ul>
            `}>
            <Heading size={2} textColor="primary">
              Why React?
            </Heading>
            <Text textColor="secondary">It's declarative</Text>
            <List>
              <Appear><ListItem>UI as a function of state</ListItem></Appear>
              <Appear><ListItem>Flux pattern makes debugging easier</ListItem></Appear>
              <Appear><ListItem>Encourages small, composable components</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary" notes={`
<p>(3) React isn't "Write once, run everywhere", but "Learn once, Write everywhere".
You learn one lifecycle API, the Web and RN UI APIs, then write components for all major platforms.</p>
<p>Much of the non-UI application logic, like redux reducers,
can still be reused across platforms.</p>
            `}>
            <Heading size={2} textColor="primary">
              Why React?
            </Heading>
            <Text textColor="secondary">Learn once, write everywhere</Text>
            <List>
              <Appear><ListItem>Web apps</ListItem></Appear>
              <Appear><ListItem>iOS & Android apps</ListItem></Appear>
              <Appear><ListItem>Desktop apps</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Layout>
              <Fit>
                <Heading size={2} textColor="primary" width="25%">
                  Walmart Pharmacy
                </Heading>
              </Fit>
              <Fill>
                <Image width="100%" src={images.pharmacy}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={2} textColor="primary">
              Spectacle Editor
            </Heading>
            <Image width="100%" src={images.speced}/>
          </Slide>

          <Slide bgColor="tertiary" notes={`
(1+5) If you've been following along in the JavaScript world in the past couple of years,
you'd have noticed that there has been a proliferation of tooling. Tools are great for
developers, but the tools in vogue tend to change every few monts. Change is a great
sign of a thriving field, but it does make it hard when what you learned last month
is already out of date the next. Although I have sensed a  slowdown in this trend lately,
I'm sure things will keep changing (and improving!) for a long time to come.
            `}>
            <Heading size={2} textColor="primary">
              JavaScript Fatigue?
            </Heading>
              <Appear>
                <div>
                  <Text textColor="secondary">Don't get lost in the swamp</Text>
                    <List>
                      <Appear><ListItem>Browserify, Webpack or Rollup?</ListItem></Appear>
                      <Appear><ListItem>Babel - ES6? ES2015? ES7?</ListItem></Appear>
                      <Appear><ListItem>Make, Grunt, Gulp, NPM scripts?</ListItem></Appear>
                      <Appear><ListItem>Jasmine, Mocha, or Jest?</ListItem></Appear>
                      <Appear><ListItem>etc, etc, etc.</ListItem></Appear>
                    </List>
                </div>
              </Appear>
          </Slide>

          <Slide bgColor="tertiary" notes={`
The solution is really quite simple: Pick a stack that makes sense for you, and stick with it.
The developers at Facebook has made this simple for you with create-react-app. And the best part
is, that if you grow out of it, you can always "eject" and all configuration becomes customizable.
I'm going to show you around an app based on this stack, and how I go about writing a component.
            `}>
            <Heading size={2} textColor="primary">
              Rapid Prototyping!
            </Heading>
            <Text>Use <Code>create-react-app</Code></Text>
            <CodePane lang="bash" source={`
$ npm install -g create-react-app
$ create-react-app my-app

# Wait for dependencies to install...

$ cd my-app/
$ npm start
          `}/>
          </Slide>

          <Slide bgColor="tertiary" notes={`
<ul>
<li>(3) At Formidable, we spend a lot of time writing open-source software.</li>
<li>This presentation is written in React, using a Formidable open-source presentation library called Spectacle.</li>
<li>Victory is a React data visualization component library for web and native.</li>
<li>Radium is a set of tools to manage inline styles on React components (:hover, keyframes, etc)</li>
<li>I will email the link to this presentation to Mariia, so you can peruse the links yourself.</li>
</ul>
`}>
            <Heading size={2} textColor="primary">
              There's More
            </Heading>
            <List>
              <Appear><ListItem><Link href="https://formidable.com/open-source/spectacle/">Spectacle</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://formidable.com/open-source/victory/">Victory</Link></ListItem></Appear>
              <Appear><ListItem><Link href="https://formidable.com/open-source/radium/">Radium</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={2} lineHeight={1} textAlign={"left"}>
              Thank You!
            </Heading>
            <Text textAlign="center" margin="2em auto 0">
              <Link href="https://twitter.com/FormidableLabs">
                Follow us <strong>@FormidableLabs</strong>
              </Link>
            </Text>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
