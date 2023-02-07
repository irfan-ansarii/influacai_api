'use strict';

/**
 * compensation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::compensation.compensation');
