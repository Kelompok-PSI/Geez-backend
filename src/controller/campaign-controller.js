import campaignService from "../service/campaign-service.js";

const getAllCampaign = async (req, res, next) => {
  try {
    const result = await campaignService.getAllCampaign();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const findCampaign = async (req, res, next) => {
  try {
    const campaignId = req.params.campaignId;
    const result = await campaignService.findCampaign(campaignId);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const campaignByNearest = async (req, res, next) => {
  try {
    const result = await campaignService.campaignSortByNearest(req.query);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { getAllCampaign, findCampaign, campaignByNearest };
