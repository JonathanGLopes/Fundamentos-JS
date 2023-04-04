class Tarefa {
    constructor(descricao, dataVencimento) {
      this.descricao = descricao;
      this.dataVencimento = dataVencimento;
      this.concluida = false;
    }
  
    marcarConcluida() {
      this.concluida = true;
    }
  
    adiar(novadataVencimento) {
      this.dataVencimento = novadataVencimento;
    }
  }

const manutencao = new Tarefa('Manutenção em todas máquinas do escritório', '20/04/2023');
manutencao.adiar("15/05/2023");
console.log(manutencao);