import type { Invoice } from "../../domain/entities/invoice";

export interface InvoiceRepository {
    create(invoice: Invoice): Promise<void>
    findById(id: string): Promise<Invoice | null>
}