import { useEffect, useState } from 'react';
import { getAllProduct } from '../api/produit';

export function useHome() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getAllProduct().then(data => {
            setArticles(data)
        })
    }, [])
    const clic = () => {
        alert('vous avez cliqué')
    }
    return {
        articles,
        clic
    }
}