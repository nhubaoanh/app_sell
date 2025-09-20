export async function getProducts(){
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    if(!res.ok) throw new Error("Failed to fetch data");
    return res.json();
}