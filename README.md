### 🎯 Requisitos do Sistema
1. Planos de Assinatura
   - - [] Cada plano tem um nome, um preço mensal, uma duração (meses) e uma lista de recursos incluídos.
   Exemplo: Plano Premium custa R$ 99,90 por 12 meses e inclui suporte 24/7, relatórios avançados e integrações.
2. Clientes
    - - [] Cada cliente pode assinar apenas um plano por vez.
    - - [] Deve armazenar informações como nome, email, CPF/CNPJ e status da assinatura.
    - - [] Um cliente pode mudar de plano, mas o sistema deve prorratear o valor.
3. Faturas
    - - [] Geradas automaticamente todo mês para clientes ativos.
    - - [] Cada fatura tem um valor, uma data de vencimento e um status (pendente, paga, atrasada).
    - - [] O pagamento deve ser registrado manualmente via API.
### Regras de Negócio
    - - [] O sistema deve garantir que apenas clientes ativos recebam faturas.
    - - [] Se um cliente cancelar a assinatura, as próximas faturas não devem ser geradas.
    - - [] Se um cliente mudar de plano, o valor deve ser recalculado proporcionalmente.
    - - [] O sistema deve permitir listar clientes, faturas e planos.