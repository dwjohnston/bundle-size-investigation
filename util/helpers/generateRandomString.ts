// Function to generate a random string of specified size
export function generateRandomString(size: number) : string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < size; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}