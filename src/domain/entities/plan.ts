import { Entity } from "../../core/entities/entity-base"
import { UniqueEntityId } from "../../core/entities/unique-entity"

export interface PlanProps {
    name: string
    price: number
    duration: number
    resourcers: string[]
}

export class Plan extends Entity<PlanProps> {
    get name() {
        return this.props.name
    }

    get price() {
        return this.props.price
    }

    get duration() {
        return this.props.duration
    }

    get resources() {
        return this.props.resourcers
    }

    static create(props: PlanProps, id?: UniqueEntityId) {
        const plan = new Plan({
            ...props
        },
        id ?? new UniqueEntityId()
        )
    
        return plan
    }
}