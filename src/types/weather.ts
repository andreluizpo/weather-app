export type WeatherProps = {
    // coordenadas
    coord: {
        lon: number; // longitude
        lat: number; // latitude
    };
    // Hora do cálculo dos dados
    dt: number; // unix, UTC
    // informações principais do clima
    main: {
        temp: number; // temperatura atual
        feels_like: number; // sensação térmica
        humidity: number; // umidade
        pressure: number; // Pressão atmosférica ao nível do mar, hPa
    };
    name: string; // nome da cidade
    // informações do sistema
    sys: {
        country: string; // país
        sunrise: number; // Nascer do sol
        sunset: number; // Por do sol
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
    rain?: {
        "1h": number;
    };
};
