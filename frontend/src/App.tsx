//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { usersList, usersCreate, usersEdit } from './resources/users';
import { postsList, postsCreate, postsEdit } from './resources/posts';
import {
  messagesList,
  messagesCreate,
  messagesEdit,
} from './resources/messages';
import { friendsList, friendsCreate, friendsEdit } from './resources/friends';
import { photosList, photosCreate, photosEdit } from './resources/photos';
import { videosList, videosCreate, videosEdit } from './resources/videos';
import usersIcon from '@mui/icons-material/Person';
import postsIcon from '@mui/icons-material/PostAdd';
import messagesIcon from '@mui/icons-material/Message';
import friendsIcon from '@mui/icons-material/People';
import photosIcon from '@mui/icons-material/PhotoCamera';
import videosIcon from '@mui/icons-material/VideoLibrary';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/ad9491f91">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="users"
          options={{ label: 'Users' }}
          list={usersList}
          create={usersCreate}
          edit={usersEdit}
          recordRepresentation="name"
          icon={usersIcon}
        />
        <Resource
          name="posts"
          options={{ label: 'Posts' }}
          list={postsList}
          create={postsCreate}
          edit={postsEdit}
          recordRepresentation="text"
          icon={postsIcon}
        />
        <Resource
          name="messages"
          options={{ label: 'Messages' }}
          list={messagesList}
          create={messagesCreate}
          edit={messagesEdit}
          recordRepresentation="text"
          icon={messagesIcon}
        />
        <Resource
          name="friends"
          options={{ label: 'Friends' }}
          list={friendsList}
          create={friendsCreate}
          edit={friendsEdit}
          recordRepresentation="userId1"
          icon={friendsIcon}
        />
        <Resource
          name="photos"
          options={{ label: 'Photos' }}
          list={photosList}
          create={photosCreate}
          edit={photosEdit}
          recordRepresentation="postId"
          icon={photosIcon}
        />
        <Resource
          name="videos"
          options={{ label: 'Videos' }}
          list={videosList}
          create={videosCreate}
          edit={videosEdit}
          recordRepresentation="postId"
          icon={videosIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;