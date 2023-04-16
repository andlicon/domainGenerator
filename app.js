const domainNameShorter = (domainName, extension) => {
    const shorterCondition = domainName.toLowerCase().endsWith(extension.toLowerCase());

    if( shorterCondition ) {
        const regex = new RegExp(`${extension}$`);
        domainName = domainName.replace(regex, "");
    }

    return domainName + "." + extension;
}

const generarDomain = () => {
    const pronoun = ['the', 'our'];
    const adj = ['great', 'big', 'last'];
    const noun = ['jogger', 'rancoon', 'OfUs'];
    const extensiones = ['com', 'net', 'us', 'io', 'con'];

    let domainArray = [];

    for(const pronombre of pronoun) {
        for(const adjetivo of adj) {
            for(const sustantivo of noun) {
                for(const extension of extensiones) {
                    //Si el sustantivo termina con la extension, eliminar esa porcion del sustantivo
                    let domainName = pronombre+adjetivo+sustantivo;
                    domainName = domainName.toLowerCase();
                    const domain = domainNameShorter(domainName, extension.toLowerCase());

                    domainArray.push(domain);
                }
            }
        }
    }

    return domainArray;
}

console.log(generarDomain());