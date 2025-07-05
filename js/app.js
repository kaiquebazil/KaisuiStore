        // Dados de exemplo dos produtos
        const products = [
            {
                id: 1,
                title: "ADAPTADOR DE FONE IPHONE/LIGHTNING INOVA CBO-7582",
                price: 15.75, // 10.50
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=63dbc6e559a9c831c4fefd96&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "acessórios"
            },
            {
                id: 2,
                title: "CABO DE ALIMENTAÇÃO/FORÇA LEHMOX LEY-216",
                price: 15.00, // 10.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684aed64dc38e9d3adb7a149&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 3,
                title: "CABO ELETRO MEX TIPO C IPHONE/LIGHTNING EL-3113-PD 1M",
                price: 15.00, // 10.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=66c9e5ada60ab5c0ccbd341c&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 4,
                title: "CABO TIPO C INOVA TIPO C 65W CBO-12223",
                price: 13.50, // 9.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=683602bb867d094306731e67&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 5,
                title: "CABO USB INOVA IPHONE/LIGHTNING 25W CBO-7623",
                price: 9.00, // 6.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fdee5220c8d771ac8cb6&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 6,
                title: "CABO USB INOVA IPHONE/LIGHTNING 3.4A 1M MD-5973 (CAIXA)",
                price: 11.25, // 7.50
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=68360dbc81144f331eed48d0&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 7,
                title: "CABO USB INOVA IPHONE/LIGHTNING SAQUINHO 1M MD-12789",
                price: 6.00, // 4.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=68360548867d0943067337cc&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 8,
                title: "CABO USB INOVA TIPO C 3.4A 1M CBO-12434 (CAIXA)",
                price: 11.25, // 7.50
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=68360cd6532df07cc4d2befb&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 9,
                title: "CABO USB INOVA V8 2.4A 1M MD-8439/MC-6008 (CAIXA)",
                price: 11.25, // 7.50
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=68360d560925dccfc079b494&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 10,
                title: "CABO USB INOVA V8 SAQUINHO MD-12787",
                price: 6.00, // 4.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=683603055b02e340ca6b31b2&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 11,
                title: "CABO USB KIVEE TIPO C 3.4A 1M KV-078 (CAIXINHA)",
                price: 6.00, // 4.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fbd56b075521678f67fb&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 12,
                title: "CABO USB KIVEE TUBINHO/TUBETE TIPO C 3.4A 1M KV-072",
                price: 9.75, // 6.50
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=683603f05220c8d771acbed0&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 13,
                title: "CABO USB TURBO 25W TIPO C",
                price: 4.50, // 3.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67f67a17fe22256ea01cf52a&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 14,
                title: "CABO USB TURBO 25W V8",
                price: 4.50, // 3.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6647660c233f6de5a2d1e959&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "cabos"
            },
            {
                id: 15,
                title: "CAIXA DE SOM INOVA RAD-8740",
                price: 37.50, // 25.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=63dbc6e759a9c831c4fefdbe&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 16,
                title: "CAIXA DE SOM MULTIFUNCIONAL KV-B5329",
                price: 45.00, // 30.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=63fa13545a0d2dacd5d7a2b5&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 17,
                title: "CAIXA DE SOM PEINING PEI-272BTS",
                price: 285.00, // 190.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67655abb560fe563e582e288&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 18,
                title: "CAMERA INTELIGENTE INOVA MD-20158",
                price: 114.00, // 76.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fb25867d09430672e73f&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 19,
                title: "CAMERA INTELIGENTE INOVA MD-30164",
                price: 205.50, // 137.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fa445220c8d771ac6bb7&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 20,
                title: "CARCAÇA CONTROLE NINTENDO SWITCH JOY CON",
                price: 76.50, // 51.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=63e11c5059a9c815ccd582c0&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "games"
            },
            {
                id: 21,
                title: "CARREGADOR COMPLETO BASIKE TIPO C IPHONE/LIGHTNING BA-CAR112",
                price: 33.00, // 22.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=683600ec2e21118aef11cca3&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 22,
                title: "CARREGADOR COMPLETO HMASTON IPHONE/LIGHTNING Y24-2",
                price: 30.00, // 20.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67ec30816244f0c63512a00c&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 23,
                title: "CARREGADOR COMPLETO INOVA TIPO C 3.1A CAR-3298C",
                price: 18.00, // 12.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6836007d5b02e340ca6b1cd5&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 24,
                title: "CARREGADOR COMPLETO INOVA TIPO C/TIPO C 20W CAR-0094",
                price: 37.50, // 25.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835f9085220c8d771ac626b&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 25,
                title: "CARREGADOR COMPLETO INOVA TURBO V8 20W CAR-3166S",
                price: 21.00, // 14.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=66019f22890bb8184edcd5fc&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 26,
                title: "CARREGADOR COMPLETO INOVA V8 20W CAR-2175D",
                price: 25.50, // 17.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fd345220c8d771ac8824&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 27,
                title: "CARREGADOR COMPLETO LEON TIPO C 4.1A LEON-76C",
                price: 12.00, // 8.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835f9a6867d09430672db18&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 28,
                title: "CARREGADOR COMPLETO USB INOVA IPHONE/LIGHTNING 5.1A CAR-3250A",
                price: 22.50, // 15.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=683600146b075521678f8b15&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 29,
                title: "CARREGADOR COMPLETO V8 BASIKE BA-CAR9021",
                price: 12.00, // 8.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6752fa6f5c5506e9e7735e2b&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 30,
                title: "CONTROLE TV BOX UNIVERSAL (VÁRIAS MARCAS)",
                price: 13.50, // 9.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67ae11b746340d282125aed1&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 31,
                title: "COPO CORES DIVERSAS WU-12179",
                price: 30.00, // 20.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=65341fb4fd181fa2b57e2398&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "diversos"
            },
            {
                id: 32,
                title: "FONE COM FIO INOVA FON-2295D",
                price: 7.50, // 5.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=66019a33890bb8184edcc42d&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 33,
                title: "FONE COM FIO INOVA HEADSET FON-8639",
                price: 60.00, // 40.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=66019c44db7294e254acca29&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 34,
                title: "FONE COM FIO INOVA IPHONE/LIGHTNING FON-8742",
                price: 19.50, // 13.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=640a4a06a311ff6d8d63743a&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 35,
                title: "FONE COM FIO INOVA IPHONE/TIPO C FON-30036",
                price: 18.00, // 12.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fea0532df07cc4d222a9&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 36,
                title: "FONE COM FIO SAQUINHO INOVA FON-10009/FON-10008",
                price: 6.00, // 4.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fc5adf584fe9427de846&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 37,
                title: "FONE SEM FIO BLUETOOTH BASIKE FON-9856",
                price: 84.00, // 56.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fb70867d09430672e9b0&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 38,
                title: "FONE SEM FIO BLUETOOTH XIAOMI REDMI AIR DOTS",
                price: 30.00, // 20.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67ae124946340d282125b1f3&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "áudio"
            },
            {
                id: 39,
                title: "FONTE TIPO C BASIKE BA-CAR068",
                price: 37.50, // 25.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6751f0bd1f352f4e42e3c619&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 40,
                title: "FONTE TV BOX UNIVERSAL (VÁRIAS MARCAS)",
                price: 18.00, // 12.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67f82106b1210f32b37f996f&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 41,
                title: "FONTE USB INOVA 20W CAR-3181",
                price: 21.00, // 14.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=671f96c31853f07ae8a03b30&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 42,
                title: "KIT 4 EM 1 - RELOGIO SMARTWATCH + FONE BLUETOOTH + CABO E FONTE IPHONE INOVA WFCC-12756",
                price: 217.50, // 145.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=671f9588de09ef229856395c&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "kits"
            },
            {
                id: 43,
                title: "LIVRO CADERNO DE COLORIR BOBBIE GOODS",
                price: 30.00, // 20.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684ae04dcd18c3bae591e673&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "diversos"
            },
            {
                id: 44,
                title: "LUMINARIA DE PROJEÇAO ASTRONAUTAS E CAIXA DE SOM COM BLUETOOTH",
                price: 127.50, // 85.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67d3032d46200a9a11020311&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "iluminação"
            },
            {
                id: 45,
                title: "MINI LAMPADA LED USB INOVA LAN-30089",
                price: 6.00, // 4.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835ffba5b02e340ca6b18cb&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "iluminação"
            },
            {
                id: 46,
                title: "MINI UNITV SMART TV 8K V11",
                price: 5850.00, // 390.00 (Mercado: ~R$ 5.800,00)
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67e580ff7a338fa20b0a33f6&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 47,
                title: "MOUSE COM FIO SEISA",
                price: 12.00, // 8.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684ae117ad2faafd890daddb&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "informática"
            },
            {
                id: 48,
                title: "MOUSE SEM FIO LTOMEX AG-690",
                price: 37.50, // 25.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684ae146495b92de29bd7dd4&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "informática"
            },
            {
                id: 49,
                title: "PATINETE ELETRICO MOVI M10",
                price: 8250.00, // 5500.00 (Mercado: ~R$ 8.000,00)
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=68360e1c7c17956d1b286729&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 50,
                title: "PEN DRIVE 16GB SANDISK",
                price: 40.50, // 27.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684ae2caad2faafd890dbc13&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "armazenamento"
            },
            {
                id: 51,
                title: "PEN DRIVE 32GB SANDISK",
                price: 42.00, // 28.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684ae2e5cd18c3bae591f74a&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "armazenamento"
            },
            {
                id: 52,
                title: "PEN DRIVE 64GB SANDISK",
                price: 57.00, // 38.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684ae303dc38e9d3adb75721&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "armazenamento"
            },
            {
                id: 53,
                title: "PEN DRIVE 8GB SANDISK",
                price: 36.00, // 24.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684ae2a7e93192a94a4259b9&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "armazenamento"
            },
            {
                id: 54,
                title: "PLACA UBER AZUL",
                price: 19.50, // 13.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6650acfde328979afd0678e6&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "diversos"
            },
            {
                id: 55,
                title: "PLACA UBER BRANCA",
                price: 19.50, // 13.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=684ae32d790f5f0d9b71cdb5&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "diversos"
            },
            {
                id: 56,
                title: "POWERBANK INOVA 10000MAH MAH-8317/MU-8317/POW-8317",
                price: 75.00, // 50.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=671f9247de09ef2298561df6&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 57,
                title: "POWERBANK INOVA 5000MAH POW-1013/MU-1013",
                price: 30.00, // 20.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=66019a558026d96af34da66d&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 58,
                title: "POWERBANK PINENG 10000MAH PN-951",
                price: 52.50, // 35.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=664764fe233f6de5a2d1e09d&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "carregadores"
            },
            {
                id: 59,
                title: "PROJETOR MULTIMIDIA 4K",
                price: 577.50, // 385.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fa875220c8d771ac70a0&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 60,
                title: "RELOGIO SMARTWATCH BASIKE PRIME W34+",
                price: 82.50, // 55.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=65bbf6ead245c803e7f11215&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "wearables"
            },
            {
                id: 61,
                title: "TECLADO COM FIO INOVA KEY-11012",
                price: 45.00, // 30.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=6835fd6edf584fe9427df224&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "informática"
            },
            {
                id: 62,
                title: "TV BOX MXQ PRO 512GB 5G 4K",
                price: 142.50, // 95.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=63dbc6ea59a9c831c4fefe4e&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 63,
                title: "UNITV SMART TV 4K V10",
                price: 525.00, // 350.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=67ae3e068047e2e0c65f1105&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrônicos"
            },
            {
                id: 64,
                title: "VENTILADOR INOVA FAN-12306",
                price: 42.00, // 28.00
                image: "https://catalogo.sigecloud.com.br/api/ProdutoImagem/miniatura?p=656dea2a62071c44744a09a4&amp;g=54a59fd6-ed57-42d3-b420-54cc83d5efe1",
                category: "eletrodomésticos"
            }
        ];
