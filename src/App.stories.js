// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import App from "./App";

export default {
    title: "App",
    component: App
};

// we could define a template and pass in args, but we're only writing
// one story here, so this works as well
export const Default = () => <App/>;
