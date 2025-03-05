import { Entity } from "../../core/entities/entity-base"
import { UniqueEntityId } from "../../core/entities/unique-entity"

type StatusPayment = 'Pendent' | 'Paid' | 'Late'

export interface InvoiceProps {
    value: number
    dueDate: Date
    statusPayment: StatusPayment
    clientId: string
    planId: string
    createdAt?: Date
}

export class Invoice extends Entity<InvoiceProps> {
    get value() {
        return this.props.value
    }

    get dueDate() {
        return this.props.dueDate
    }

    get statusPayment() {
        return this.props.statusPayment
    }

    get clientId() {
        return this.props.clientId
    }

    get planId() {
        return this.props.planId
    }

    set statusPayment(status: StatusPayment) {
        this.props.statusPayment = status
    }

    get createdAt() {
        return this.props.createdAt
    }

    static create(props: InvoiceProps, id?: UniqueEntityId) {
        const invoice = new Invoice({
            ...props,
            createdAt: props.createdAt ?? new Date()
        },
        id ?? new UniqueEntityId()
        )

        return invoice
    }    
}