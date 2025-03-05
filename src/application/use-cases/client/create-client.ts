import { right, type Either } from "../../../core/either"
import { Client, type StatusPlan } from "../../../domain/entities/client"
import type { ClientRepository } from "../../repositories/client-repository"

export interface CreateClientUseCaseRequest {
    name: string
    email: string
    identification: string
    statusPlan: string
}

type CreateClientUseCaseResponse = Either<never, {}>

export class CreateClientUseCase {
    constructor(
        private clientRepository: ClientRepository
    ) {}

    async execute(data: CreateClientUseCaseRequest): Promise<CreateClientUseCaseResponse> {
        const {name, email, identification, statusPlan} = data

        const client = Client.create({
            name, email, identification, statusPlan: statusPlan as StatusPlan
        })

        await this.clientRepository.create(client)

        return right({})
    }
}