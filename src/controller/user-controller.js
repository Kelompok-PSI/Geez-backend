import userService from "../service/user-service.js"
const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}
const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body)
    res.status(200).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}
const logout = async (req, res, next) => {
  try {
    await userService.logout(req.user.email)
    res.status(200).json({
      message: "Logout Success"
    })
  } catch (error) {
    next(error)
  }
}


export default { register, login, logout }