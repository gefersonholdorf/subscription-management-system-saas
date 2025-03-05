import { right, type Either } from "../../../core/either"
import { Plan } from "../../../domain/entities/plan"
import type { PlanRepository } from "../../repositories/plan-repository"

export interface CreatePlanUseCaseRequest {
    name: string
    price: number
    duration: number
    resourcers: string[]
}

type CreatePlanUseCaseResponse = Either<never, {}>

export class CreatePlanUseCase {
    constructor(
        private PlanRepository: PlanRepository
    ) {}

    async execute(data: CreatePlanUseCaseRequest): Promise<CreatePlanUseCaseResponse> {
        const {name, price, duration, resourcers} = data

        const plan = Plan.create({
            name, price, duration, resourcers
        })

        await this.PlanRepository.create(plan)

        return right({})
    }
}