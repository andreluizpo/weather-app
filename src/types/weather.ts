export type WeatherProps = {
    // coordenadas
    coord: {
        lon: number; // longitude
        lat: number; // latitude
    };
    // informações principais do clima
    main: {
        temp: number; // temperatura atual
        feels_like: number; // sensação térmica
        humidity: number; // umidade
    };
    name: string; // nome da cidade
    // informações do sistema
    sys: {
        country: string; // país
    };
    timezone: number; // fuso horário
    // condições climáticas
    weather: [
        {
            description: string; // descrição do clima
            icon: string; // ícone do clima
        }
    ];
    // informações do vento
    wind: {
        speed: number; // velocidade do vento
        deg: number; // direção do vento
        gust: number; // Rajada de vento. Unidade padrão: metro/segundo, Métrica: metro/segundo, Imperial: milhas/hora
    };
    // informações sobre a chuva
    rain: {
        "1h": number;
    };
};
