module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    request(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function request(email, pass, cb) {
  window.fetch('http://auth.specialapp.net/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: "username=" + encodeURI(email) + "&password=" + encodeURI(pass) + "&grant_type=password"

  }).then(function(response){
    if (response.ok === false) {
      throw new Error('Bad login information.');
    }
    return response.json();
  }).then(function(j){
    cb({
      authenticated: true,
      token: j.access_token
    });
  }).catch(function(error){
    console.error(error);
    cb({ authenticated: false })
  })
}
