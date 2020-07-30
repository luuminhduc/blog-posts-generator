export async function getData(uri) {
    const res = await fetch(uri);
    const data = await res.json();
    return data;
}