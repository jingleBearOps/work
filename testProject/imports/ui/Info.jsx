import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Info = () => {
  const links = useTracker(() => {
    console.log("cursor after ");
    console.log(LinksCollection.find());
    console.log("after fetch")
    console.log(LinksCollection.find().fetch());


    return LinksCollection.find().fetch();
  });
  console.log("Testing links");
  console.log(links);
  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
};
