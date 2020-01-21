const request = require('superagent');

const { appURL } = require('../../config');
const { getLogger } = require('../../logger');

const logger = getLogger('Musicoin/user');

exports.getSessionUser = function getSessionUser(session, callback) {

  logger.info({ method: 'getSessionUser', input: session.cookie, type: 'start' });

  request.get(appURL + '/api/user').set('Cookie', (session.cookie || '')).end((error, res) => {

        logger.info({ method: 'getSessionUser', input: session.cookie, output: result, type: 'end',body:res.body });

    if (error) {
      let result = JSON.parse(res.body);
      logger.error({ method: 'getSessionUser', input: session.cookie, error: result, type: 'end' });
      return callback(result);
    }

    let result = JSON.parse(res.body);
    
    logger.info({ method: 'getSessionUser', input: session.cookie, output: result, type: 'end',body:res.body });

    callback(null, result);

  });

};

exports.getUserByEmail = function getUserByEmail(session, options, callback) {

  logger.info({ method: 'getUserByEmail', input: session.cookie, type: 'start' });

  request.get(appURL + '/api/user/email/' + options.email).set('Cookie', (session.cookie || '')).end((error, res) => {
    logger.info({ method: 'getUserByEmail', input: session.cookie, output: result, type: 'end',body:res.body });

    if (error) {
      let result = JSON.parse(res.body);
      logger.error({ method: 'getUserByEmail', input: session.cookie, error: result, type: 'end' });
      return callback(result);
    }

    let result = JSON.parse(res.body);
    
    logger.info({ method: 'getUserByEmail', input: session.cookie, output: result, type: 'end',body:res.body });

    callback(null, result);

  });

};
