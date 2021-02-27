import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {    

    /**
     * http://localhost:3333/answers/1?u=c709f0bc-39ad-4329-9b9b-0bbd5bd3bab4VzyO0
     * 
     * Route Params - Parâmetros que compõem a rota (ex: /answers/:value ... )
     * Query Params - Busca, Paginação. Não obrigatórios. Após ?. Chave = valor
     */

    async execute(request: Request, response: Response){
        const { value } = request.params
        const { u } = request.query

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })

        if(!surveyUser){
            throw new AppError("Survey User does not exist.")
        }

        surveyUser.value = Number(value)

        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser)

    }
}

export { AnswerController }