import { prismaClient } from "../app/database.js"
import { validate } from "../validation/validation.js"
import { ResponseError } from "../error/response-error.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"
import { loginUserValidation, logoutValidation, registerUserValidation } from "../validation/user-validation.js"

const register = async (request) => {
  const user = validate(registerUserValidation, request)
  const countUser = await prismaClient.user.count({
    where: {
      email: user.email
    }
  })
  if (countUser === 1) {
    throw new ResponseError(400, "Email already exist")
  }
  user.password = await bcrypt.hash(user.password, 10)

  return await prismaClient.user.create({
    data: user,
    select: {
      email: true,
      name: true
    }
  })
}

const login = async (req) => {
  const loginRequest = validate(loginUserValidation, req)
  const user = await prismaClient.user.findUnique({
    where: {
      email: loginRequest.email
    },
    select: {
      email: true,
      password: true
    }
  })
  if (!user) {
    throw new ResponseError(401, "Username or Password is wrong")
  }
  const IsPasswordValid = bcrypt.compare(loginRequest.password, user.password)
  if (!IsPasswordValid) {
    throw new ResponseError(401, "Username or Password is wrong")
  }
  const token = uuid().toString()
  return await prismaClient.user.update({
    data: {
      token: token
    },
    where: {
      email: user.email
    }, select: {
      token: true
    }
  })
}

const logout = async (email) => {
  validate(logoutValidation, email)
  const user = await prismaClient.user.findUnique({
    where: {
      email: email
    }
  })
  if (!user) {
    throw new ResponseError(404, "Member is Not Found")
  }

  return await prismaClient.user.update({
    where: {
      email: email
    },
    data: {
      token: null
    }
  })
}


export default { register, login, logout }