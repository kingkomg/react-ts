export function configureFakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url: string, opts?: RequestInit): Promise<any> {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {

        // authenticate
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
          // get parameters from post request
          let params = JSON.parse(opts.body.toString());

          // find if any user matches login credentials
          let filteredUsers = [{username: "marc", password: "1234"}].filter(user => {
            return user.username === params.username && user.password === params.password;
          });

          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            let responseJson = {
              id: 0,
              username: user.username,
              token: 'fake-jwt-token'
            };

            resolve({ok: true, text: () => Promise.resolve(JSON.stringify(responseJson))});
          } else {
            // else return error
            reject('Username or password is incorrect');
          }

          return;
        }

        // get user by id
        if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (opts.headers
            // && opts.headers.Authorization === 'Bearer fake-jwt-token'
          ) {
            // find user by id in users array
            let urlParts = url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            let matchedUsers = [{id: 0, username: "marc", password: "1234"}].filter(user => {
              return user.id === id;
            });
            let user = matchedUsers.length ? matchedUsers[0] : null;

            // respond 200 OK with user
            resolve({ok: true, text: JSON.stringify(user)});
          } else {
            // return 401 not authorised if token is null or invalid
            reject('Unauthorised');
          }

          return;
        }

        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response));

      }, 500);
    });
  }
}
