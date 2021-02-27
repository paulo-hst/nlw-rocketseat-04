import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRepository'
import { AppError } from '../errors/AppError';
import * as yup from 'yup'

class UserController{
    async create(request: Request, response: Response){
        const { name, email } = request.body

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
        })

        // if(!(await schema.isValid(request.body))){
        //     response.status(400).json({ error: "Validation Failed!" })
        // } 
        // OU try/catch

        try {
            await schema.validate(request.body, { abortEarly: false })            
        } catch (error) {
            throw new AppError(error)
        }

        const usersRepository = getCustomRepository(UsersRepository)

        // SELECT * FROM users WHERE email = "EMAIL"
        const userAlreadyExists = await usersRepository.findOne({
            email,
        })

        // Regra de negócio
        if(userAlreadyExists) throw new AppError("User Already Exists!")

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user)

        return response.status(201).json(user)
    }
}

export { UserController }
