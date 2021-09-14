import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import {Game} from '/game/Game';
Meteor.startup(() => {
  console.log("Meteor has started");
  render(<App/>, document.getElementById('react-target'));
  render(<Game/>, document.getElementById('react-game'));
});
