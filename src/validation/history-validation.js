import Joi from "joi";

const donateValidation = Joi.object({
  campaign_id: Joi.number().positive().required(),
  food: Joi.string().max(50).required(),
  quantity: Joi.number().positive().required(),
  expiredDate: Joi.date().required(),
  pickupLocation: Joi.string().max(60).required()
})

export { donateValidation }