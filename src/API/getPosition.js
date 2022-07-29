const getPosition = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude })
            })
        } else {
            reject(alert('Geolocation not supported!'))
        }
    });
}

export default getPosition;