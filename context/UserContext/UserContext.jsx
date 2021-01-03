import { createContext } from 'react';

const UserContext = createContext({
  uid: null,
  name: null,
  surname: null,
  number: null,
  email: null
});
UserContext.displayName = 'UserContext';

export default UserContext
