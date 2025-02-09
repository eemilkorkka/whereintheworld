interface CountryDetails {
    name: string,
    /*population: number,
    region: string,
    subRegion: string,
    capital?: string[],
    topLevelDomain: string,
    currencies: string,
    languages: string[],
    borderingCountries: string[]*/
}

const CountryView = ({ name }: CountryDetails) => {

    return (
        <>
        <h1>Hello from {name} Country view page!</h1>
        </>
    )
}

export default CountryView;