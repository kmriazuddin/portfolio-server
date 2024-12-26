import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { blogService } from "./blog.service";

const blogCreate = catchAsync(async (req, res) => {
  const result = await blogService.blogCreate(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog Create Successfully! ✅",
    data: result,
  });
});

const getAllBlog = catchAsync(async (req, res) => {
  const result = await blogService.getAllBlog();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog Retrieved Successfully! ✅",
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogService.getSingleBlog(id);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog Retrieved Successfully! ✅",
    data: result,
  });
});

const blogUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogService.blogUpdate(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Blog Update Successfully! ✅",
    data: result,
  });
});

export const blogController = {
  blogCreate,
  getAllBlog,
  getSingleBlog,
  blogUpdate,
};
