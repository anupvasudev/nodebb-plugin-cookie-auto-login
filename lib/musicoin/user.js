const request = require('superagent');

const { appURL } = require('../../config');
const { getLogger } = require('../../logger');

const logger = getLogger('Musicoin/user');

exports.getSessionUser = function getSessionUser(session, callback) {

  logger.info({ method: 'getSessionUser', input: session.cookie, type: 'start' });

  request.get(appURL + '/api/user').set('Cookie', (session.cookie || '')).end((error, res) => {

        logger.info({ method: 'getSessionUser', input: session.cookie, type: 'end',body:res.body });

    if (error) {
      logger.error({ method: 'getSessionUser', input: session.cookie, error: error, type: 'end' });
      return callback(error);
    }

    //let result = JSON.parse(res.body);
    
    logger.info({ method: 'getSessionUser', input: session.cookie, output: res.body, type: 'end',body:res.body });

    callback(null, res.body);

  });

};

exports.logoutUser = function logoutUser(session, callback) {

  logger.info({ method: 'getSessionUser', input: session.cookie, type: 'start' });

  request.post(appURL + '/api/logout').set('Cookie', (session.cookie || '')).end((error, res) => {

        logger.info({ method: 'logoutUser', input: session.cookie, type: 'end',body:res.body });

    if (error) {
      logger.error({ method: 'logoutUser', input: session.cookie, error: error, type: 'end' });
      return callback(error);
    }

    //let result = JSON.parse(res.body);
    
    logger.info({ method: 'logoutUser', input: session.cookie, output: res.body, type: 'end',body:res.body });

    callback(null, res.body);

  });

};

exports.getUserByEmail = function getUserByEmail(session, options, callback) {

  logger.info({ method: 'getUserByEmail', input: session.cookie, type: 'start' });

  request.get(appURL + '/api/user/email/' + options.email).set('Cookie', (session.cookie || '')).end((error, res) => {
    logger.info({ method: 'getUserByEmail', input: session.cookie, type: 'end',body:res.body });

    if (error) {
      logger.error({ method: 'getUserByEmail', input: session.cookie, error: error, type: 'end' });
      return callback(error);
    }

    //let result = JSON.parse(res.body);
    
    logger.info({ method: 'getUserByEmail', input: session.cookie, output: res.body, type: 'end',body:res.body });

    callback(null, res.body);

  });

};
