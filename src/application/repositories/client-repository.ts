import type { Client } from "../../domain/entities/client";

export interface ClientRepository {
    create(client: Client): Promise<void>
    findById(id: string): Promise<Client | null>
    save(id: string, client: Client): Promise<void>
}