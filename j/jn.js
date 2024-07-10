document.addEventListener("DOMContentLoaded", function() {
  const titulosdosvideos = [
    "Vlog Diário… canal @Ala***", "Desafio10… canal @Bet***", "ReceitaTop… canal @Car***", 
    "Vida na Roça… canal @Dav***", "Curiosidade… canal @Eli***", "Como Fazer… canal @Fer***", 
    "DIY Fácil… canal @Gab***", "GamePlay… canal @Hug***", "Review Tech… canal @Igo***", 
    "Moda 2024… canal @Jos***", "Truques101… canal @Kir***", "Top 5 Lugares… canal @Lia***", 
    "Comprinhas… canal @Mil***", "Reagindo a… canal @Nin***", "Série Nova… canal @Oli***", 
    "Viagem Luxo… canal @Pie***", "Dicas Saúde… canal @Qui***", "Rotina Fit… canal @Raf***", 
    "Pets Fofos… canal @Sar***", "Humor Total… canal @Tal***", "Receita Fit… canal @Ubi***", 
    "Aula Yoga… canal @Ver***", "Decoração… canal @Wil***", "Receita Fácil… canal @Xan***", 
    "Histórias… canal @Yur***", "Dia a Dia… canal @Zan***", "Livros Top… canal @Ali***", 
    "Análise Filmes… canal @Bru***", "Bate-Papo… canal @Cri***", "Culinária… canal @Dan***", 
    "Truques de… canal @Edo***", "Transformação… canal @Fab***", "Desafio Fit… canal @Gus***", 
    "Melhores Apps… canal @Han***", "Vida Saudável… canal @Ing***", "Cozinhando… canal @Jan***", 
    "Série 2024… canal @Kle***", "Tecnologia… canal @Lel***", "Descobertas… canal @Mon***", 
    "Estilo 2024… canal @Nat***", "Tendências… canal @Oli***", "Melhores Jogos… canal @Pac***", 
    "Cuidados… canal @Qia***", "Humor Viral… canal @Ren***", "Receitas Vegan… canal @Sof***", 
    "Relaxando… canal @Tho***", "Aprendendo… canal @Urs***", "Música Nova… canal @Viv***", 
    "Cultura Pop… canal @Wen***", "Fazendo Arte… canal @Xen***", "Brincando… canal @Yar***", 
    "Tutorial Pro… canal @Zor***", "Festa DIY… canal @Ann***", "Melhores Filmes… canal @Bia***", 
    "Casa Nova… canal @Cec***", "Dicas Úteis… canal @Den***", "Bastidores… canal @Ele***", 
    "Brincadeiras… canal @Fel***", "Férias 2024… canal @Gui***", "Diário Secreto… canal @Hel***", 
    "Testando… canal @Ica***", "Conhecendo… canal @Jul***", "Jogos Online… canal @Kai***", 
    "Novidade… canal @Lar***", "Aventura… canal @Mir***", "Projetos… canal @Nor***", 
    "Review Carro… canal @Orl***", "Fitness Home… canal @Pau***", "Receitas Rápidas… canal @Qui***", 
    "Passeando… canal @Raf***", "Estilo Vida… canal @Sam***", "Bolo Fácil… canal @Tal***", 
    "Jogos Antigos… canal @Urs***", "Estudando… canal @Vit***", "Vida Simples… canal @Wil***", 
    "Spa Caseiro… canal @Xia***", "Minimalismo… canal @Yur***", "Guia Beleza… canal @Zan***", 
    "Desafio Pro… canal @Ale***", "Refeições… canal @Bec***", "Mudança… canal @Cle***", 
    "Dieta Keto… canal @Duk***", "Bebidas Top… canal @Eva***", "Dicas Rápidas… canal @Fio***", 
    "Produtividade… canal @Gal***", "Fotografia… canal @Hug***", "Festa Infantil… canal @Ine***", 
    "Treino Total… canal @Jak***", "Saúde Mental… canal @Kar***", "Documentário… canal @Lia***", 
    "Cultura 2024… canal @May***", "Notícias Hoje… canal @Nin***", "Gadgets Pro… canal @Owe***", 
    "Meditação… canal @Pau***", "Pintando… canal @Qui***", "Meu Estilo… canal @Ros***", 
    "Rotina Beleza… canal @Sia***", "Maquiagem… canal @Tin***", "Animal Planet… canal @Uri***", 
    "Orçamento… canal @Ver***"
  ];

  let stopNotifications = false;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function getRandomTime(viewsCount) {
    if (viewsCount <= 10000) {
      return getRandomInt(6, 59) + " minutos atrás";
    } else if (viewsCount <= 20000) {
      return getRandomInt(1, 6) + " horas atrás";
    } else {
      return "há 1 dia";
    }
  }

  function getRandomOrderNumber() {
    var orderNumber = "";
    for (var i = 0; i < 10; i++) {
      orderNumber += getRandomInt(0, 9);
    }
    return "#" + orderNumber;
  }

  function getRandomVideoTitle() {
    return titulosdosvideos[getRandomInt(0, titulosdosvideos.length - 1)];
  }

  function showNotification() {
    if (stopNotifications) return;

    var viewsCount = getRandomInt(3300, 100230);
    document.getElementById("views-count").innerText = "+" + formatNumber(viewsCount);

    var notificationTime = getRandomTime(viewsCount);
    document.getElementById("notification-time").innerText = notificationTime;

    var orderNumber = getRandomOrderNumber();
    document.getElementById("order-number").innerText = orderNumber;

    var videoTitle = getRandomVideoTitle();
    document.getElementById("video-title").innerText = videoTitle;

    var notification = document.getElementById("    var notification = document.getElementById("notification");
    notification.style.display = "flex";

    setTimeout(function() {
      notification.style.display = "none";
      scheduleNextNotification();
    }, 7000);
  }

  function scheduleNextNotification() {
    if (stopNotifications) return;

    var interval = getRandomInt(6000, 11000);
    setTimeout(showNotification, interval);
  }

  // Initial call
  showNotification();

  // Close button functionality
  document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("notification").style.display = "none";
    stopNotifications = true;
  });
});