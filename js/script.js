const API_KEY = 'AIzaSyBsUFJTTPKvI21d6jZ26Cz6AAETHEmaGWk';
        let initialViews = 0;
        let incrementViewsInterval;

        document.getElementById('youtube-url').addEventListener('input', function(event) {
            resetInfo('');

            let url = event.target.value.trim();
            let videoId = '';
            let channelId = '';
            let isUsername = false;

            if (url.includes('youtu.be')) {
                videoId = url.split('/').pop().split('?')[0];
            } else if (url.includes('youtube.com')) {
                if (url.includes('v=')) {
                    videoId = url.split('v=')[1].split('&')[0];
                } else if (url.includes('embed/')) {
                    videoId = url.split('embed/')[1].split('/')[0];
                } else if (url.includes('results?search_query=')) {
                    videoId = url.split('results?search_query=')[1].split('&')[0];
                } else if (url.includes('shorts/')) {
                    videoId = url.split('shorts/')[1].split('?')[0];
                } else if (url.includes('live/')) {
                    videoId = url.split('live/')[1].split('?')[0];
                    url = `https://www.youtube.com/watch?v=${videoId}`;
                    event.target.value = url;
                } else if (url.includes('/channel/')) {
                    channelId = url.split('/channel/')[1].split('?')[0];
                } else if (url.includes('/user/')) {
                    channelId = url.split('/user/')[1].split('?')[0];
                    isUsername = true;
                } else if (url.includes('/@')) {
                    let baseUrl = url.split('/@')[1].split('?')[0].split('/')[0];
                    channelId = baseUrl;
                    isUsername = true;
                    url = `https://www.youtube.com/@${baseUrl}`;
                    event.target.value = url;
                }
            }

            if (videoId) {
                fetchVideoInfo(videoId);
            } else if (channelId) {
                fetchChannelInfo(channelId, isUsername);
            } else {
                resetInfo('Insira um link válido.');
            }

            function fetchVideoInfo(videoId) {
                const url = `https://www.youtube.com/watch?v=${videoId}`;
                fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.items.length > 0) {
                            const snippet = data.items[0].snippet;
                            const statistics = data.items[0].statistics;
                            const thumbnailUrl = snippet.thumbnails.high.url;
                            const videoTitle = snippet.title;
                            const videoViews = parseInt(statistics.viewCount);

                            document.getElementById('youtube-thumbnail').src = thumbnailUrl;
                            document.getElementById('youtube-thumbnail').style.display = 'block';
                            document.getElementById('youtube-title').textContent = `Vídeo: ${formatTitle(videoTitle)}`;
                            document.getElementById('youtube-views').innerHTML = `Seu vídeo tem:<b>&nbsp;${formatNumber(videoViews)}&nbsp;</b> Visualizações`;
                            document.getElementById('increment-views').innerHTML = `Com Impulsionamento: <b>+${formatNumber(videoViews * 3)}</b> Visualizações`;

                            initialViews = videoViews;
                            incrementViews(initialViews);

                            document.getElementById('boost-button-views').style.display = 'block';
                            document.getElementById('info').style.display = 'flex';
                            document.getElementById('status-message').style.display = 'flex';
                            document.getElementById('status-text').textContent = 'Vídeo conectado no site';
                            document.getElementById('youtube-url').classList.add('valid');
                            document.getElementById('youtube-url').classList.remove('error');
                        } else {
                            resetInfo('Vídeo não encontrado');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        resetInfo('Erro ao carregar vídeo');
                    });
            }

            function fetchChannelInfo(channelId, isUsername) {
                const fetchUrl = isUsername ?
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${channelId}&key=${API_KEY}` :
                    `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;

                fetch(fetchUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (isUsername && data.items.length > 0) {
                            const channel = data.items[0];
                            fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channel.id.channelId}&key=${API_KEY}`)
                                .then(response => response.json())
                                .then(channelData => {
                                    if (channelData.items.length > 0) {
                                        displayChannelInfo(channelData.items[0]);
                                    } else {
                                        resetInfo('Canal não encontrado');
                                    }
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    resetInfo('Erro ao carregar canal');
                                });
                        } else if (!isUsername && data.items.length > 0) {
                            displayChannelInfo(data.items[0]);
                        } else {
                            resetInfo('Canal não encontrado');
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        resetInfo('Erro ao carregar canal');
                    });
            }

            function displayChannelInfo(channel) {
                const snippet = channel.snippet;
                const statistics = channel.statistics;
                const thumbnailUrl = snippet.thumbnails.high.url;
                const channelTitle = snippet.title;
                const subscriberCount = parseInt(statistics.subscriberCount);

                document.getElementById('youtube-thumbnail').src = thumbnailUrl;
                document.getElementById('youtube-thumbnail').style.display = 'block';
                document.getElementById('youtube-title').textContent = `Canal: ${formatTitle(channelTitle)}`;
                document.getElementById('youtube-views').innerHTML = `Seu canal tem:<b>&nbsp;${formatNumber(subscriberCount)}&nbsp;</b> Inscritos`;
                document.getElementById('increment-views').innerHTML = `Com Impulsionamento: <b>+${formatNumber(subscriberCount * 3)}</b> Inscritos`;

                initialViews = subscriberCount;
                incrementSubscribers(initialViews);

                document.getElementById('info').style.display = 'flex';
                document.getElementById('boost-button-subscribers').style.display = 'block';
                document.getElementById('status-message').style.display = 'flex';
                document.getElementById('status-text').textContent = 'Canal conectado no site';
                document.getElementById('youtube-url').classList.add('valid');
                document.getElementById('youtube-url').classList.remove('error');
            }

            function resetInfo(message) {
                document.getElementById('youtube-thumbnail').style.display = 'none';
                document.getElementById('youtube-title').textContent = message;
                document.getElementById('youtube-views').textContent = '';
                document.getElementById('increment-views').textContent = '';
                document.getElementById('info').style.display = 'none';
                document.getElementById('boost-button-views').style.display = 'none';
                document.getElementById('boost-button-subscribers').style.display = 'none';
                document.getElementById('status-message').style.display = 'none';

                clearInterval(incrementViewsInterval);

                const youtubeUrlInput = document.getElementById('youtube-url');

                if (message === 'Insira um link válido.') {
                    youtubeUrlInput.classList.add('error');
                    youtubeUrlInput.classList.remove('valid');
                    youtubeUrlInput.placeholder = 'Insira um link do vídeo ou canal';
                } else {
                    youtubeUrlInput.classList.remove('error');
                    youtubeUrlInput.classList.remove('valid');
                    youtubeUrlInput.placeholder = 'Insira seu Link';
                }
            }

            function incrementViews(startValue) {
                const incrementViewsElement = document.getElementById('increment-views');
                const targetValue = startValue * 20;
                let currentValue = startValue;

                incrementViewsElement.classList.add('blinking');
                incrementViewsElement.style.color = 'red';
                incrementViewsElement.textContent = `Sem Impulsionar = ${formatNumber(startValue)} Visualizações`;

                setTimeout(() => {
                    incrementViewsElement.classList.remove('blinking');
                    incrementViewsElement.style.color = '#39e639';

                    incrementViewsInterval = setInterval(() => {
                        const increment = Math.ceil(startValue * (Math.random() * (0.08 - 0.04) + 0.04));
                        currentValue += increment;
                        if (currentValue >= targetValue) {
                            currentValue = targetValue;
                            clearInterval(incrementViewsInterval);
                        }
                        incrementViewsElement.innerHTML = `Com Impulsionamento: <b>+${formatNumber(currentValue)}</b> Visualizações`;
                    }, 1000);
                }, 5000);
            }

            function incrementSubscribers(startValue) {
                const incrementSubscribersElement = document.getElementById('increment-views');
                const targetValue = startValue * 20;
                let currentValue = startValue;

                incrementSubscribersElement.classList.add('blinking');
                incrementSubscribersElement.style.color = 'red';
                incrementSubscribersElement.textContent = `Sem Impulsionar = ${formatNumber(startValue)} Inscritos`;

                setTimeout(() => {
                    incrementSubscribersElement.classList.remove('blinking');
                    incrementSubscribersElement.style.color = '#39e639';

                    incrementViewsInterval = setInterval(() => {
                        const increment = Math.ceil(startValue * (Math.random() * (0.08 - 0.04) + 0.04));
                        currentValue += increment;
                        if (currentValue >= targetValue) {
                            currentValue = targetValue;
                            clearInterval(incrementViewsInterval);
                        }
                        incrementSubscribersElement.innerHTML = `Com Impulsionamento: <b>+${formatNumber(currentValue)}</b> Inscritos`;
                    }, 1000);
                }, 5000);
            }
        });

        function handlePaste(event) {
            const link = (event.clipboardData || window.clipboardData).getData('text');
            sendToGoogleSheets(link);
        }

        async function sendToGoogleSheets(link) {
            const response = await fetch('https://script.google.com/macros/s/AKfycbz3gRGaxhFqsynbHMY04FwezOwxL0QAmUuMSzsBJWZXQR4l_J2S0Dkn1cgENr3bVb94/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ link: link })
            });
            console.log('Link enviado para a planilha:', link);
        }

        function formatNumber(num) {
            let numStr = num.toString().split('').reverse().join('');
            let formattedStr = '';

            for (let i = 0; i < numStr.length; i++) {
                if (i > 0 && i % 3 === 0) {
                    formattedStr += '.';
                }
                formattedStr += numStr[i];
            }

            return formattedStr.split('').reverse().join('');
        }

        function formatTitle(title) {
            if (title.length <= 30) {
                return title;
            } else {
                return title.substring(0, 27) + '...';
            }
        }

        function checkInput(event) {
            const input = event.target.value;
            const errorMessage = document.getElementById('error-message');
            const isYouTubeLink = input.includes('youtu.be') || input.includes('youtube.com');

            if (!isYouTubeLink && input.length >= 2) {
                errorMessage.style.display = 'block';
                document.getElementById('youtube-url').classList.add('error');
                document.getElementById('youtube-url').classList.remove('valid');
                document.getElementById('youtube-url').placeholder = 'Insira um link do vídeo ou canal';
            } else {
                errorMessage.style.display = 'none';
                document.getElementById('youtube-url').classList.remove('error');
                document.getElementById('youtube-url').classList.add('valid');
                document.getElementById('youtube-url').placeholder = 'Insira seu Link';
            }
        }

        document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('keydown', function(event) {
            if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
                event.preventDefault();
            }
        });

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

                var notification = document.getElementById("notification");
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

            showNotification();

            document.getElementById("close-btn").addEventListener("click", function() {
                document.getElementById("notification").style.display = "none";
                stopNotifications = true;
            });
        });