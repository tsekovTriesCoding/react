export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();

    if (!response.ok) { // 200, 300...
        throw new Error('Failed to fetch places');
    }

    return resData.places;
}