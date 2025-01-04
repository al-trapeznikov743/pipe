import {getUsers} from '@/api/api';
import React from 'react';

const Main = () => {
  return (
    <React.Fragment>
      <h1>Main</h1>

      <div onClick={getUsers}>
        GET USERS
      </div>
    </React.Fragment>
  );
};

export default Main;