import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { authService } from "./auth.service";

const adminLogin = catchAsync(async (req, res) => {
  const result = await authService.adminLogin(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Admin Login Successfully! ✅",
    data: result,
  });
});

export const authController = {
  adminLogin,
};
