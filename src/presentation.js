import React, { Component } from 'react';
import {
  CodePane,
  ComponentPlayground,
  Deck,
  Heading,
  Slide,
  MarkdownSlides,
} from 'spectacle';
import { injectGlobal } from 'styled-components';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import CodeSlide from 'spectacle-code-slide';

import { COLORS } from './constants';

import reactEuropeLogo from './assets/BKGD_JT-FS.jpeg';
import me from './assets/me.jpg';
import me2 from './assets/me2.jpg';
import potato from './assets/potato.jpg';
import monster from './assets/monster.jpg';
import talks from './assets/talks.JPG';
import beyondReact from './assets/beyond-react.JPG';
import keynote from './assets/keynote.JPG';
import replicatedRedux from './assets/replicated-redux.JPG';
import idea from './assets/idea.jpg';
import butWhy from './assets/but-why.gif';

import FullscreenImage from './components/FullscreenImage';
import ConfettiManager from './components/ConfettiManager';

import SectionStart from './slides/SectionStart';

require('normalize.css');
require('highlight.js/styles/arta.css');

preloader({
  reactEuropeLogo,
  me,
  me2,
  potato,
  monster,
  talks,
  beyondReact,
  keynote,
  replicatedRedux,
  idea,
  butWhy,
});

// HACK: Spectacle applies a `transform: scale(1)` to all slides.
// This means that any children with position: fixed don't actually position
// themselves relative to the viewport, they position themselves relative to
// the 1000x700px slide container.
// This class allows us to override that scale, since none of my slides use
// scale in transitions anyway.
injectGlobal`
  .slideWithoutScale {
    transform: none !important;
  }
`;

