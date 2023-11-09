const Joi = require("joi");

exports.createBookValidation = (data) => {
  return Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
  }).validate(data);
};

exports.getBookByIdValidation = (data) => {
    return Joi.string().length(24).hex().required().validate(data);
  };

  exports.updateBookByIdValidation = (params, body) => {
    return {
      params: Joi.object({
        id: Joi.string().length(24).hex().required(),
      }).validate(params),
      body: Joi.object({
        title: Joi.string(),
        author: Joi.string(),
        summary: Joi.string(),
      }).validate(body),
    };
  };


  exports.deleteBookByIdValidation = (data) => {
    return Joi.string().length(24).hex().required().validate(data);
  };
  