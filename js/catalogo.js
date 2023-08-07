const produtos = [
  {
    id: 1,
    image: "../img/produtos/nescal.jpeg",
    titulo: "Nescal",
    preco: 5,
  },
  {
    id: 2,
    image: "../img/produtos/azzos.png",
    titulo: "Arroz",
    preco: 2,
  },
  {
    id: 3,
    image: "../img/produtos/azzos.png",
    titulo: "Arroz",
    preco: 5,
  },
  {
    id: 2,
    image: "../img/produtos/azzos.png",
    titulo: "Arroz",
    preco: 2,
  },
  {
    id: 2,
    image: "../img/produtos/azzos.png",
    titulo: "Arroz",
    preco: 2,
  },
  {
    id: 2,
    image: "../img/produtos/azzos.png",
    titulo: "Arroz",
    preco: 2,
  },
  {
    id: 2,
    image: "../img/produtos/azzos.png",
    titulo: "Arroz",
    preco: 2,
  },
  {
    id: 2,
    image: "../img/produtos/azzos.png",
    titulo: "Arroz",
    preco: 2,
  },
];
const categorias = [...new Set(produtos.map((item)=>
  {return item}))]
  let i=0;

document.getElementById('catalogo').innerHTML = categorias.map((item)=>
{
  let {image, titulo, preco} = item;
  return(
    `<div class="produtos">
      <div class='images'>
        <img class='images' src=${image} width="50%">
      </div>
    <div class'bottom'>
    <p>${titulo}</p>
    <p> R$ ${preco},00</p>`+
    "<button class='comprar' onclick='addparacarri("+(i++)+")'>Comprar</button>"+
    `</div>
    </div>`
        
  )
}).join('')

let cart =[];

function addparacarri(e) {
  cart.push({ ...categorias[e] });
  addcarrinho();
}
function deletaitem(e) {
  cart.splice(e, 1);
  addcarrinho();
}

function addcarrinho(e){
  let j = 0, total=0;
  if(cart.length==0){
    document.getElementById('carrinhoItem').innerHTML = "Seu carrinho está vazio";
    document.getElementById("total").innerHTML = "R$"+0+"0";
  }
  else{
      document.getElementById("carrinhoItem").innerHTML = cart.map((items)=>
      
      {
        let {image, titulo, preco} = items;
        total=total+preco;
        document.getElementById("total").innerHTML = "R$"+total+".00";
        return (
          `<div class="produtos-carrinho">
              <div class='images-carrinho'>
                <img class='images' src=${image} width="30%">
              </div>
              <p style='font-size:15px;' class='titulo-carrinho'>${titulo}</p>
              <p style='font-size:15px;' class='preco-carrinho'>R$${preco}.00</p>`+
              ""+
              "<i class='fa-solid fa-trash' onclick='deletaitem("+(j++)+")'><img src='../img/icons8-resíduos-50.png' width='15px' class='lixeira'></i>"+
            "</div>"
        );        
      }).join('');
  }
}