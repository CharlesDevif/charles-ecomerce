export async function getAllProduct() {
    const response = await fetch('https://back-ecommerce-bd3rjw268-jdedev-fr.vercel.app/product')
    const data = await response.json()

    console.log(data)
    return Promise.resolve(data)

}
