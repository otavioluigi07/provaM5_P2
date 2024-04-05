//PROVA - FILA
// Class Fila
class Fila {
    constructor() {
        this.items = [];
    }

    enfileirar(item) {
        this.items.push(item);
    }

    desenfileirar() {
        if (this.vazia()) {
            return "Vazia";
        }
        return this.items.shift();
    }

    frente() {
        if (this.vazia()) {
            return "Nada na fila";
        }
        return this.items[0];
    }

    vazia() {
        return this.items.length === 0;
    }
}

const filaDeItems = new Fila()

// Class Robo
class RoboDeLimpeza {
    constructor() {
        this.filaDeItems = new Fila();
        this.arr = []
    }

    adicionarTarefa(tarefa) {
        this.filaDeItems.enfileirar(tarefa);
        console.log("Tarefa adicionada com sucesso")
        // res.status(200).json({ message: 'Item adicionado à fila de processamento' });
        return true;
    }

    executarProximaTarefa() {
        const proximoItem = this.filaDeItems.desenfileirar();
        if (!proximoItem) {
            console.log("Fila de itens vazia")
            // res.status(404).json({ error: 'Fila de itens vazia' });
            return false
        } else{
            // Aqui você pode realizar o processamento do email
            console.log("Item  da fila: ", proximoItem);
            // res.status(200).json({ message: 'Item processado com sucesso' });
            return true;
        }
  
    }

    executarTodasTarefas() {
        while (this.filaDeItems.vazia() == false){
            const proximoItem = this.filaDeItems.desenfileirar();
            this.arr.push(proximoItem);
            this.filaDeItems.vazia()
        }
        console.log(this.arr)
        // res.status(200).json({message: 'Todas as tarefas foram executadas com sucesso.' });
        return true;
    }
        
    }


const roboDeLimpeza = new RoboDeLimpeza();

module.exports = {
    Fila,
    filaDeItems,
    RoboDeLimpeza,
    roboDeLimpeza,
};
