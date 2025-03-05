import { UniqueEntityId } from "./unique-entity";

export abstract class Entity<Props> {
    private _id: UniqueEntityId
    private _props: Props

    get id() {
        return this._id
    }

    get props() {
        return this._props
    }

    protected constructor(props: Props, id?: UniqueEntityId) {
        this._props = props
        this._id = id ?? new UniqueEntityId()
    }
}