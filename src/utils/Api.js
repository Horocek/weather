const fetchData = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},rus&appid=dfa9203fc19394100719613828a57682&units=metric&lang=ru`);
    return await response.json();
};

export {
    fetchData
};