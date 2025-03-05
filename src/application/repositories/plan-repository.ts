import type { Plan } from "../../domain/entities/plan";

export interface PlanRepository {
    create(plan: Plan): Promise<void>
    findById(id: string): Promise<Plan | null>
}