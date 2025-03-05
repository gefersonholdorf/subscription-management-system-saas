import { left, right, type Either } from "../../../core/either"
import type { ClientRepository } from "../../repositories/client-repository"
import type { PlanRepository } from "../../repositories/plan-repository"
import { ResourceNotFoundError } from "../errors/resource-not-found"
import { SignedPlan } from "../errors/signed-plan"

export interface SubscribePlanUseCaseRequest {
    planId: string
    clientId: string
}

type SubscribePlanUseCaseResponse = Either<ResourceNotFoundError
| SignedPlan, {}>

export class SubscribePlanUseCase {
    constructor(
        private planRepository: PlanRepository,
        private clientRepository: ClientRepository
    ) {}

    async execute(data: SubscribePlanUseCaseRequest): Promise<SubscribePlanUseCaseResponse> {
        const {planId, clientId} = data

        const client = await this.clientRepository.findById(clientId)

        if(!client) {
            return left(new ResourceNotFoundError())
        }

        if (client.planId) {
            return left(new SignedPlan())
        }

        const plan = await this.planRepository.findById(planId)

        if(!plan) {
            return left(new ResourceNotFoundError())
        }

        client.planId = planId

        await this.clientRepository.save(clientId, client)

        return right({})
    }
}