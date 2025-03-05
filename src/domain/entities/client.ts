import { Entity } from "../../core/entities/entity-base"
import { UniqueEntityId } from "../../core/entities/unique-entity"

type StatusPlan = 'Canceled' | 'Pendent' | 'Active'

export interface ClientProps {
    name: string
    email: string
    identification: string
    planId: string
    statusPlan: StatusPlan
}

export class Client extends Entity<ClientProps> {
    get name() {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
    } 

    get email() {
        return this.props.email
    }

    get identification() {
        return this.props.identification
    }

    get statusPlan() {
        return this.props.statusPlan
    }

    set statusPlan(status: StatusPlan) {
        this.props.statusPlan = status
    }

    get planId() {
        return this.props.planId
    }

    static create(props: ClientProps, id?: UniqueEntityId) {
        const client = new Client({
            ...props
        },
        id ?? new UniqueEntityId()
        )

        return client
    }
}