/** @jsx jsx */
import { jsx } from '@emotion/core'

import * as ReactDOM from "react-dom";

import { App } from '@/core/App'
import { subscribe } from 'spaceace';
import { onHistoryChange, navigate } from '@/core/router'
import { space } from '@/core/Space'

// todo: Remove when using real APIS
import { injectMocks } from '../mocks/mocklib'
import { mocks } from '../mocks'
injectMocks(mocks)

subscribe(space, ({ newSpace, oldSpace, causedBy }) => {
  console.log(`Re-render of <Container /> caused by ${causedBy}`);
  renderApp(newSpace);
});

renderApp(space)

function renderApp(space: SpaceAce.Space) {
  ReactDOM.render(
    <App space={space}/>,
    document.getElementById('root')
  );
}

onHistoryChange( (_, route) => {
  console.log("onHistoryChange", route)
  space({ route })
})

//@ts-ignore
window.Navigate = navigate