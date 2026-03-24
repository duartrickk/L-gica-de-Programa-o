//arrays

//1.1 arrays simples
const frutas = ["Tomate", "Uva", "Banana"];
//1.2 FIFO (Fila)
const fila = ["Gyro Zeppeli", "Johnny Joestar", "Pocoloco", "Jotaro Kujo", "Loki"];
fila.push("Léo")
const primeiro = fila.shift(); // primeiro item
console.log(primeiro);
//1.3 FILO (pilha)
const pilha = ["One Piece", "Jojo's Bizzare Adventure", "Assim Falava Rohan", "Frankenstein"];
pilha.push("Fullmetal Alchemist");
const livro = pilha.pop();
console.log(livro);
const temManga =frutas.includes("Manga");
const temJamelao = frutas.includes("Jamelão");
console.log(temManga);
console.log(temJamelao);

//2. sets (conjuntos)
//2.1 Adicionando duplicados
const matricula = new Set([1001, 1002, 1005, 1009, 1002]);
console.log([...matricula]);

//adicionar items
const cores = new Set (["Verde", "Azul"]);
cores.add("vermelho");
cores.add("branco");
cores.add("preto");
console.log([...cores]);
//2.3 Buscar se Existe
const temVerde = cores.has("Verde");
const temAmarelo = cores.has("Amarelo");
console.log(temVerde);
console.log(temAmarelo);
//2.4 converter array em set
const convidados = ["Ash", "Giorno Giovanna", "Aki Hayakawa", "Brook", "Giorno Giovanna", "Roronoa Zoro", "Vinsmoke Sanji", "Vinsmoke Sanji", "Giovanni", "Misty"];
const convidados_unicos = new Set(convidados);
console.log([...convidados_unicos]);
//3. Map (Mapas)
//3.1 Cadastro de Preços
const produtos = new Map();
produtos.set("Mouse", 50.00);
produtos.set("Teclado", 120.00);
//3.2 Buscando um Valor
valorMouse = produtos.get("Mouse")
console.log(valorMouse);