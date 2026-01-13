import { Container } from "./assets/components/Container";
import { WeatherContainer } from "./assets/components/WeatherContainer";
import { WeatherSearch } from "./assets/components/WeatherSearch";
import { WeatherContent } from "./assets/components/WeatherContent";
import { WeatherFooter } from "./assets/components/WeatherFooter";
import { Footer } from "./assets/components/Footer";
import { WeatherContextProvider } from "./contexts/WeatherContextProvider";

export function App() {
    return (
        <WeatherContextProvider>
            <Container>
                <WeatherContainer>
                    <WeatherSearch />
                    <WeatherContent />
                    <WeatherFooter />
                </WeatherContainer>
                <Footer />
            </Container>
        </WeatherContextProvider>
    );
}
