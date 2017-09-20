import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
  FB.api('/me/feed', 'post', { message: "testing again" }, function(response) {
  if (!response || response.error) {
    console.log('Error occured', response.error);
  } else {
    console.log('Post ID: ' + response.id);
  }
});

}

const FacebookShare = ()=> (

  <FacebookLogin
  appId="131994730774975"
  autoLoad={false}
  fields="name,email,picture,publish_actions"
  // onClick={responseFacebook}
  callback={responseFacebook} />
)


export default FacebookShare
