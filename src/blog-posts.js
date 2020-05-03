export const getPosts = () => {

    return [
        {
            title:"Milyon Yılın Aşkı",
            slug:"hayatin-tanimi",
            details:require("./posts/Hayatin-Tanimi(SEN).md").default,
            date:"3 Mayıs 2020",
            back: "static/images/hayat.png",
        
        },
        
        {
            title:"İnsanlık Üzerine",
            slug:"insanlik-uzerine",
            details:require("./posts/insanlik-uzerine.md").default,
            date:"24 Aralık 2019",
            back: "static/images/clockwork.png",
        
        },

        {
            title:"Aşkı Anlamak",
            slug:"aski-anlamak",
            details:require("./posts/hayat.md").default,
            date:"22 Aralık 2019",
            back: "static/images/hayat.png",
        
        },
    {
        title:"Neden AŞK?",
        slug:"neden-ask",
        details:require('./posts/neden-ask.md').default,
        date:"21 Aralık 2019",
        back: "/static/images/neden.png",

 }

];

 }
