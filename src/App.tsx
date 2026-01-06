import { Container } from "./assets/components/Container";
import { WeatherContainer } from "./assets/components/WeatherContainer";
import { WeatherSearch } from "./assets/components/WeatherSearch";
import { WeatherContent } from "./assets/components/WeatherContent";
import { WeatherFooter } from "./assets/components/WeatherFooter";
import { Footer } from "./assets/components/Footer";

export function App() {
    return (
        <Container>
            <WeatherContainer>
                <WeatherSearch />
                <WeatherContent />
                <WeatherFooter>Atual. 03/01/2026, 11:33</WeatherFooter>
            </WeatherContainer>
            <Footer />
        </Container>
    );
}
