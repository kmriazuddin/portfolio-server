import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { projectService } from "./project.service";

const project = catchAsync(async (req, res) => {
  const result = await projectService.project(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project Create Successfully! ✅",
    data: result,
  });
});

const getAllProject = catchAsync(async (req, res) => {
  const result = await projectService.getAllProject();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project Retrieved Successfully! ✅",
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.getSingleProject(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project Retrieved Successfully! ✅",
    data: result,
  });
});

const projectUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.projectUpdate(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project Update Successfully! ✅",
    data: result,
  });
});

export const projectController = {
  project,
  getAllProject,
  getSingleProject,
  projectUpdate,
};