const theme = createTheme(
  {
    primary: '#FFFFFF',
    secondary: '#222222',
    purple: COLORS.purple[500],
    deepPurple: COLORS.deepPurple[700],
    pink: COLORS.pink[500],
    indigo: COLORS.indigo[700],
    blue: COLORS.blue[500],
    red: COLORS.red[500],
    green: COLORS.green[700],
    teal: COLORS.teal[700],
    lime: COLORS.lime[700],
  },
  {
    primary: 'Lato',
    secondary: 'Playfair Display',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        progress={null}
        theme={theme}
      >
        <Slide bgColor="#000000">
          <Heading textFont="secondary" textColor="purple" size={4}>
            React{' '}
            <span
              style={{
                color: COLORS.lime[500],
                fontSize: '30px',
              }}
            >
              Native
            </span>{' '}
            Europe 2018
          </Heading>
          <br />
          <FullscreenImage src={reactEuropeLogo} />
        </Slide>

        <Slide bgColor="#000000">
          <Heading textFont="secondary" textColor="pink" size={4}>
            I was there...
          </Heading>
          <br />
          <FullscreenImage src={me} width='45%' />
        </Slide>

        <Slide bgColor="#000000">
          <Heading textFont="secondary" textColor="pink" size={4}>
            ...and I've took lame selfies :(
          </Heading>
          <br />
          <FullscreenImage src={me2} width='45%' />
        </Slide>

        <Slide bgColor="#000000">
          <Heading textFont="secondary" textColor="purple" size={4}>
            I've made friends...
          </Heading>
          <br />
          <FullscreenImage src={potato} />
        </Slide>

        <Slide bgColor="#000000" notes={`
<p>This image is part of a talk that was meant to convince people to implement right to left support.
Funnily enough, it had the opposite effect on a large part of the audience.</p>

<p>It turns out that it's really hard to implement right to left support properly.
If we ever decide to do it (I hope not!), it will be useful to revisit this talk. Airbnb open-sourced a couple of libraries that might help with it.</p>
`}>
          <Heading textFont="secondary" textColor="purple" size={4}>
            ...and enemies!
          </Heading>
          <br />
          <FullscreenImage src={monster} />
        </Slide>

        <Slide bgColor="#FFFFFF" notes={`
<p>There were 20 main talks. Because recently I've started to like charts, I've made this one.</p>

<p>Why so much talk about React Native?</p>
<p>I think that a lot of people really like the core concepts of React and Redux and want to have them everywhere.</p>
<p>React Native has been getting bigger and bigger, and there's even a Native to Web renderer.</p>
<p>I would really like us to have a look at React Native and consider converting our mobile apps.</p>

<p>Types were the second most talked about topic. People are starting to use JavaScript more and more and they all crave strong types.</p>
<p>Static Typing is the main selling point of Reason. That's why Reason was such a popular topic.</p>
<p>There was also a lot of talk about TypeScript, and even about how you can create Static Types at compile time in JavaScript.</p>

<p>GraphQL position is a bit misleading. It was heavely mentioned in the lightning talks and in individual conversations.
It was one of the hottest topics and I would really like our company to investigate it!</p>
`}>
          <Heading size={4} textFont="secondary">
            There were 20 main talks...
          </Heading>
          <br />
          <br />
          <FullscreenImage src={talks} />
        </Slide>

        <Slide bgColor="#000000" notes={`
<p>Ken Wheeler is an overconfident american and ocasionally entertaining presenter.</p>

<p>In this talk he does a pretty good job at summarizing the new features of React.</p>

<p>He talks about:</p>
<ul>
<li>Fiber & Async</li>
<li>Suspense</li>
<li>The New Lifecycle Functions</li>
<li>The new Context API</li>
</ul>
<p>I must warn you, he overuses the word dope!</p>
        `}>
          <Heading textFont="secondary" textColor="primary" size={4}>
            My 5th favourite talk
          </Heading>
          <Heading textFont="secondary" textColor="lime" size={6}>
            Keynote
          </Heading>
          <br />
          <FullscreenImage src={keynote} />
        </Slide>

        <Slide bgColor="#FFFFFF" notes={`
<p>In this talk, Devin Abbott demoes how he creates a Component using a visual tool, a designer, like Visual Studio back in the day.</p>
<p>This Component is saved as JSON.
This output is then used to render the Component on the Web, as React and on iOS and Android, as native code (by native I mean iOS and Android code, not React Native)</p>
        `}>
          <Heading textFont="secondary" textColor="secondary" size={4}>
            My 4th favourite talk
          </Heading>
          <Heading textFont="secondary" textColor="orange" size={6}>
            Beyond React
          </Heading>
          <br />
          <FullscreenImage src={beyondReact} />
        </Slide>

        <Slide bgColor="pink" notes={`
<p>This kid is one of the most charismatic tech presenters I've ever seen.</p>

<p>He makes a strong case for better UI, driven by purposeful animations.</p>

<p>I highly recommend his talk!</p>
        `}>
          <Heading textFont="secondary" textColor="primary" size={2}>
            My 3rd favourite talk
          </Heading>
          <Heading textFont="secondary" textColor="lime" size={2}>
            The Case for Whimsy
          </Heading>
          <Heading textFont="secondary" textColor="primary" size={4}>
            Josh Comeau
          </Heading>
        </Slide>

        <Slide notes={`
<p>This presentation I'm showing you here it's based on his source code.</p>
<p>It is all done in React, using the Spectable library.</p>
<p>As you can see, I can fully interact with it.</p>
<p>What do these sliders do? Well, they control this animation. All done in React!</p>
<p>Note: This slide has been copy pasted from Josh Comeau's talk.</p>
`}>
          <ConfettiManager />
        </Slide>

        <Slide bgColor="#000000" notes={`
<p>Jim Purbrick works in Facebook's Oculus VR team.</p>

<p>He shows several of the apps they've made, and he talks about how they've used Redux to fix their concurrency and conflict resolution challenges.</p>
        `}>
          <Heading textFont="secondary" textColor="primary" size={4}>
            My 2nd favourite talk
          </Heading>
          <Heading textFont="secondary" textColor="lime" size={6}>
            Replicated Redux
          </Heading>
          <br />
          <FullscreenImage src={replicatedRedux} />
        </Slide>

        <Slide bgColor="#000000" notes={`
<p>Lee Byron talks about how React, Immutable and Redux helped software architecture to evolve. I can't recommend this talk enough! Just watch it, please!</p>
        `}>
          <Heading textFont="secondary" textColor="primary" size={4}>
            My favourite talk
          </Heading>
          <Heading textFont="secondary" textColor="lime" size={6}>
            The IDEA Architecture
          </Heading>
          <br />
          <FullscreenImage src={idea} />
        </Slide>

        <Slide bgColor="teal">
          <SectionStart title="Render Props" subtitle="The new (cool) kid on the block" />
        </Slide>

        {
          MarkdownSlides`
## What\'s a render prop?
---
### Render Props
* Pattern used for externalizing internal component data
* Flexible replacement for HoCs
* Render Props do everything that HOCs do, plus more
---
## In short, calling this.props.children as a function
---
### There are two ways to do this:
`
        }

        <Slide bgColor="#2a2734" notes={`
<p>You put an arrow function inside the Component, as a child.</p>
`}>
          <Heading>
            Functional Child
          </Heading>
          <br />
          <CodePane textSize="2rem" lang="javascript" source={`
<MyComponent>
  {(args) => (
    <p>User code</p>
  )}
</MyComponent>
              `} />
        </Slide>
        <Slide bgColor="#2a2734" notes={`
<p>You pass the arrow functions to the children prop.</p>
`}>
          <Heading>
            Children Prop
          </Heading>
          <br />
          <CodePane textSize="2rem" lang="javascript" source={`
<MyComponent
  children={
    (args) => <p>User code</p>
  }
/>
                `}
          />
        </Slide>

        <Slide bgColor="teal">
          <SectionStart title="So how does it work?" />
        </Slide>

        <CodeSlide
          notes={`
<p>We start with a very simple component. All it does is return it's this.props.children function, with a parameter.</p>

<p>Here you can see the above component being rendered. The arrow function integrates the parameter in it's output.</p>

<p>By doing this, we expose the data of the child component to it's parent.</p>
`}
          bgColor="secondary"
          lang="jsx"
          code={require('./code/RenderPropsChildren.example')}
          ranges={[
            { loc: [0], title: 'Example: Children' },
            { loc: [4, 9] },
            { loc: [12, 17] },
          ]}
        />

        <CodeSlide
          notes={`
<p>So why are these called Render Props?</p>

<p>It turns out that we can use the render function in the same manner as the children function.

<p>Here I have a component that has it's own props and state.</p>

<p>In render it returns it's this.props.render function, and sends it's props and state as parameters.

<p>Then, when we render the component, we can use it's props and state to produce whatever output we want.</p>
`}
          bgColor="secondary"
          lang="jsx"
          code={require('./code/RenderPropsRender.example')}
          ranges={[
            { loc: [0], title: 'Example: Render' },
            { loc: [4, 7] },
            { loc: [8, 11] },
            { loc: [12, 18] },
            { loc: [21, 28] },
          ]}
        />

        <Slide bgColor="#000000"
          notes={`
<p>But why bother with this?</p>

<p>It turns out that the way we compose components makes all the different when a component renders one time or over 9000 times.</p>
`}>
          <Heading textFont="secondary" textColor="white" size={2}>
            BUT
          </Heading>
          <br />
          <FullscreenImage src={butWhy} />
        </Slide>

        <Slide>
          <ComponentPlayground
            code={require("./code/Composition.example")}
            theme="external"
          />
        </Slide>

        <Slide bgColor="teal">
          <SectionStart title="fin" />
          <Heading size={6} textColor="white">
            (show the deadly sins video, 12+)
          </Heading>
          <a href="https://www.youtube.com/watch?v=gAHQ02xU2Rw">https://www.youtube.com/watch?v=gAHQ02xU2Rw</a>
        </Slide>
      </Deck >
    );
  }
}

/**
 * Spectacle puts everything in its own transformed layer, and so it's actually
 * quite difficult to make something truly fullscreen.
 * This is a hacky af workaround, I'm doing this hastily since the talk is
 * looming.
 */
class MakeItFullscreen extends Component {
  state = {
    offsetLeft: 0,
    offsetTop: 0,
  };

  componentDidMount() {
    const bb = this.node.getBoundingClientRect();

    this.setState({
      offsetLeft: -bb.left,
      offsetTop: -bb.top,
    });
  }

  render() {
    const { offsetLeft, offsetTop } = this.state;
    return (
      <div
        ref={node => (this.node = node)}
        style={{ position: 'absolute', top: offsetTop, left: offsetLeft }}
      >
        {this.props.children}
      </div>
    );
  }
}
