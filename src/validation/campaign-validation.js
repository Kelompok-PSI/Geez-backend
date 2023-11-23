import Joi from "joi";

const searchCampaignValidation = Joi.number().positive().required()

export { searchCampaignValidation }