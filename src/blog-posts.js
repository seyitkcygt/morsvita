export const getPosts = () => {

    return [
        {
            title:"İnsanlık Üzerine",
            slug:"insanlik-uzerine",
            details:require("./posts/insanlik-uzerine.md").default,
            date:"24 Aralık 2019",
            back: "static/images/clocwork.png",
        
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

 },
 {
     title:"Nahl 15(?)",
     slug:"nahl-15",
     details:require("./posts/nahl-15.md").default,
     date:"16 Haziran 2019",

}

];

 }