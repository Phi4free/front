// Configurações de comunicação com api axios ou fetch
export const BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') 
? "http://localhost:3000/" : "https://back-phi4free.vercel.app/"