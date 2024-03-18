const USERS_ENDPOINT = Object.freeze({
  UPDATE: '/update',
});

const API_TYPE = Object.freeze({
  USERS: USERS_ENDPOINT,
});

const API_ENDPOINTS = Object.freeze({
  USERS: '/user',
  PING: '/ping',
});

const REQ_PARAMETER = Object.freeze({
  PARAMS: 'params',
  BODY: 'body',
});

module.exports = {
  API_TYPE,
  API_ENDPOINTS,
  REQ_PARAMETER,
};
