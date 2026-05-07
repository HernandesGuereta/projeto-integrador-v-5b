    import "./GridProdutos.css"

    function GridProdutos() {

    const produtos = [
        {
        id: 1,
        nome: "Notebook Gamer",
        preco: "R$ 5.999",
        imagem: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/n/o/notebook-gamer-acer-nitro-v15-anv15-51-58ql-i5-8gb-ram-512gb-tela-de-15-6-w11_973747.jpg"
        },
        {
        id: 2,
        nome: "Mouse RGB",
        preco: "R$ 199",
        imagem: "https://images.tcdn.com.br/img/img_prod/670412/mouse_gamer_onikuma_cw923_12800_dpi_7_botoes_rgb_branco_4805_1_04c645e50df866eaca34ea0a2278b3a2.jpg"
        },
        {
        id: 3,
        nome: "Teclado Mecânico",
        preco: "R$ 349",
        imagem: "https://www.bazaralice.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/0/4/04846800001_21.jpg"
        },
        {
        id: 4,
        nome: "Monitor 240Hz",
        preco: "R$ 1.899",
        imagem: "https://storage.googleapis.com/propcart-br.appspot.com/images%2Fitems%2Fd6fZyktU3aF5HcNRWbjK_1684588781903.jpg"
        },
        {
        id: 5,
        nome: "Headset Gamer",
        preco: "R$ 429",
        imagem: "https://m.media-amazon.com/images/I/6144+3nBNhL.jpg"
        },
        {
        id: 6,
        nome: "Cadeira Gamer",
        preco: "R$ 1.299",
        imagem: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/nkjwbkut/file.png"
        }
    ]

    return (
        <div className="grid-produtos">

        {produtos.map((produto) => (
            <div key={produto.id} className="produto">

            <img src={produto.imagem} alt={produto.nome} />

            <h2>{produto.nome}</h2>

            <p>{produto.preco}</p>

            <button>Comprar</button>

            </div>
        ))}

        </div>
    )
    }

    export default GridProdutos