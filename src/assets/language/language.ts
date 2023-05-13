
function getLanguage(name: string, lang = "fr_FR"): string{
    console.log(lang)
    switch(lang){
    
        case "fr_FR":
            switch(name){
                
                case "%tokenValidatorText%":
                    return "afin de profiter de figrou, vous devez entrer votre token d'activation dans le champ ci-dessous";
            }
    }
}
export {getLanguage}