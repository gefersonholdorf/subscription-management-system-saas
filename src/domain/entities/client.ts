import { Entity } from "../../core/entities/entity-base"
import { UniqueEntityId } from "../../core/entities/unique-entity"

export type StatusPlan = 'Canceled' | 'Pendent' | 'Active'

export interface ClientProps {
    name: string
    email: string
    identification: string
    planId?: string | null
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
        return this.props.planId!
    }

    set planId(plan: string) {
        this.props.planId = plan
    }

    static create(props: ClientProps, id?: UniqueEntityId) {
        const client = new Client({
            ...props,
            planId: props.planId ?? null
        },
        id ?? new UniqueEntityId()
        )

        return client
    }
}