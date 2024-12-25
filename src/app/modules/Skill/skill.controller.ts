import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { skillService } from "./skill.service";

const skill = catchAsync(async (req, res) => {
  const result = await skillService.skill(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Skill Create Successfully! ✅",
    data: result,
  });
});

const getAllSkill = catchAsync(async (req, res) => {
  const result = await skillService.getAllSkill();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Skill Retrieved Successfully! ✅",
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillService.getSingleSkill(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Skill Retrieved Successfully! ✅",
    data: result,
  });
});

const skillUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillService.skillUpdate(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Skill Update Successfully! ✅",
    data: result,
  });
});

export const skillController = {
  skill,
  getAllSkill,
  getSingleSkill,
  skillUpdate,
};
