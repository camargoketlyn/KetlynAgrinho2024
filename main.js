document.addEventListener('DOMContentLoaded', () => {
    const contentImage = document.getElementById('content-image');
    const contentInfo = document.getElementById('content-info');

    const data = {
        btn1: {
            image: 'agricultura-organica.jpg',
            info: 'Práticas orgânicas envolvem o cultivo sem o uso de pesticidas químicos, utilizando adubos naturais e métodos que respeitam o equilíbrio ecológico.'
        },
        btn2: {
            image: 'agua natureza.jpg', 
            info: 'Preservação de água é fundamental para manter a sustentabilidade. Isso inclui técnicas de irrigação eficiente e práticas para evitar o desperdício de água.'
        }
    };

    document.getElementById('btn1').addEventListener('click', () => {
        contentImage.src = data.btn1.image;
        contentInfo.textContent = data.btn1.info;
    });

    document.getElementById('btn2').addEventListener('click', () => {
        contentImage.src = data.btn2.image;
        contentInfo.textContent = data.btn2.info;
    });
});